(function(){

    let bar = 0;

    const extern_top = (function(){

        let bar = 0;

        function helper(val){

            bar = val;  bar = val; bar = val; bar = val; bar = val;
            bar = val;  bar = val; bar = val; bar = val; bar = val;
            bar = val;  bar = val; bar = val; bar = val; bar = val;
            bar = val;  bar = val; bar = val; bar = val; bar = val;
            return bar;
        }

        return new function(){

            this.foo = function(val){ return helper(val); };
        };
    })();

    const extern_bottom = (function(){

        let bar = 0;

        return new function(){

            this.foo = function(val){ return helper(val); };
        };

        function helper(val){

            bar = val;  bar = val; bar = val; bar = val; bar = val;
            bar = val;  bar = val; bar = val; bar = val; bar = val;
            bar = val;  bar = val; bar = val; bar = val; bar = val;
            bar = val;  bar = val; bar = val; bar = val; bar = val;
            return bar;
        }
    })();

    const member = (function(){

        let bar = 0;

        return new function(){

            this.bar = bar;
            this.helper = function(val){
                bar = val;  bar = val; bar = val; bar = val; bar = val;
                bar = val;  bar = val; bar = val; bar = val; bar = val;
                bar = val;  bar = val; bar = val; bar = val; bar = val;
                bar = val;  bar = val; bar = val; bar = val; bar = val;
                return bar;
            };
            this.foo = function(val){ return this.helper(val); }
        };
    })();

    const proto = (function(){

        let bar = 0;

        function Proto(){

            this.bar = 0;
        }

        Proto.prototype.helper = function(val){
            bar = val;  bar = val; bar = val; bar = val; bar = val;
            bar = val;  bar = val; bar = val; bar = val; bar = val;
            bar = val;  bar = val; bar = val; bar = val; bar = val;
            bar = val;  bar = val; bar = val; bar = val; bar = val;
            return bar;
        };
        Proto.prototype.foo = function(val){ return this.helper(val); };

        return new Proto();
    })();

    const proto_class = (function(){

        function Proto(){

            this.bar = 0;
        }

        Proto.prototype.helper = function(val){
            this.bar = val;  this.bar = val; this.bar = val; this.bar = val; this.bar = val;
            this.bar = val;  this.bar = val; this.bar = val; this.bar = val; this.bar = val;
            this.bar = val;  this.bar = val; this.bar = val; this.bar = val; this.bar = val;
            this.bar = val;  this.bar = val; this.bar = val; this.bar = val; this.bar = val;
            return this.bar;
        };
        Proto.prototype.foo = function(val){ return this.helper(val); };

        return new Proto();
    })();

    const proto_cached = (function(){

        function Proto(){

            this.bar = 0;
        }

        Proto.prototype.helper = function(val){
            const self = this;
            self.bar = val;  self.bar = val; self.bar = val; self.bar = val; self.bar = val;
            self.bar = val;  self.bar = val; self.bar = val; self.bar = val; self.bar = val;
            self.bar = val;  self.bar = val; self.bar = val; self.bar = val; self.bar = val;
            self.bar = val;  self.bar = val; self.bar = val; self.bar = val; self.bar = val;
            return self.bar;
        };
        Proto.prototype.param = function(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16,v17,v18,v19,v20){
            const self = this;
            self.bar = v1;  self.bar = v2; self.bar = v3; self.bar = v4; self.bar = v5;
            self.bar = v6;  self.bar = v7; self.bar = v8; self.bar = v9; self.bar = v10;
            self.bar = v11;  self.bar = v12; self.bar = v13; self.bar = v14; self.bar = v15;
            self.bar = v16;  self.bar = v17; self.bar = v18; self.bar = v19; self.bar = v20;
            return self.bar;
        };
        Proto.prototype.foo = function(val){ return this.helper(val); };

        return new Proto();
    })();

    addSuite("Scope", function(){

        return extern_top.foo(1);
    });

    addSuite("Scope", function(){

        return extern_bottom.foo(1);
    });

    addSuite("Scope", function(){

        return member.foo(1);
    });

    addSuite("Scope", function(){

        return proto.foo(1);
    });

    addSuite("Scope", function(){

        return proto_class.foo(1);
    });

    addSuite("Scope", function(){

        return proto_cached.foo(1);
    });

    addSuite("Scope", function(){

        return proto_cached.param(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
    });

    addSuite("Scope", function(){

        var self = proto_cached.bar;

        self.bar = 1;  self.bar = 1; self.bar = 1; self.bar = 1; self.bar = 1;
        self.bar = 1;  self.bar = 1; self.bar = 1; self.bar = 1; self.bar = 1;
        self.bar = 1;  self.bar = 1; self.bar = 1; self.bar = 1; self.bar = 1;
        self.bar = 1;  self.bar = 1; self.bar = 1; self.bar = 1; self.bar = 1;

        return self.bar;
    });

    addSuite("Scope", function(){

        var self = member.bar;

        self.bar = 1;  self.bar = 1; self.bar = 1; self.bar = 1; self.bar = 1;
        self.bar = 1;  self.bar = 1; self.bar = 1; self.bar = 1; self.bar = 1;
        self.bar = 1;  self.bar = 1; self.bar = 1; self.bar = 1; self.bar = 1;
        self.bar = 1;  self.bar = 1; self.bar = 1; self.bar = 1; self.bar = 1;

        return self.bar;
    });

    addSuite("Scope", function(){

        bar = 1;  bar = 1; bar = 1; bar = 1; bar = 1;
        bar = 1;  bar = 1; bar = 1; bar = 1; bar = 1;
        bar = 1;  bar = 1; bar = 1; bar = 1; bar = 1;
        bar = 1;  bar = 1; bar = 1; bar = 1; bar = 1;

        return bar;
    });
})();
