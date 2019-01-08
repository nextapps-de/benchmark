(function(){

    const main = document.getElementsByTagName("main")[0];

    addSuite("Set Style", function(){

        main.style.left = "0px";
    });

    addSuite("Set Style", function(){

        main.style.left = 0;
    });

    addSuite("Set Style", function(){

        if(main.style.left !== "0px") main.style.left = "0px";
    });

    addSuite("Set Style", function(){

        main.style.setProperty("left", "0px");
    });

    addSuite("Set Style", function(){

        (main._style || (main._style = main.style)).setProperty("left", "0px");
    });

    addSuite("Set Style", function(){

        main.style.setProperty("left", 0);
    });

    addSuite("Set Style", function(){

        main.style.setProperty("left", "0px", "");
    });

    addSuite("Set Style", function(){

        main.style.setProperty("left", "0px", null);
    });

    addSuite("Set Style", function(){

        main.style.setProperty("left", "0px", void 0);
    });

    addSuite("Set Style", function(){

        main.style.setProperty("left", "0px", "important");
    });

    addSuite("Set Style", function(){

        main.style.cssText = "left:0";
    });
})();
