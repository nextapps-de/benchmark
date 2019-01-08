(function(){

    const string = "#ffffff";

    addSuite("Chunks", function(){

        return [string.substring(1, 3), string.substring(3, 5), string.substring(5, 7)];
    });

    addSuite("Chunks", function(){

        return [string[1] + string[2], string[3] + string[4], string[5] + string[6]];
    });

    addSuite("Chunks", function(){

        const arr = [];

        arr[0] = string[1] + string[2];
        arr[1] = string[3] + string[4];
        arr[2] = string[5] + string[6];

        return arr;
    });

    addSuite("Chunks", function(){

        const arr = new Array(3);

        arr[0] = string[1] + string[2];
        arr[1] = string[3] + string[4];
        arr[2] = string[5] + string[6];

        return arr;
    });

    addSuite("Chunks", function(){

        return string.substring(1).match(/(..?)/g);
    });

    addSuite("Chunks", function(){

        return string.substring(1).match(/.{1,2}/g);
    });

})();
