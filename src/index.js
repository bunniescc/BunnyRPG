(function () {

    let textCanvas = document.getElementById('textCanvas');
    let textContext = textCanvas.getContext('2d');

    window.textDisplay = new TextDisplay(textContext);

    let player = {
        move: function () {
            console.log('move');
        }
    };

    window.addEventListener('keydown', ev => {
        textDisplay.clear();
        textDisplay.display(ev.key);
        if (player) {
            switch (ev.key) {
                case "ArrowUp":
                    //player.move(0, -1, FACING_UP);
                    ev.preventDefault();
                    break;
                case "ArrowDown":
                    //player.move(0, 1, FACING_DOWN);
                    ev.preventDefault();
                    break;
                case "ArrowLeft":
                    //player.move(-1, 0, FACING_LEFT);
                    ev.preventDefault();
                    break;
                case "ArrowRight":
                    //player.move(1, 0, FACING_RIGHT);
                    ev.preventDefault();
                    break;
            }
        }
    });
})();

