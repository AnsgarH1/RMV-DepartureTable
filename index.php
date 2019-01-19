<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    
    <title>Document</title>
    
    <link rel="stylesheet" href="style/main.css"/>
    
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="javascript/mainScript.js"></script>
    <script type="text/javascript" src="javascript/getSearchResults.js"></script>
    <script type="text/javascript" src="javascript/getDepartures.js"></script>

</head>
<body>
    <div id="div-background">
        <div id="div-background-overlay">
            
            <div id="header" class="div-content" >
                <div class="menu-btn" id="menu-btn1" btnNumb="1">
                    <p>Suche</p>
                </div>
                <div class="menu-btn" id="menu-btn2" btnNumb="2">
                    <p>Auswahl</p>
                </div>
                <div class="menu-btn" id="menu-btn3" btnNumb="3">
                    <p>Abfahrten</p>
                </div>
                <div id="header-text">
                    <h1 class="h1text">RMV - Abfahrtstafeln</h1>
                </div> 
                            
            </div>
            
            <div id="innerFrameSearch" class="div-inner-content div-content">
                <form id="input-form">
                    <p class="h2text">Bitte Haltestelle eingeben:</p>
                   
                    <div id="div-textfield">
                        <input type="text" name="StopName" id="input-stopName"/>
                        <button id="input-btn-stopName">Suche</button>
                    </div>


                </form>
            </div>

            <div id="innerFrameSearchResults" class="div-inner-content div-content">

              <ul id="searchResults">   
              </ul>

            </div>

            <div id="innerFrameDepartureTable" class="div-inner-content div-content">
                <p id="table-headline">Abfahrten: </p>
                <div id="table-scrollable">
                    <table id="departures">
                        <tr>
                            <th>Linie</th>
                            <th>Richtung</th>
                            <th>Abfahrtszeit</th>
                            <th>Verspätung</th>
                            <th>Gleis</th>
                            <th>Zugtyp</th>
                            <th>Betreiber</th>
                        </tr>
                        
                    
                    </table>
                </div>
            </div>

            <div id="footer" class="text div-content" >
                <p>Website by Ansgar Hoyer, <br/> Die Live-Daten werden zur Verfügung gestellt vom Rhein-Main-Verkehrsbund.</p>
            </div>
        
        </div>
    </div>

</body>
</html>