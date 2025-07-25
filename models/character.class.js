class Character extends MovableObject {
    height = 250;
    width = 250;
    y = 150;
    x = 40;
    IMAGES_IDLE = ['Assets/img_sharkie/1.Sharkie/1.IDLE/1.png',
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
    currentImage = 0;
        
    

    constructor() {
        super().loadImage('Assets/img_sharkie/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);

        this.animate();

    }


    animate() {
    setInterval(() => {
        if (
            !this.world.keyboard.UP &&
            !this.world.keyboard.DOWN &&
            !this.world.keyboard.LEFT &&
            !this.world.keyboard.RIGHT
        ) {
            let i = this.currentImage % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }
    }, 110);
}
}