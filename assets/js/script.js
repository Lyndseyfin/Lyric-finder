var trackTitle;
var apiKey = "62da9f2d1c46050f8935216855470f78";
var trackContainer = document.getElementById("track-container");
//var geniusKey ="UAWrPtjnLzjX7VfKe6TdzG4bRCGgVmfPZAQ36lbOdh2D1eSkN6quQ_R050fHi3hS";

$(document).ready(function () {

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
                //trackContainer.innerHTML = '';
                for (var i = 0; i < trackTitle.length; i++) {
                    console.log(trackTitle[i].name); // individual track names

                    var tracksTitle = trackTitle[i].name

                    var trackCard = document.createElement("div");
                    trackCard.setAttribute("class", "card card-content")
                    //trackCard.setAttribute("id", "track-card")
                    trackContainer.append(trackCard);

                    var cardTitle = document.createElement("div");
                    cardTitle.setAttribute("class", "content");
                    trackCard.append(cardTitle);

                    var song = document.createElement("button");
                    // song.setAttribute("id", "song-btn");
                    song.setAttribute("class", "song-title")
                    song.setAttribute("value", tracksTitle);
                    song.innerHTML = tracksTitle;
                    cardTitle.append(song);
                    // song button click - get lyric
                    document.querySelector('.song-title').addEventListener('click', function (){
                        var songTitle = this.value
                        $.ajax({
                            url: `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=${songTitle}&q_artist=${artist}&apikey=d7dceb7b6e1e60fab8845ae1ba5d51fc`,
                            success: function (response){
                                console.log(response)
                            }
                        })
                    })
                    
                    //document.getElementsByClassName("song-title").addEventListener("click", setSongTitle);
                }
            })
    }
  

 
    function getLyrics() {
        var lyricCall = "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=starboy&q_artist=%27the%20weeknd%27&apikey=d7dceb7b6e1e60fab8845ae1ba5d51fc"
        $.ajax(lyricCall, {
            dataType: "jsonp",
        }).then(function (data) {
            console.log(data);
        })
    }

    // getLyrics();


    /*function getLyrics() {
        var lyricCall = "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=starboy&q_artist=%27the%20weeknd%27&apikey=d7dceb7b6e1e60fab8845ae1ba5d51fc"
        fetch(lyricCall)
            .then(function(response) {
                return response.text()
            })
            .then(function (data) {
                console.log(data)})
    }*/



    //getLyrics()
    //display artist songs
    //user clicks on song
    //Fetch lyric api
    // present user with lyrics

    function setSongTitle() {
        var songTitle = document.getElementById("song-btn");
        console.log(songTitle);
    }

    // event listener for search - done 3/27
    document.getElementById("search-btn").addEventListener("click", getArtist);
})



//you get artist from user input - done 3/27
// function getArtist() {
//     var artist = document.getElementById("search-artist").value;
//     console.log(artist);
//     if (artist) {
//         searchArtist(artist);
//     }
// }

// // Fetch Artist Songs w/ API - done 3/27
// function searchArtist(artist) {
//     var endpoint = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=62da9f2d1c46050f8935216855470f78&format=json`
//     fetch(endpoint)
//         .then(response => response.json())
//         .then(function (data) {
//             console.log(data)
//             var trackTitle = data.toptracks.track;
//             console.log(trackTitle); // logs track title in array
//             //trackContainer.innerHTML = '';
//             for (var i = 0; i < trackTitle.length; i++) {
//                 console.log(trackTitle[i].name); // individual track names

//                 var tracksTitle = trackTitle[i].name

//                 var trackCard = document.createElement("div");
//                 trackCard.setAttribute("class", "card card-content")
//                 //trackCard.setAttribute("id", "track-card")
//                 trackContainer.append(trackCard);

//                 var cardTitle = document.createElement("div");
//                 cardTitle.setAttribute("class", "content");
//                 trackCard.append(cardTitle);

//                 var song = document.createElement("button");
//                 song.setAttribute("id", "song-btn");
//                 song.setAttribute("class", "song-title")
//                 song.setAttribute("value", tracksTitle);
//                 song.innerHTML = tracksTitle;
//                 cardTitle.append(song);
//                 //document.getElementsByClassName("song-title").addEventListener("click", setSongTitle);
//             }
//         })
// }





// function getLyrics() {
//     var lyricCall = "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=starboy&q_artist=%27the%20weeknd%27&apikey=d7dceb7b6e1e60fab8845ae1ba5d51fc"
//     $.ajax(lyricCall, {
//         dataType: "jsonp",
//     }).then(function (data) {
//         console.log(data);
//     })
// }

// getLyrics();


/*function getLyrics() {
    var lyricCall = "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=starboy&q_artist=%27the%20weeknd%27&apikey=d7dceb7b6e1e60fab8845ae1ba5d51fc"
    fetch(lyricCall)
        .then(function(response) {
            return response.text()
        })
        .then(function (data) {
            console.log(data)})
}*/



//getLyrics()
//display artist songs
//user clicks on song
//Fetch lyric api
// present user with lyrics

// function setSongTitle () {
//     var songTitle = document.getElementById("song-btn");
//     console.log(songTitle);
// }

// // event listener for search - done 3/27
// document.getElementById("search-btn").addEventListener("click", getArtist);