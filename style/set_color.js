(function(){

    addSuite("Set Color", function(){

        setProperty("white");
    });

    addSuite("Set Color", function(){

        setProperty("#fff");
    });

    addSuite("Set Color", function(){

        setProperty("#ffffff");
    });

    addSuite("Set Color", function(){

        setProperty("rgb(255, 255, 255)");
    });

    addSuite("Set Color", function(){

        setProperty("rgb(100%, 100%, 100%)");
    });

    addSuite("Set Color", function(){

        setProperty("rgba(255, 255, 255, 1)");
    });

    addSuite("Set Color", function(){

        setProperty("rgba(100%, 100%, 100%, 1)");
    });

    addSuite("Set Color", function(){

        setProperty("hsl(180, 100%, 100%)");
    });

    addSuite("Set Color", function(){

        setProperty("hsla(180, 100%, 100%, 1)");
    });

    const style = document.getElementsByTagName("main")[0].style;

    function setProperty(value){

        style.setProperty("background-color", value);
    }

})();
