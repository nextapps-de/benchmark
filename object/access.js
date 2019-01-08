(function(){

    const obj_prop = {

        a: 1,
        b: 1,
        c: 1
    };

    const obj_str = {

        "a": 1,
        "b": 1,
        "c": 1
    };

    const arr_str = [

        1,
        1,
        1
    ];

    const obj_create_prop = Object.create(null);

    obj_create_prop.a = 1;
    obj_create_prop.b = 1;
    obj_create_prop.c = 1;

    const obj_create_str = Object.create(null);

    obj_create_str["a"] = 1;
    obj_create_str["b"] = 1;
    obj_create_str["c"] = 1;

    const fn_new_prop = new function(){

        this.a = 1;
        this.b = 1;
        this.c = 1;
    };

    const fn_new_str = new function(){

        this["a"] = 1;
        this["b"] = 1;
        this["c"] = 1;
    };

    function ProtoProp(){}

    ProtoProp.prototype.a = 1;
    ProtoProp.prototype.b = 1;
    ProtoProp.prototype.c = 1;

    const fn_proto_prop = new ProtoProp();

    function ProtoStr(){}

    ProtoStr.prototype["a"] = 1;
    ProtoStr.prototype["b"] = 1;
    ProtoStr.prototype["c"] = 1;

    const fn_proto_str = new ProtoStr();

    // ---------------------------------------------------

    addSuite("Object Access", function(){

        return obj_prop.a + obj_prop.b + obj_prop.c;
    });

    addSuite("Object Access", function(){

        return obj_prop["a"] + obj_prop["b"] + obj_prop["c"];
    });

    // ---------------------------------------------------

    addSuite("Object Access", function(){

        return obj_str.a + obj_str.b + obj_str.c;
    });

    addSuite("Object Access", function(){

        return obj_str["a"] + obj_str["b"] + obj_str["c"];
    });

    // ---------------------------------------------------

    addSuite("Object Access", function(){

        return obj_create_prop.a + obj_create_prop.b + obj_create_prop.c;
    });

    addSuite("Object Access", function(){

        return obj_create_prop["a"] + obj_create_prop["b"] + obj_create_prop["c"];
    });

    // ---------------------------------------------------

    addSuite("Object Access", function(){

        return obj_create_str.a + obj_create_str.b + obj_create_str.c;
    });

    addSuite("Object Access", function(){

        return obj_create_str["a"] + obj_create_str["b"] + obj_create_str["c"];
    });

    // ---------------------------------------------------

    addSuite("Object Access", function(){

        return fn_new_prop.a + fn_new_prop.b + fn_new_prop.c;
    });

    addSuite("Object Access", function(){

        return fn_new_prop["a"] + fn_new_prop["b"] + fn_new_prop["c"];
    });

    // ---------------------------------------------------

    addSuite("Object Access", function(){

        return fn_new_str.a + fn_new_str.b + fn_new_str.c;
    });

    addSuite("Object Access", function(){

        return fn_new_str["a"] + fn_new_str["b"] + fn_new_str["c"];
    });

    // ---------------------------------------------------

    addSuite("Object Access", function(){

        return fn_proto_prop.a + fn_proto_prop.b + fn_proto_prop.c;
    });

    addSuite("Object Access", function(){

        return fn_proto_prop["a"] + fn_proto_prop["b"] + fn_proto_prop["c"];
    });

    // ---------------------------------------------------

    addSuite("Object Access", function(){

        return fn_proto_str.a + fn_proto_str.b + fn_proto_str.c;
    });

    addSuite("Object Access", function(){

        return fn_proto_str["a"] + fn_proto_str["b"] + fn_proto_str["c"];
    });

    // ---------------------------------------------------

    addSuite("Object Access", function(){

        return arr_str[0] + arr_str[1] + arr_str[2];
    });

})();
