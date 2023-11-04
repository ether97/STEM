document.addEventListener('DOMContentLoaded', function () {
	var map = document.getElementById('map');
	var languages = document.getElementById('languages');
	var courses = document.getElementById('courses');
	var calendar = document.getElementById('calendar');
	var ec = document.getElementById('ec');
	var tuition = document.getElementById('tuition');

	map.addEventListener('click', function() {
		window.location.href='map.html'
	});	
	languages.addEventListener('click', function() {
		window.location.href='languages.html'
	});	
	courses.addEventListener('click', function() {
		window.location.href='courses.html'
	});	
	calendar.addEventListener('click', function() {
		window.location.href='calendar.html'
	});	
	ec.addEventListener('click', function() {
		window.location.href='ec.html'
	});	
	tuition.addEventListener('click', function() {
		window.location.href='tuition.html'
	});	
});
