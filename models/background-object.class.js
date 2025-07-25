class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;
    y = 0;
    speed = 0.15;
    

    constructor(imagePath, startX) {
        super().loadImage(imagePath);
        this.x = startX;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.x -= this.speed;
            if (this.x <= -this.width) {
                this.x += this.width * 2 - 5;
            }
        }, 1000 / 60);
    }
}