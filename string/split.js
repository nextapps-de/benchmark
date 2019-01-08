(function(){

    const regex = new RegExp(", ", "g");

    addSuite("Split", function(){

        return ("1, 2, 3, 4, 5").split(",");
    });

    addSuite("Split", function(){

        return split_substring("1, 2, 3, 4, 5", ",");
    });

    addSuite("Split", function(){

        const str = ("1, 2, 3, 4, 5").replace(regex, "");
        return [str[0], str[1], str[2], str[3], str[4]];
    });

    function split_substring(str, separator){

        const str_length = str.length;
        let chunks = [];
        let start = 0;
        let len = 0;

        while(true){

            let end = str.indexOf(separator, start);

            if(end === -1){

                chunks[len++] = str.substring(start);
                break;
            }

            chunks[len++] = str.substring(start, end);
            start = end + 1;

            if(start === str_length){

                break;
            }
        }

        return chunks;
    }
})();
