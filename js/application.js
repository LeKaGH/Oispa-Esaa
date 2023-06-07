// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "https://lekagh.github.io/Oispa-Esaa/img/2.png",
        "https://lekagh.github.io/Oispa-Esaa/img/4.png",
        "https://lekagh.github.io/Oispa-Esaa/img/8.png",
        "https://lekagh.github.io/Oispa-Esaa/img/16.png",
        "https://lekagh.github.io/Oispa-Esaa/img/32.png",
        "https://lekagh.github.io/Oispa-Esaa/img/64.png",
        "https://lekagh.github.io/Oispa-Esaa/img/128.png",
        "https://lekagh.github.io/Oispa-Esaa/img/256.png",
        "https://lekagh.github.io/Oispa-Esaa/img/512.png",
        "https://lekagh.github.io/Oispa-Esaa/img/1024.png",
        "https://lekagh.github.io/Oispa-Esaa/img/2048.png",
        "https://lekagh.github.io/Oispa-Esaa/img/super.png"

    ];
    for(var i = 0; i < imageList.length; i++ )
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
