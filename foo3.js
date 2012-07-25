var Foo = function() {
    return {
        map: function(value, keyData, arg) {
			var data = value["values"][0]["data"];
			return [(data.split(arg).length - 1)];
       	},
       	reduce: function(values, arg) {
       		values = Riak.filterNotFound(values);
			if (values.length > 0) {
				return [values.reduce(function(prev, curr, index, array) { return prev + curr; } )];
			}
			else {
				return [0];
			}
       	}
    };
}();