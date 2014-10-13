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
        $scope.search = "Temp";
        var masterObjectiveList = getObjectiveList();
        var currentSortSel;
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
            currentSortSel = value;
            $scope.associate_data = createSortedTreeList(masterAssociateList, currentSortSel);
        };
        $scope.filterSort = function(search)
        {
            var index = 0;
            var tmpArray=[];
            for(index = 0; index < masterAssociateList.length; index++)
            {
                if(startsWith(search.toLowerCase(), masterAssociateList[index].name.toLowerCase()))
                {
                   tmpArray.push(masterAssociateList[index]);
                }
            }
            console.log($scope.assocSort);
            $scope.associate_data = createSortedTreeList(tmpArray, currentSortSel);
        }
    });
