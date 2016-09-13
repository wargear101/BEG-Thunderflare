$(document).ready(function(){
	$.get("http://ofcourse.oru.se/~IK2009/json/get_jobs.php", function(data){
 if(data.status == 1)
 {		
 	$.each(data.result, function() {
 		$('#jobPosition').append('<li class="job">' + this.city + ', ' + this.position + '</li>');
 	});
 }
 				
	}
	)})
