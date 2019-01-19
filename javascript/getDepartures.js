function getDepartures(index){
    
    
    $.ajax({
        type: "GET",
        url: "php/getDeparture.php/?stopExtId=" + stopExtId[index],
        dataType: "json",
        success: function (response) {
            response = JSON.parse(response);
            console.log(response.Departure);
            response = response.Departure;
            $("#table-headline").empty();
            $("#table-headline").append(" " + stopName[index]);
            $("#departures").html(`
                <tr>
                    <th>Linie</th>
                    <th>Richtung</th>
                    <th>Abfahrtszeit</th>
                    <th>Verspätung</th>
                    <th>Gleis</th>
                    <th>Typ</th>
                    <th>Betreiber</th>
                </tr>
            `);
            var appendHtml = "";
            for (i = 0; i < response.length; i++) {
                appendHtml =  `
                    <tr>
                        <td>${response[i].name}</td>
                        <td>${response[i].direction}</td>
                        <td>${response[i].time}</td>
                        <td>${getDelay(response[i].time, response[i].rtTime)}</td>
                        <td>${response[i].track}</td>
                        <td>${response[i].Product.catOutL}</td>
                        <td>${response[i].Product.operator}</td>
                    </tr>
                `;

                $("#departures").append(appendHtml);
            }
            
            
            $("#innerFrameSearchResults").slideUp();
            $("#innerFrameDepartureTable").slideDown();


        }
    });
}