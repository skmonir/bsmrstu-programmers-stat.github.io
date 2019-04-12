'use strict';

//import cfRank from './cfrank';

let app = angular.module('app', ['ui.router']);

app.controller('appController', ['$scope', '$http', function($scope, $http) {

	$scope.handles = [
		'skmonir', 'U_Turn', '2k141101046D', 'prodipdatta7', 'jisan047',
		'alshahreyaj', 'Ramprosad', 'Ehsan_sShuvo', 'I_Am_Code_Blooded',
		'hasinurmmm', 'Azizur_Rahman', 'NaimulHasanNaim', 'fuadul', 'JuwelCSE', 'Bisnu',
		'marajul88', 'RAM_CSE_BSMRSTU', 'Mezba', 'i_hate_coding', 'refatm452', 'Md_Ibrahim_Khan',
		'Ashish972', 'aim_to_miss', 'Nur_Alam39', 'AbuBokor', 'masiur_hasan', 'Shovan_Debnath...',
		'shafayet_hossain', 'Fahim_HN', 'Adeeb005', 'rafikul_islam_murad', 'Rayhan008', 'sitaula98458',
		'Sanjit', 'sifatahmed', 'Muhammad_Rabiul_Islam', 'milonsheikh953', 'moshiur.bd', 'weak_coder', 'Srabbi',
		'TheCodeKnight', 'debashis_roy', 'Sifat_Sabbir', 'Girish28', 'Only_cse', 'sudipto.bd', 'khairul_alom',
		'tanvir_cse', 'bsmrstubellal', 'RubaetRakib', 'avijit035', 'khsaikat', 'tahmidhasan.3003', 'mizan.1400',
		'Linkon_BSMRSTU', 'SAGOR_BSMRSTU', 'blooded_code', 'net008', 'Jahidul_Afrad', 'sifat13', 'Jairul', 'msiamn',
		'alaminv2', 'papiakarmakar785', 'azizul300', 'mesbaulbsmrstu'
	];

	$scope.colors = {
		expert: 'userBlue',
		specialist: 'userCyan',
		pupil: 'userGreen',
		newbie: 'userGray'
	};

	$scope.users = [];
	let cmd = 'http://codeforces.com/api/user.info?handles=skmonir';
	for (let i = 1; i < $scope.handles.length; ++i) {
		cmd = cmd + ';' + $scope.handles[i];
	}

  $http({
	  method: 'GET',
	  url: cmd
	}).then(function successCallback(res) {
		console.log(res.data.result[4]);
		$scope.users = res.data.result;
  }, function errorCallback(res) {
  });

	$scope.sortColumn = 'rating';
	$scope.ascOrder = false;
  
  $scope.sortUser = function(column) {
  	$scope.ascOrder = $scope.sortColumn == column ? !$scope.ascOrder : false;
  	$scope.sortColumn = column;
  }

  $scope.getSortClass = function(column) {
  	if ($scope.sortColumn == column) {
  		if ($scope.ascOrder == false) {
  			return 'glyphicon glyphicon-sort-by-attributes-alt';
  		} else {
  			return 'glyphicon glyphicon-sort-by-attributes';
  		}
  	}
  	return '';
  }
}]);