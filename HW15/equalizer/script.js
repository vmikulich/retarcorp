(function() {    
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");

    let exDx = new Array(5);
    let rgb = {
        r: 0,
        g: 0,
        b: 0
    }

    function color() {
        rgb.r = Math.random()*256;
        rgb.g = Math.random()*256;
        rgb.b = Math.random()*256;
    }

    function clear(x, y, exDx) {
        ctx.clearRect(x, y, -exDx, -400);
    }

    function drawRect(x, y, dx, dy, i) {
        ctx.fillStyle = `rgba(${rgb.r + 40*i}, ${rgb.g + 40*i}, ${rgb.b + 40*i}, 0.9)`;
        clear(x, y, exDx[i]);
        ctx.fillRect(x, y, -dx, -dy);
        exDx[i] = dx;
    }

    setInterval(() => drow(), 100);
    function drow() {
        color();
        drawRect(100, 500, 100, Math.random()*400, 0);
        drawRect(200, 500, 100, Math.random()*400, 1);
        drawRect(300, 500, 100, Math.random()*400, 2);
        drawRect(400, 500, 100, Math.random()*400, 3);
        drawRect(500, 500, 100, Math.random()*400, 4);
    }
})()