$(function(){
    
    $("#searchResults").on("click", "li", function(){

        
        getDepartures(stopName.indexOf( $(this).text()));
 
    });

    //Wird aufgerufen wenn der Suchknopf gedrückt wird
    $("#input-btn-stopName").click(function (e) { 
        
        btnClicked = true;
        var JSONdata;
        var input = $("#input-stopName").val();
        
        //Leerzeichen entfernen
        input = input.split(" ").join("");

        if(input.lenght != 0){
            
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "php/getSearchResult.php/?content=" + input,

                success: function (response) {
                    var JSONdata = JSON.parse(response).stopLocationOrCoordLocation;
                    console.log(JSONdata[0].StopLocation);
                    $("#innerFrameSearch").slideUp();
                    if(JSONdata.length != 0){
                        $("#searchResults").empty();
                        for (index = 0; index < JSONdata.length; index++) {
                            var thisStop = "" + JSONdata[index].StopLocation.name;
                            $("#searchResults").append("<li class='item'>" + thisStop + "</li>");
                            
                            stopName.push(JSONdata[index].StopLocation.name + "");
                            stopExtId.push(JSONdata[index].StopLocation.extId + "");
                        }
                    }else{

                    }
                    
                    $("#innerFrameSearchResults").slideDown();
                }
            });
        
        }
    });
});