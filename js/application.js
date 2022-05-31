// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "https://lekagh.github.io/img/2.png",
        "https://lekagh.github.io/img/4.png",
        "https://lekagh.github.io/img/8.png",
        "https://lekagh.github.io/img/16.png",
        "https://lekagh.github.io/img/32.png",
        "https://lekagh.github.io/img/64.png",
        "https://lekagh.github.io/img/128.png",
        "https://lekagh.github.io/img/256.png",
        "https://lekagh.github.io/img/512.png",
        "https://lekagh.github.io/img/1024.png",

    ];
    for(var i = 0; i < imageList.length; i++ )
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
