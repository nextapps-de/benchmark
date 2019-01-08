(function(){

    const undefined_cache = undefined;
    const undefined_void = void 0;

    const obj = {

        x: 1,
        y: 1
    };

    function is_undefined(val){

        return typeof val === "undefined";
    }

    function helper(obj){

        return typeof obj.x === "undefined" || typeof obj.y === "undefined" || typeof obj.z === "undefined";
    }

    // -------------------------------------------------------------------------------------------------

    addSuite("Check Type", function(){

        return typeof obj.x === "undefined" || typeof obj.y === "undefined" || typeof obj.z === "undefined";
    });

    addSuite("Check Type", function(){

        return obj.x === undefined || obj.y === undefined || obj.z === undefined;
    });

    addSuite("Check Type", function(){

        return obj.x === void 0 || obj.y === void 0 || obj.z === void 0;
    });

    addSuite("Check Type", function(){

        return !obj.x || !obj.y || !obj.z;
    });

    addSuite("Check Type", function(){

        return obj.x && obj.y && obj.z;
    });

    addSuite("Check Type", function(){

        return obj.x === undefined_cache || obj.y === undefined_cache || obj.z === undefined_cache;
    });

    addSuite("Check Type", function(){

        return obj.x === undefined_void || obj.y === undefined_void || obj.z === undefined_void;
    });

    addSuite("Check Type", function(){

        return is_undefined(obj.x) || is_undefined(obj.y) || is_undefined(obj.z);
    });

    addSuite("Check Type", function(){

        return helper(obj);
    });

    // -------------------------------------------------------------------------------------------------

    const fn = new function(){

        this.x = 1;
        this.y = 1;
    };

    addSuite("Check Type", function(){

        return typeof fn.x === "undefined" || typeof fn.y === "undefined" || typeof fn.z === "undefined";
    });

    addSuite("Check Type", function(){

        return fn.x && fn.y && fn.z;
    });

    addSuite("Check Type", function(){

        return !fn.x || !fn.y || !fn.z;
    });

    addSuite("Check Type", function(){

        return fn.x === undefined || fn.y === undefined || fn.z === undefined;
    });

    addSuite("Check Type", function(){

        return fn.x === void 0 || fn.y === void 0 || fn.z === void 0;
    });

    addSuite("Check Type", function(){

        return fn.x === undefined_cache || fn.y === undefined_cache || fn.z === undefined_cache;
    });

    addSuite("Check Type", function(){

        return is_undefined(fn.x) || is_undefined(fn.y) || is_undefined(fn.z);
    });

    addSuite("Check Type", function(){

        return helper(fn);
    });

    addSuite("Check Type", function(){

        return fn.x === undefined_void || fn.y === undefined_void || fn.z === undefined_void;
    });

})();