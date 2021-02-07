angular
  .module("myApp")
  .controller(
    "appCtrl",
    function (
      $scope,
      $rootScope,
      $state,
      $http2,
      $http,
      $timeout,
      $interval,
      $mdDialog
    ) {
      $scope.x = "p1";
      $scope.status = "  ";
      $scope.customFullscreen = false;

      $scope.showAlert = function (ev) {
        $mdDialog.show(
          $mdDialog
            .alert()
            .parent(angular.element(document.querySelector("#popupContainer")))
            .clickOutsideToClose(false)
            .title("Done")
            .textContent("The Item Added Successfully.")
            .ariaLabel("Alert Dialog Demo")
            .ok("O.K!")
            .targetEvent(ev)
            .openFrom('.myRight')
            .closeTo(angular.element(document.querySelector('.myRight')))
        );
      };
      $scope.showAdvanced2 = function (ev) {
        $mdDialog.show({
          scope: $scope,
          templateUrl: "../templates/myCard.html",
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: false,
          preserveScope: true,
        });
      };
      $scope.a = 1;
      $scope.numb = function () {
        $scope.a = 0;
      };
      $scope.numb1 = function () {
        $scope.a = 1;
      };
      $scope.numb2 = function () {
        $scope.a = 2;
      };
      $scope.numb3 = function () {
        $scope.a = 3;
      };
      $rootScope.myPurchases = [];

      $scope.showAdvanced = function (index, Name, img, price) {
        if ($scope.a == 0) {
          $scope.Name = $scope.products1[index].Name;
          $scope.img = $scope.products1[index].img;
          $scope.img2 = $scope.products1[index].img2;
          $scope.img3 = $scope.products1[index].img3;
          $scope.price = $scope.products1[index].price;
        } else if ($scope.a == 1) {
          $scope.Name = $scope.products[index].Name;
          $scope.img = $scope.products[index].img;
          $scope.img2 = $scope.products[index].img2;
          $scope.img3 = $scope.products[index].img3;
          $scope.price = $scope.products[index].price;
        } else if ($scope.a == 2) {
          $scope.Name = $scope.products2[index].Name;
          $scope.img = $scope.products2[index].img;
          $scope.img2 = $scope.products2[index].img2;
          $scope.img3 = $scope.products2[index].img3;
          $scope.price = $scope.products2[index].price;
        } else if ($scope.a == 3) {
          $scope.Name = $scope.products3[index].Name;
          $scope.img = $scope.products3[index].img;
          $scope.img2 = $scope.products3[index].img2;
          $scope.img3 = $scope.products3[index].img3;
          $scope.price = $scope.products3[index].price;
        }
        $mdDialog.show({
          scope: $scope,
          templateUrl: "../templates/myDialog.html",
          parent: angular.element(document.body),
          targetEvent: index,
          clickOutsideToClose: false,
          preserveScope: true,
        });
        $rootScope.tot = 0;
        $rootScope.send = function (img, Name, qty, price) {
          $rootScope.imga = img;
          $rootScope.namea = Name;
          $rootScope.qtya = qty;
          $rootScope.pricea = price;
          $rootScope.items = {
            name: $rootScope.namea,
            price: $rootScope.pricea,
            img: $rootScope.imga,
            qty: $rootScope.qtya,
          };
          // $rootScope.myPurchases.push($rootScope.items)

          find = false;
          $rootScope.myPurchases.forEach((element) => {
            if (element.name == $rootScope.items.name) {
              find = !false;
              ind = $rootScope.myPurchases.indexOf(element);
            }
          });
          if (find) {
            $rootScope.myPurchases[ind].qty =
              $rootScope.myPurchases[ind].qty + $rootScope.qtya;
            find = false;
          } else {
            $rootScope.myPurchases.push($rootScope.items);
          }
          $rootScope.myPurchases.forEach(function (items) {
            $rootScope.tot = $rootScope.tot += items.qty * items.price;
          });
        };
      };
      $scope.cancel = function () {
        $mdDialog.cancel();
      };
      $scope.dark='white'
      $scope.change = function () {
        $scope.dark='rgb(18, 18, 31) !important;';
        $scope.dark2='rgb(3, 3, 17) !important';
        $scope.dark3='white !important'
        $("#body").addClass("myColor");
        $(".middle").addClass("myColor");
        $("header").removeClass("navbar-dark pink");
        $("nav").removeClass("pink");
        $("nav").addClass("bgColor");
        $("header").addClass("bgColor");
        $("footer").removeClass("new");
        $("footer").addClass("bgColor");
        $(".card").addClass("bgColor");
        $(".jumbotron").addClass("bgColor");
      };
      $scope.unChange = function () {
        $scope.dark='white'
        $scope.dark2='rgb(222, 222, 223) !important;'
        $scope.dark3='black !important'
        $("#body").css("transition","all 1s");
        $("#body").removeClass("myColor");
        $(".middle").removeClass("myColor");
        $("header").addClass("navbar-dark pink");
        $("nav").addClass("pink");
        $("header").removeClass("bgColor");
        $("nav").removeClass("bgColor");
        $("footer").removeClass("bgColor");
        $("footer").addClass("new");
        $(".card").removeClass("bgColor");
        $(".jumbotron").removeClass("bgColor");
      };
      $scope.num = 0;
      $scope.answer = function () {
        $(".fcart").css("color", "rgb(17, 139, 99)");
        $timeout(function () {
          $(".badge").css("display", "inline");
        }, 1000);
        $(".badge").css("display", "inline");
        $timeout(function () {
          $(".badge").fadeOut(1000);
        }, 3000);
        $scope.num += 1;
      };

      // Home 3 Cards array
      $scope.products1 = [
        {
          Name: "Color zone",
          img: "../img/regular/1.jpg",
          img2: "../img/regular/2.jpg",
          img3: "../img/regular/3.jpg",
          price: 500,
          likes: 108,
          myRed: "gray",
        },
        {
          Name: "storm",
          img: "../img/red sport/2.jpg",
          img2: "../img/red sport/1.jpg",
          img3: "../img/red sport/3.jpg",
          price: 1200,
          likes: 50,
          myRed: "gray",
        },
        {
          Name: "panda 2",
          img: "../img/big black 4/1.jpg",
          img2: "../img/big black 4/2.jpg",
          img3: "../img/big black 4/3.jpg",
          price: 1000,
          likes: 20,
          myRed: "gray",
        },
      ];

      // arrays
      $scope.products = [
        {
          Name: "panda",
          img: "../img/big black 3/4.jpg",
          img2: "../img/big black 3/2.jpg",
          img3: "../img/big black 3/3.jpg",
          price: 700,
          likes: 44,
          myRed: "gray",
        },
        {
          Name: "panda 2",
          img: "../img/big black 4/1.jpg",
          img2: "../img/big black 4/2.jpg",
          img3: "../img/big black 4/3.jpg",
          price: 1000,
          likes: 20,
          myRed: "gray",
        },
        {
          Name: "light all",
          img: "../img/big black 5/3.jpg",
          img2: "../img/big black 5/1.jpg",
          img3: "../img/big black 5/2.jpg",
          price: 500,
          likes: 20,
          myRed: "gray",
        },
        {
          Name: "big black",
          img: "../img/big black/1.jpg",
          img2: "../img/big black/2.jpg",
          img3: "../img/big black/3.jpg",
          price: 200,
          likes: 70,
          myRed: "gray",
        },
        
      ];
      $scope.products2 = [
        {
          Name: "Captin",
          img: "../img/red sport 2/1.jpg",
          img2: "../img2/red sport 2/2.jpg",
          img3: "../img3/red sport 2/3.jpg",
          price: 1000,
          likes: 20,
          myRed: "gray",
        },
        {
          Name: "Color zone",
          img: "../img/regular/1.jpg",
          img2: "../img/regular/2.jpg",
          img3: "../img/regular/3.jpg",
          price: 500,
          likes: 108,
          myRed: "gray",
        },
        {
          Name: "Raise",
          img: "../img/regular 2/4.jpg",
          img2: "../img/regular 2/1.jpg",
          img3: "../img/regular 2/3.jpg",
          price: 100,
          likes: 70,
          myRed: "gray",
        },
        {
          Name: "Sport yoga",
          img: "../img/white sport/3.jpg",
          img2: "../img/white sport/1.jpg",
          img3: "../img/white sport/2.jpg",
          price: 180,
          likes: 16,
          myRed: "gray",
        },
      ];
      $scope.products3 = [
        {
          Name: "army Shose 2",
          img: "../img/army 2/1.jpg",
          img2: "../img/army 2/2.jpg",
          img3: "../img/army 2/3.jpg",
          price: 1000,
          likes: 2,
          myRed: "gray",
        },
        {
          Name: "black panter",
          img: "../img/big black 2/3.jpg",
          img2: "../img/big black 2/1.jpg",
          img3: "../img/big black 2/2.jpg",
          price: 400,
          likes: 16,
          myRed: "gray",
        },
        {
          Name: "storm",
          img: "../img/red sport/2.jpg",
          img2: "../img/red sport/1.jpg",
          img3: "../img/red sport/3.jpg",
          price: 1200,
          likes: 50,
          myRed: "gray",
        },
        {
          Name: "Army Shose",
          img: "../img/army/4.jpg",
          img2: "../img/army/1.jpg",
          img3: "../img/army/3.jpg",
          price: 900,
          likes: 60,
          myRed: "gray",
        },
      ];
    }
  )
  .controller(
    "homeCtrl",
    function ($scope, $rootScope, $state, $http2, $http, $timeout, $interval) {
      $rootScope.swiper = [
        {
          img: "../img/phone/stephan-schmid-Xfd-PHwqkRc-unsplash.jpg",
          number: 1,
        },
        {
           img: "../img/phone/dusan-jovic-ZqkJoGoRoJY-unsplash.jpg",
            number: 2 },
        {
           img: "../img/phone/revolt-164_6wVEHfI-unsplash.jpg",
            number: 3 },
        {
          img: "../img/phone/joseph-barrientos-4qSb_FWhHKs-unsplash.jpg",
          number: 4,
        },
        { img: "../img/phone/grailify-Pgv2-5UwLBk-unsplash.jpg",
         number: 5 },
        {
          img: "../img/phone/dusan-jovic-ZqkJoGoRoJY-unsplash.jpg",
          number: 6,
        },
        {
          img: "../img/phone/stephan-schmid-Xfd-PHwqkRc-unsplash.jpg",
          number: 7,
        },
        {
          img: "../img/phone/stephan-schmid-Xfd-PHwqkRc-unsplash.jpg",
          number: 8,
        },
        {
          img: "../img/phone/stephan-schmid-Xfd-PHwqkRc-unsplash.jpg",
          number: 9,
        },
        {
          img: "../img/phone/stephan-schmid-Xfd-PHwqkRc-unsplash.jpg",
          number: 10,
        },
      ];
      $scope.like = function (index) {
        $scope.products1[index].likes += 1;
        $scope.products1[index].myRed = "red";
      };
    }
  )
  .controller(
    "storeCtrl",
    function (
      $scope,
      $rootScope,
      $state,
      $http2,
      $http,
      $timeout,
      $interval,
      $mdDialog
    ) {
      $scope.like = function (index) {
        $scope.products[index].likes += 1;
        $scope.products[index].myRed = "red";
      };
      $scope.like2 = function (index) {
        $scope.products2[index].likes += 1;
        $scope.products2[index].myRed = "red";
      };
      $scope.like3 = function (index) {
        $scope.products3[index].likes += 1;
        $scope.products3[index].myRed = "red";
      };
    }
  )

  .controller(
    "contactCtrl",
    function ($scope, $rootScope, $state, $http2, $http, $timeout, $interval) {}
  );
