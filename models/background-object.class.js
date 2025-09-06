class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;
    y = 0;
    speed = 0.15;
    

    constructor(imagePath, startX) {
        super().loadImage(imagePath);
        this.x = startX;
    }

}