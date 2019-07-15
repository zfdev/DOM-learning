'use strict';

// Here's a brief sketch of the class
// with things that you'll need anyway
class HoverIntent {

    constructor({
        sensitivity = 0.1, // speed less than 0.1px/ms means "hovering over an element"
        interval = 100, // measure mouse speed once per 100ms: calculate the distance between previous and next points
        elem,
        over,
        out
    }) {
        this.sensitivity = sensitivity;
        this.interval = interval;
        this.elem = elem;
        this.over = over;
        this.out = out;
        this.isOverElement = false;
        this.checkSpeedInterval = null;

        // make sure "this" is the object in event handlers.
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.trackSpeed = this.trackSpeed.bind(this);

        // assign the handlers
        elem.addEventListener("mouseover", this.onMouseOver);
        elem.addEventListener("mouseout", this.onMouseOut);

        // continue from this point

    }

    onMouseOver(event) {
        /* ... */
        if (this.isOverElement) { //Important point
            return;
        }
        this.isOverElement = true; //Important point

        this.startTime = Date.now();
        this.prevPosX = event.pageX;
        this.prevPosY = event.pageY;

        elem.addEventListener('mousemove', this.onMouseMove); //Important point
        this.checkSpeedInterval = window.setInterval(this.trackSpeed, this.interval); //Important point


    }

    onMouseOut(event) {
        let target = event.relatedTarget;
        if (!target || !this.elem.contains(target)) { //Important point
            this.isOverElement = false;
            elem.removeEventListener('mousemove', this.onMouseMove);
            window.clearInterval(this.checkSpeedInterval);
            if (this.isHover) { //Important point
                this.isHover = false;
                this.out.call(this.elem, event);
                console.log('out');
            }

        }



    }

    trackSpeed() {
        let speed;
        if (!this.moveTime || this.moveTime === this.startTime) {
            speed = 0;
        } else {
            let distance = Math.sqrt(Math.pow(Math.abs(this.lastPosY - this.prevPosY), 2) + Math.pow(Math.abs(this.lastPosX - this.prevPosX), 2));
            // console.log(distance);
            speed = distance / (this.moveTime - this.startTime);
            // console.log(distance);
            // console.log(this.moveTime);
            // console.log(this.startTime);
            // console.log(speed);
        }

        // console.log(speed);
        if (speed < this.sensitivity) {
            this.isHover = true; //Important point
            this.over.call(this.elem, event);
            window.clearInterval(this.checkSpeedInterval);
            console.log('over');
        } else {
            this.prevPosX = this.lastPosX;
            this.prevPosY = this.lastPosY;
            this.startTime = this.moveTime;
        }

    }

    onMouseMove(event) {
        /* ... */

        this.lastPosX = event.pageX;
        this.lastPosY = event.pageY;
        this.moveTime = Date.now();
        console.log('move');
    }


    destroy() {
        /* your code to "disable" the functionality, remove all handlers */
        elem.removeEventListener("mouseover", this.onMouseOver);
        elem.removeEventListener("mouseout", this.onMouseOut);

        // continue from this point
        elem.removeEventListener('mousemove', this.onMouseMove);
        window.clearInterval(this.checkSpeedInterval);
        delete this.checkSpeedInterval;
        delete this.isOverElement;
        this.elem = null;
        delete this.elem;
        this.over = null;
        this.out = null;
    }

}