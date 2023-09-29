function play() {
    var som = document.getElementById('player');
    som.play()
}
function pause() {
    var som = document.getElementById('player');
    som.pause()
}
function stop() {
    var som = document.getElementById('player');
    // som.stop()
    var src= som.src
    som.src= "./musica/Promete (Ao Vivo)_wiYE7VXn8Gk.mp3"
    console.log(som.src);
}



