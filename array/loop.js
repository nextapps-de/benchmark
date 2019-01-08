(function(){

    const arr = (function(arr){

        for(let i = 0; i < arr.length; arr[i++] = 1){}

        return arr;

    })(new Array(100));

    addSuite("Loop Array", function(){

        let i = 0;
        let tmp;

        while (i < arr.length) {
            tmp = arr[i];
            i++;
        }

        return tmp;
    });

    addSuite("Loop Array", function(){

        let i = 0,
            len = arr.length;
        let tmp;

        while (i < len) {
            tmp = arr[i];
            i++;
        };

        return tmp;
    });

    addSuite("Loop Array", function(){

        let i = arr.length;
        let tmp;

        while (i--) {
            tmp = arr[i];
        };

        return tmp;
    });

    addSuite("Loop Array", function(){

        let i = arr.length;
        let tmp;

        while (i-- > 0) {
            tmp = arr[i];
        };

        return tmp;
    });

    addSuite("Loop Array", function(){

        let i = arr.length;
        let tmp;

        do {
            tmp = arr[i];
        } while (i--);

        return tmp;
    });

    addSuite("Loop Array", function(){

        let tmp;

        for (let i = arr.length; i--;) {
            tmp = arr[i];
        }

        return tmp;
    });

    addSuite("Loop Array", function(){

        let tmp;

        for (let i = 0; i < arr.length; ++i) {
            tmp = arr[i];
        }

        return tmp;
    });

    addSuite("Loop Array", function(){

        let tmp;

        for (let i = 0, len = arr.length; i < len; ++i) {
            tmp = arr[i];
        }

        return tmp;
    });

    addSuite("Loop Array", function(){

        let tmp;

        for (let i = -1; ++i < arr.length;) {
            tmp = arr[i];
        }

        return tmp;
    });

    addSuite("Loop Array", function(){

        let tmp;

        for (let i = -1, len = arr.length; ++i < len;) {
            tmp = arr[i];
        }

        return tmp;
    });

    addSuite("Loop Array", function(){

        let tmp;

        for (let i = 0, len = arr.length; i < len; tmp = arr[i++]) {}

        return tmp;
    });

    addSuite("Loop Array", function(){

        let tmp;

        arr.forEach(function(x) {
            tmp = x;
        });

        return tmp;
    });

    addSuite("Loop Array", function(){

        let tmp;

        const foo = function(x) {
            tmp = x;
        };

        arr.forEach(foo);

        return tmp;
    });
})();

