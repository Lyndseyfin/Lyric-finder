var trackTitle;
var apiKey = "62da9f2d1c46050f8935216855470f78";

//you get artist from user input - done 3/27
function getArtist() {
    var artist = document.getElementById("search-artist").value;
    console.log(artist);
    if (artist) {
        searchArtist(artist);
    }
}
// Fetch Artist Songs w/ API - done 3/27
function searchArtist(artist) {
    var endpoint = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=62da9f2d1c46050f8935216855470f78&format=json`
    fetch(endpoint)
        .then(response => response.json())
        .then(function (data) {
            console.log(data) 
            var trackTitle = data.toptracks.track;
            console.log(trackTitle); // logs track title in array
            for (var i = 0; i < trackTitle.length; i++) {
                console.log(trackTitle[i].name); // individual track names
            
                var tracksTitle = trackTitle[i].name
                // working to create cards for each indivual track
                var tracksEl = document.getElementById("tracks");
                var trackEL = document.createElement("div");
                trackEL.setAttribute("class", "card card-content");
                var trackTitleEl = document.createElement("div");
                trackTitleEl.setAttribute("class", "media-content");
                

            
                trackEL.append(tracksEl)
            
            }
        })
}



//display artist songs
//user clicks on song
//Fetch lyric api
// present user with lyrics



// event listener for search - done 3/27
document.getElementById("search-btn").addEventListener("click", getArtist);