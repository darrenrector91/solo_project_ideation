var app = angular.module('soloApp', ['ngRoute', 'ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .warnPalette('red')
    .accentPalette('lime')
    .backgroundPalette('grey')
    .dark();
});

// Available palettes: red, pink, purple, deep-purple, indigo, blue, light-blue, cyan, teal,
// green, light-green, lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey