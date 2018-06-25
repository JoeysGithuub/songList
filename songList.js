$(document).ready(function() {


const loadSongs = $("#load-songs")

const songList = $("#song-list")

loadSongs.click(() => { 
    $.ajax("songs.json") 
        .then(responseFromSongsJS => {
            for (let i in responseFromSongsJS) {
                responseFromSongsJS[i].forEach(song => {
                    let songBee = $("<section>");
                    songBee.attr("class", "song");
                    let head = $("<h1>");
                    head.attr("class", "song_title");
                    head.text(`${song.title}`);
                    let songWhat = $("<section>");
                    songWhat.attr("class", "song_description");
                    songWhat.text(`Performed by ${song.artist} on the album ${song.album}`);
                    head.appendTo(songBee);
                    songWhat.appendTo(songBee);
                    songBee.appendTo(songList);
                });
            }
        })
});

});