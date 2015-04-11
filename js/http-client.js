var httpClient = httpClient || {};

httpClient.get = function(url, success_method, error_method){
	var req = {
		url: url,
		method: "GET"
	};

	$.ajax(req).done(function(result){
		success_method(JSON.parse(result));
	})
	.error(function(err){
		error_method(err)
	});
}

httpClient.post = function(){

}