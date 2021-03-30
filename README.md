# Lyric-findervar apiKey = "62da9f2d1c46050f8935216855470f78"


//you have to get the top 50 tracks first
//IF they click on a track
//GET the lyrics through an API call
function getTop50(){
    var apiURL = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${apiKey}&format=json`
    fetch(apiURL).then(response => response.json()).then(function(data){
        console.log(data)
    })
    
}


getTop50();