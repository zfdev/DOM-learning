class DragableDelegate {
    constructor(config = {}) {
        this.className = config.className;
        this.init();
    }
    init() {
        this.onMousedown = this.onMousedown.bind(this);
        this.onMousemove = this.onMousemove.bind(this);
        this.onMouseup = this.onMouseup.bind(this);
        this.preventDrag = this.preventDrag.bind(this);
        this.bindEvent();
        document.body.style.overflowX = "hidden";
    }
    render() {

    }
    setTargePos(x, y) {
        this.currentTarget.style.left = x + 'px';
        this.currentTarget.style.top = y + 'px';
    }
    onMousedown(e) {
        let target = e.target;
        if (!target.classList.contains(this.className)) {
            return;
        }
        this.currentTarget = target;
        this.startOffsetX = e.pageX - target.getBoundingClientRect().left - window.pageXOffset;
        this.startOffsetY = e.pageY - target.getBoundingClientRect().top - window.pageYOffset;
        document.addEventListener('mousemove', this.onMousemove);
        this.currentTarget.addEventListener('mouseup', this.onMouseup);
        this.currentTarget.addEventListener('dragstart', this.preventDrag);
        e.preventDefault();
    }
    onMousemove(e) {
        document.body.append(this.currentTarget);
        this.currentTarget.style.position = 'absolute';
        let posX = e.pageX - this.startOffsetX;
        let posY = e.pageY - this.startOffsetY;
        posX = Math.max(0, posX);
        posX = Math.min(posX, document.documentElement.clientWidth - this.currentTarget.offsetWidth);
        posY = Math.max(0, posY);
        posY = Math.min(posY, document.documentElement.scrollHeight - this.currentTarget.offsetHeight);
        this.setTargePos(posX, posY);
        let clientTop = this.currentTarget.getBoundingClientRect().top;
        let clientBottom = this.currentTarget.getBoundingClientRect().bottom;
        if (clientTop < 0) {
            window.scrollBy(0, clientTop);
        }
        if (clientBottom > document.documentElement.clientHeight) {
            window.scrollBy(0, Math.abs(document.documentElement.clientHeight - clientBottom));
        }
    }
    preventDrag(e) {
        e.preventDefault();
    }
    onMouseup() {
        document.removeEventListener('mousemove', this.onMousemove);
        this.currentTarget.removeEventListener('mouseup', this.onMouseup);
        this.currentTarget.removeEventListener('dragstart', this.preventDrag);
        this.currentTarget = null;
    }
    bindEvent() {
        document.addEventListener('mousedown', this.onMousedown);
    }
    destory() {
        document.removeEventListener('mousedown', this.onMousedown);
        document.removeEventListener('mousemove', this.onMousemove);
        this.currentTarget.removeEventListener('mouseup', this.onMouseup);
        this.currentTarget.removeEventListener('dragstart', this.preventDrag);
        this.currentTarget = null;
        document.body.style.overflowX = "";
    }
}

let classDragable = new DragableDelegate({
    className: 'draggable'
});