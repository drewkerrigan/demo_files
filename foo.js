var Foo = function() {
    return {
        map: function(value, keyData, arg) {
			var data = value["key"];
			return [data];
       	}
    };
}();