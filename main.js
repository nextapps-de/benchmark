(function(){

    const select_test = document.getElementsByTagName("select")[0];
    const select_time = document.getElementsByTagName("select")[1];
    const input_shuffle = document.getElementsByTagName("input")[0];
    const main = document.getElementsByTagName("main")[0];

    const tests = {};

    window["addSuite"] = function(name, fn){

        (tests[name] || (tests[name] = [])).push(fn);

        return fn;
    };

    let results = {};
    let index = 0;

    window["startTest"] = function(){

        index || (main.textContent = "");

        if(!index){

            if(input_shuffle.checked){

                shuffle(tests[select_test.value]);
            }

            warmup();
        }

        setTimeout(runner);
    };

    window["resetTest"] = function(){

        index = 0;
        results = {};
    };

    window["previewTest"] = function(){

        const test = tests[this.options[this.selectedIndex].value];
        const test_length = test.length;

        let str = "";

        for(let i = 0; i < test_length; i++){

            str += toString(test[i]) + "\n----------------------------------------------------\n";
        }

        main.textContent = str;
    };

    function toString(fn){

        const fn_str = fn.toString();

        return fn_str.substring(fn_str.indexOf("{") + 1, fn_str.lastIndexOf("}")).trim().replace("return ", "").replace(/\n/g, "").replace(/    /g, " ").replace(/  /g, " ");
    }

    function runner(){

        const suite = select_test.value;
        const test = tests[suite];
        const current = test[index || (index = 0)];
        const time = parseInt(select_time.value, 10);
        const loops = (determineLoops(current, 1) * (time / 1000)) >> 0;

        const start = Date.now();

        for(let a = 0; a < loops; a++){

            current();
        }

        const duration = Date.now() - start;

        add_result(suite, current, loops, duration);

        if(++index < test.length){

            setTimeout(runner);
        }
        else{

            render_results(suite);
            index = 0;
        }
    }

    function add_result(suite, current, loops, duration){

        const fn_body = toString(current);

        let tmp = results[suite] || (results[suite] = {});
            tmp = tmp[fn_body] || (tmp[fn_body] = { loops: 0, duration: 0 });

        tmp.loops += loops;
        tmp.duration += duration;

        const result = (loops * (1000 / duration)) >> 0;
        const result_all = (tmp.loops * (1000 / tmp.duration)) >> 0;

        render_result(fn_body, result, result_all);
    }

    function render_result(fn_body, result, result_all){

        main.textContent += fn_body + "\n" + result + " ops/s (" + ("" + result).length + ") / " +
                                             result_all + " ops/s (" + ("" + result_all).length + ")\n----------------------------------------------------\n";
    }

    function render_results(suite){

        const test = tests[suite];
        const test_length = test.length;
        const results_arr = new Array(test_length);

        let max_value = 0;

        for(let i = 0; i < test_length; i++){

            const fn_str = toString(test[i]);
            const item = results[suite][fn_str];
            const value = (item.loops * (1000 / item.duration)) >> 0;

            results_arr[i] = {

                name: fn_str,
                result: value
            };

            if(value > max_value){

                max_value = value;
            }
        }

        results_arr.sort(function(a, b){

            return b.result - a.result;
        });

        let str = "";

        for(let i = 0; i < test_length; i++){

            const current = results_arr[i];
            const body = current.name;
            const value = current.result;

            str += (i + 1) + ". " + body + "  " + (((100 / max_value * value * 100) >> 0) / 100) + "%\n";
        }

        main.textContent += str + "----------------------------------------------------\n\n"
    }

    window.onload = function(){

        const keys = Object.keys(tests);

        for(let i = 0; i < keys.length; i++){

            const option = document.createElement("option");

            option.textContent = keys[i];
            option.value = keys[i];

            select_test.appendChild(option);
        }

        window["previewTest"].call(select_test);
    };

    function warmup(){

        const suite = select_test.value;
        const test = tests[suite];

        for(let i = 0; i < test.length; i++){

            determineLoops(test[i], 1);
        }
    }

    function determineLoops(test, loops){

        const start = Date.now();

        for(let a = 0; a < loops; a++){

            test();
        }

        const duration = Date.now() - start;

        if(duration < 50){

            return determineLoops(test, (loops * 50 / (duration + 1)) >> 0);
        }
        else if(duration > 250){

            return determineLoops(test, (loops * 100 / duration) >> 0);
        }
        else{

            return loops * (1000 / duration);
        }
    }

    function shuffle(array) {

        let len = array.length;

        while(len) {

            const index = (Math.random() * (len--)) >> 0;
            const tmp = array[len];

            array[len] = array[index];
            array[index] = tmp;
        }

        return array;
    }
})();