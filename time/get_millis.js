addSuite("Get Milliseconds", function(){

    return performance.now();
});

addSuite("Get Milliseconds", function(){

    return Date.now();
});

addSuite("Get Milliseconds", function(){

    return new Date().getTime();
});

addSuite("Get Milliseconds", function(){

    return console.time("1");
});