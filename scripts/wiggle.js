var elements = document.getElementsByClassName('wiggle');
var originalPositions = [...elements].map((element) => {
    rectangle = element.getBoundingClientRect();
    const anchorX = rectangle.left + rectangle.width / 2;
    const anchorY = rectangle.top + rectangle.height / 2;

    return ({ x: anchorX, y: anchorY });
});

let goalTransform = new Array(originalPositions.length).fill().map(() => ({ x: 0, y: 0 }));

//creating Vector object
var Vector = function (x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.normalize = function () {
    var length = Math.sqrt(this.x * this.x + this.y * this.y); //calculating length
    this.x = this.x / length; //assigning new value to x (dividing x by length of the vector)
    this.y = this.y / length; //assigning new value to y
}

document.addEventListener('mousemove', (event) => wiggle(event.clientX, event.clientY));
document.addEventListener('touchmove', (event) => {
    const { touches, changedTouches } = event.originalEvent ?? event;
    const touch = touches[0] ?? changedTouches[0];
    wiggle(touch.pageX, touch.pageY);
});

function wiggle(xPos, yPos) {

    for (var i = 0; i < elements.length; i++) {
        let element = elements[i];
        const anchorX = originalPositions[i].x;
        const anchorY = originalPositions[i].y;

        let xDistance = (anchorX - xPos);
        let yDistance = (anchorY - yPos);

        if (xDistance >= 0 && xDistance < 1) xDistance = 1;
        if (xDistance <= 0 && xDistance > -1) xDistance = -1;
        if (yDistance >= 0 && yDistance < 1) yDistance = 1;
        if (yDistance <= 0 && yDistance > -1) yDistance = -1;

        const distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
        let desiredDistance = 1000 / distance * 2;
        if (desiredDistance > 100) desiredDistance = 100;

        let desiredDirection = new Vector(xDistance, yDistance);
        desiredDirection.normalize();

        const moveX = desiredDirection.x * desiredDistance;
        const moveY = desiredDirection.y * desiredDistance;

        goalTransform[i].x = moveX;
        goalTransform[i].y = moveY;

        element.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
    }
}

setTimeout(randomShake, 100);

function randomShake() {

    for (var i = 0; i < elements.length; i++) {
        let element = elements[i];
        shakeX = goalTransform[i].x + (Math.random() * 2 - 1) * 2;
        shakeY = goalTransform[i].y + (Math.random() * 2 - 1) * 2;

        element.style.transform = 'translate(' + shakeX + 'px, ' + shakeY + 'px)';
    }

    setTimeout(randomShake, 100);
}