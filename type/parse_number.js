(function(){

    const hex_table = (function(table){

        for(let i = 0; i < 256; i++){

            table[(i).toString(16)] = i;
        }

        return table;

    })(Object.create(null));

    const int_table = (function(table){

        for(let i = 0; i < 256; i++){

            table[i] = (i).toString(16);
        }

        return table;

    })(new Array(255));

    addSuite("Parse Number", function(){

        return +("1");
    });

    addSuite("Parse Number", function(){

        return parseInt("1");
    });

    addSuite("Parse Number", function(){

        return Number("1");
    });

    addSuite("Parse Number", function(){

        return parseInt("1", 10);
    });

    addSuite("Parse Number", function(){

        return parseInt("f", 16);
    });

    addSuite("Parse Number", function(){

        return hex_table["f"];
    });

    addSuite("Parse Number", function(){

        return parseInt("1px");
    });

    addSuite("Parse Number", function(){

        return parseInt("1px", 10);
    });

    addSuite("Parse Number", function(){

        return parseFloat("1");
    });

    addSuite("Parse Number", function(){

        return parseFloat("1px");
    });

    addSuite("Parse Number", function(){

        return (15).toString(16);
    });

    addSuite("Parse Number", function(){

        return int_table[16];
    });
})();