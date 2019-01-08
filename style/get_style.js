(function(){

    const main = document.getElementsByTagName("main")[0];

    addSuite("Get Style", function(){

        return main.style.left;
    });

    addSuite("Get Style", function(){

        return getComputedStyle(main).left;
    });

    addSuite("Get Style", function(){

        return getComputedStyle(main, "").left;
    });

    addSuite("Get Style", function(){

        return getComputedStyle(main, null).left;
    });

    addSuite("Get Style", function(){

        return getComputedStyle(main, void 0).left;
    });

    addSuite("Get Style", function(){

        return (main._style1 || (main._style1 = main.style)).left;
    });

    addSuite("Get Style", function(){

        return (main._style2 || (main._style2 = getComputedStyle(main))).left;
    });

    addSuite("Get Style", function(){

        return (main._style3 || (main._style3 = main.style)).cssText.split(";")[0].split(":")[1];
    });
})();
