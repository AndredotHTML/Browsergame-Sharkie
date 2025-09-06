class Character extends MovableObject {
    height = 250;
    width = 250;
    speed = 2;
    y = 150;
    x = 40;
    IMAGES_IDLE = [
                    'Assets/img_sharkie/1.Sharkie/1.IDLE/1.png',
                    'Assets/img_sharkie/1.Sharkie/1.IDLE/2.png',
                    'Assets/img_sharkie/1.Sharkie/1.IDLE/3.png',
                    'Assets/img_sharkie/1.Sharkie/1.IDLE/4.png',
                    'Assets/img_sharkie/1.Sharkie/1.IDLE/5.png',
                    'Assets/img_sharkie/1.Sharkie/1.IDLE/6.png',
                    'Assets/img_sharkie/1.Sharkie/1.IDLE/7.png',
                    'Assets/img_sharkie/1.Sharkie/1.IDLE/8.png',
                    'Assets/img_sharkie/1.Sharkie/1.IDLE/9.png',
                    'Assets/img_sharkie/1.Sharkie/1.IDLE/10.png',
                    'Assets/img_sharkie/1.Sharkie/1.IDLE/11.png',
                    'Assets/img_sharkie/1.Sharkie/1.IDLE/12.png',
                    'Assets/img_sharkie/1.Sharkie/1.IDLE/13.png',
                    'Assets/img_sharkie/1.Sharkie/1.IDLE/14.png',
                    'Assets/img_sharkie/1.Sharkie/1.IDLE/15.png',
                    'Assets/img_sharkie/1.Sharkie/1.IDLE/16.png',
                    'Assets/img_sharkie/1.Sharkie/1.IDLE/17.png',
                    'Assets/img_sharkie/1.Sharkie/1.IDLE/18.png',
                    ];
    IMAGES_SWIMMING = [ 
                    'Assets/img_sharkie/1.Sharkie/3.Swim/1.png',
                    'Assets/img_sharkie/1.Sharkie/3.Swim/2.png',
                    'Assets/img_sharkie/1.Sharkie/3.Swim/3.png',
                    'Assets/img_sharkie/1.Sharkie/3.Swim/4.png',
                    'Assets/img_sharkie/1.Sharkie/3.Swim/5.png',
                    'Assets/img_sharkie/1.Sharkie/3.Swim/6.png'
                    ];                  
    currentImage = 0;
        
    

    constructor() {
        super().loadImage('Assets/img_sharkie/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIMMING);

        this.animate();

    }


    animate() {

    setInterval(() => {
    if (this.world.keyboard.RIGHT) {
    this.x += this.speed;
    this.otherDirection = false;
    }
    if (this.world.keyboard.LEFT && this.x > 0) {
        this.x -= this.speed;
        this.otherDirection = true;
    }
    if (this.world.keyboard.UP) {
        this.y -= this.speed;
    }
    if (this.world.keyboard.DOWN) {
        this.y += this.speed;
    }

    this.world.camera_x = -this.x;
    if (this.world.camera_x > 0) {
        this.world.camera_x = 0; 
    }
    }, 1000 / 60);

    setInterval(() => {
        if (!this.world.keyboard.UP &&
            !this.world.keyboard.DOWN &&
            !this.world.keyboard.LEFT &&
            !this.world.keyboard.RIGHT) 
        {
            // idle animation
            let i = this.currentImage % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        } else {
            // swimming animation
            let i = this.currentImage % this.IMAGES_SWIMMING.length;
            let path = this.IMAGES_SWIMMING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }
    }, 110);
}
}