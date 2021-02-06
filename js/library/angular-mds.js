angular.module("mds",[])
.directive("mdsFile",function(){
   return {
      scope:{
	     x:"=file",
		 y:"=base64"
	  },
	  link:function(scope,element,attrs){
	     element.on("change",function(event){
		     scope.x=event.target.files[0]

			 if(attrs['base64']){
			 var reader=new FileReader()
				 reader.onload=function(event){
				   scope.y=event.target.result
                     console.log(event.target.result)
				   scope.$apply()
				 }
				 
				 reader.readAsDataURL(scope.x)
			 }
			 
		 })
	  }
   }
})

    .service("$http2",function ($http,$rootScope) {
        this.post = function (url, cc) {
            return new Promise(function (resolve, reject) {
                $http({
                    method: 'POST',
                    url: url,
                    processData: false,
                    transformRequest: function (data) {
                        var formData = new FormData();
                        for (key in cc) {
                            formData.append(key, cc[key]);
                        }

                        return formData;
                    },
                    data: "",
                    headers: {
                        'Content-Type': undefined
                    }, eventHandlers: {
                        progress: function (event) {
                            console.log("progress");
                            console.log(event);
                            $rootScope.progressed = (event.loaded / event.total) * 100

                        },
                        readystatechange: function (event) {
                            console.log("change");
                            console.log(event);
                        }
                    }
                }).then(function (resp) {
                    resolve(resp)
                }, function (err) {
                    reject(err)
                })
            })
        }
    })