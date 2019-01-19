
var stopName = [];
var stopExtId = [];
$(function(){
    
    //verhindert 'submit' bei allen Textfeldern
	$(document).on("submit", "form", function(e) {
		e.preventDefault();
		return false;
	});
	
	$(".menu-btn").click(function(){
		$(".div-inner-content").slideUp();
		var thisBtn = $(this).attr("btnNumb");
		
		thisBtn = parseInt(thisBtn);
		
		switch (thisBtn) {
			case 1:
				$("#innerFrameSearch").slideDown();
						
				break;
			case 2:
				$("#innerFrameSearchResults").slideDown();
				
				break;
			case 3:
				$("#innerFrameDepartureTable").slideDown();
				
				break;	
			default:
				break;
		}
	});

    
});

function getDelay(time, rtTime){
	var delay, acHour, acMinute, rtHour, rtMinute;
	console.log(typeof(rtTime));
	if(rtTime + "" == "undefined"){
		return("keine Angaben");
	}

	time = time.split(":");
	acHour = time[0];
	acMinute = time[1];

	console.log(acMinute);

	rtTime = rtTime.split(":");
	rtHour = rtTime[0];
	rtMinute = rtTime[1];

	acDayMinutes = acHour*60 + acMinute;
	rtDayMinutes = rtHour*60 + rtMinute;

	delay = rtDayMinutes - acDayMinutes;

	if(delay==0){
		return("keine Verspätung vorhanden");
	}

	return(delay + " Minute/n");
}