var Foo = function() {
    return {
        map: function(value, keyData, arg) {
			var data = value["values"][0]["data"];
			return [[value["key"],(data.split(arg).length - 1)]];
       	}
    };
}();