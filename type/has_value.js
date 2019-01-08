(function(){

    const val_undef = undefined;
    const val_false = false;
    const val_zero = 0;
    const val_empty = "";
    const val_void = void 0;
    const val_null = null;

    addSuite("Has Value", function(){

        return val_undef ? true : false;
    });

    addSuite("Has Value", function(){

        return val_false ? true : false;
    });

    addSuite("Has Value", function(){

        return val_zero ? true : false;
    });

    addSuite("Has Value", function(){

        return val_empty ? true : false;
    });

    addSuite("Has Value", function(){

        return val_void ? true : false;
    });

    addSuite("Has Value", function(){

        return val_null ? true : false;
    });
})();