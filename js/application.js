// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "http://www.oispaesaa.cf/img/2.png",
        "http://www.oispaesaa.cf/img/4.png",
        "http://www.oispaesaa.cf/img/8.png",
        "http://www.oispaesaa.cf/img/16.png",
        "http://www.oispaesaa.cf/img/32.png",
        "http://www.oispaesaa.cf/img/64.png",
        "http://www.oispaesaa.cf/img/128.png",
        "http://www.oispaesaa.cf/img/256.png",
        "http://www.oispaesaa.cf/img/512.png",
        "http://www.oispaesaa.cf/img/1024.png",

    ];
    for(var i = 0; i < imageList.length; i++ )
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
