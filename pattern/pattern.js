(function(){

    const object = (function(){

        let bar = 0;

        return {

            foo: function(val){ bar = val; }
        };
    })();

    const literal = (function(){

        return {

            bar: 0,
            foo: function(val){ this.bar = val; }
        };
    })();

    const fn_new = (function(){

        return new function(){

            let bar = 0;

            this.foo = function(val){ bar = val; }
        };
    })();

    const fn_prop = (function(){

        return new function(){

            this.bar = 0;

            this.foo = function(val){ this.bar = val; }
        };
    })();

    const fn_proto = (function(){

        function Proto(){

            this.bar = 0;
        }

        Proto.prototype.foo = function(val){ this.bar = val; };

        return new Proto();
    })();

    addSuite("Pattern", function(){

        return object.foo();
    });

    addSuite("Pattern", function(){

        return literal.foo();
    });

    addSuite("Pattern", function(){

        return fn_new.foo();
    });

    addSuite("Pattern", function(){

        return fn_prop.foo();
    });

    addSuite("Pattern", function(){

        return fn_proto.foo();
    });
})();
