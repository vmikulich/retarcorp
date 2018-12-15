const Canvas = {
  start() {
    const ctx = this.Elements.ctx;
    ctx.lineCap = 'round';
    ctx.lineWidth = this.Elements.width.value;
    ctx.strokeStyle = this.Elements.color.value;
    this.addEventHandlers();
  },
  Elements: {
    canvas: document.getElementById('canvas'),
    ctx: this.canvas.getContext('2d'),
    color: document.getElementById('colorPicker'),
    width: document.getElementById('lineWidth')
  },
  addEventHandlers() {
    const canvas = this.Elements.canvas;
    const mousedownFun = this.EventHandlers.mousedownFun.bind(this.EventHandlers);
    canvas.addEventListener('mousedown', mousedownFun);
    const mouseupFun = this.EventHandlers.mouseupFun.bind(this.EventHandlers);
    canvas.addEventListener('mouseup', mouseupFun);
    const mousemoveFun = this.EventHandlers.mousemoveFun.bind(this.EventHandlers);
    canvas.addEventListener('mousemove', mousemoveFun);
    const colorChangeFun = this.EventHandlers.colorChangeFun.bind(Canvas.Elements);
    this.Elements.color.addEventListener('change', colorChangeFun);
    const widthChangeFun = this.EventHandlers.widthChangeFun.bind(Canvas.Elements);
    this.Elements.width.addEventListener('change', widthChangeFun);
  },
  EventHandlers: {
    isPressed: false,
    prevX: null,
    prevY: null,
    mousedownFun(e) {
      this.isPressed = true;
      this.prevX = e.layerX;
      this.prevY = e.layerY;
    },
    mouseupFun(e) {
      this.isPressed = false;
    },
    mousemoveFun(e) {
      if (this.isPressed) {
        const ctx = Canvas.Elements.ctx;
        ctx.beginPath();
        ctx.moveTo(this.prevX, this.prevY);
        const x = e.layerX;
        const y = e.layerY;
        ctx.lineTo(x, y);
        this.prevX = x;
        this.prevY = y;
        ctx.stroke();
      }
    },
    colorChangeFun() {
      this.ctx.strokeStyle = this.color.value;
    },
    widthChangeFun() {
      this.ctx.lineWidth = +this.width.value;
    }
  }
}

Canvas.start();
