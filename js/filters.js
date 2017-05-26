/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('app.filters', [])

.filter('friendlyDate', [function() {
	return function(date) {
		var d = moment.utc(date).toDate();
		d = moment(d).format('dddd, DD MMMM, YYYY');
		return d;
	};
}])

.filter('friendlyTime', [function() {
	return function(time) {
		var t = moment(time, 'HH:mm:ss').format('HH:mm');
		return t;
	};
}])

.filter('addTime', [function() {
	return function(time, duration) {
		var endTime = moment(time, 'HH:mm:ss').format('HH:mm');
		endTime = moment(endTime).add(duration, 'm');
		return endTime;
	};
}])

.filter('friendlyTimeFromDate', [function() {
	return function(date) {
		//var dt = moment.utc(date).toDate();
		var dt = moment(date).format('HH:mm');
		return dt;
	};
}])

.filter('friendlyDateTime', [function() {
	return function(date) {
		var dt = moment.utc(date).toDate();
		dt = moment(dt).format('dddd, DD MMMM, YYYY HH:mm a');
		return dt;
	};
}]);