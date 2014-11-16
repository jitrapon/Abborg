/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 * @author Jitrapon Tiachunpun <yoshi3003@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('testAbborgWebApp', [
    'ngRoute',
    'ui.bootstrap'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
  
    // Portfolio
    .when("/portfolio-1-col", {templateUrl: "partials/portfolio-1-col.html", controller: "PageCtrl"})
  .when("/portfolio-2-col", {templateUrl: "partials/portfolio-2-col.html", controller: "PageCtrl"})
  .when("/portfolio-3-col", {templateUrl: "partials/portfolio-3-col.html", controller: "PageCtrl"})
  .when("/portfolio-4-col", {templateUrl: "partials/portfolio-4-col.html", controller: "PageCtrl"})
  
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);


/**
 * Controls Carousel
 */
app.controller('CarouselCtrl', function ($scope) {
    console.log("Test Carousel Controller");
    $scope.myInterval = 3000;
    $scope.slides = [
        {
            image:'http://th08.deviantart.net/fs71/PRE/f/2010/224/7/2/iOS4_iInstruct_app_UI_design_by_mrlash.jpg'
        },
        {
            image:'http://www.webguru-india.com/images/logodesign-solution/logo-design-header.jpg'
        },
        {
            image:'http://ww1.prweb.com/prfiles/2008/11/20/930724/VideoProXmain4c.jpg'
        },
        {
            image:'http://www.planeers.com/images/flash-banner.jpg'
        }
    ];
});


/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates Tooltips for Social Links
  /**$('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
  */
});
