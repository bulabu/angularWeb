'use strict';
//git push angularGit master
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
        $scope.assocSort = "Name";
        var masterObjectiveList = getObjectiveList();
        $scope.currentSelection=null;

        $scope.my_data = generateTreeList(masterObjectiveList);
        var masterAssociateList = getAssociateList();
        $scope.currentAssociateSelection=null;
        $scope.associate_data = createSortedTreeList(masterAssociateList, $scope.assocSort);

        $scope.objective_tree_handler = function (branch) {
            var _ref;
            $scope.currentSelection = getObjectiveByName(branch.label, masterObjectiveList);
        };
        $scope.associate_tree_handler = function (branch) {
            $scope.currentAssociateSelection = getAssociateByName(branch.label, masterAssociateList);
            console.log($scope.currentAssociateSelection);
        };

        $scope.selectSort = function(value)
        {
            $scope.associate_data = createSortedTreeList(masterAssociateList, value);
        }
    });
