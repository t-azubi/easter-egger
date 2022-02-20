let dago_geldschwein = function () {

    let data = '../pictures/DefensiveUglyAngwantibo.webp'

    var shock = document.createElement('div')
    var img = new Image()
    img.src = data
    img.style.pointerEvents = "none";
    img.style.width = '350px'
    img.style.height = '250px'
    img.style.transition = '7s all linear'
    img.style.position = 'fixed'
    img.style.left = '-400px'
    img.style.bottom = 'calc(-50% + 450px)'
    img.style.zIndex = 999999

    document.body.appendChild(img)

    window.setTimeout(function () {
        img.style.left = 'calc(100% + 200px)'
    }, 60)

    window.setTimeout(function () {
        img.parentNode.removeChild(img)
    }, 6000)

}

let elevate = function () {
    const music = new Audio('../music/elevator.mp3');
    music.play();
    $("html, body").animate(
        { scrollTop: "0" }, 10000, function () {
            music.pause();
        })
}