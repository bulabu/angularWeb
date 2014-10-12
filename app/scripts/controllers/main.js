'use strict';

/**
 * @ngdoc function
 * @name angularWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebApp
 */
angular.module('angularWebApp')
    .controller('MainCtrl', function ($scope) {

        $scope.my_data = [];
        var masterObjectiveList = getObjectiveList();


        var index = 0;
        /*for (index = 0; index < masterObjectiveList.length; ++index) {
         console.log(masterObjectiveList[index]);
         $scope.my_data.push({label: masterObjectiveList[index].name, data: {object: masterObjectiveList[index]}})
         }*/
        $scope.my_data = generateTreeList(masterObjectiveList);

        $scope.my_tree_handler = function (branch) {
            var _ref;
            $scope.currentSelection = getObjectiveByName(branch.label, masterObjectiveList);
            //return $scope.output = getObjectiveByName(branch.label, masterObjectiveList).desc;
        };
    });
