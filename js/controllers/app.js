angular.module("myApp",["ngAnimate","ngSanitize","ui.bootstrap","ui.router","mds",'ngMaterial'])

    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state("app",{
                url:"/app",
                views:{
                    main:{
                        templateUrl:"templates/main.html",
                        controller:"appCtrl"
                    }
                }
            })

            .state("app.home",{
                url:"/home",
                views:{
                   sub:{
                    templateUrl:"templates/home.html",
                    controller:"homeCtrl"
                }
                }
            })
            .state("app.store",{
                url:"/store",
                views:{
                    sub:{
                        templateUrl:"templates/store.html",
                        controller:"storeCtrl"
                    }
                }
            })

            .state("app.contact",{
                url:"/contact",
                views:{
                    sub:{
                        templateUrl:"templates/contact.html",
                        controller:"contactCtrl"
                    }
                }
            })

        $urlRouterProvider.otherwise("/app/home")

    })