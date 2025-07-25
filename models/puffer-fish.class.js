class PufferFish extends MovableObject{
    x = 120;
    y = 250;
    IMAGES_SWIM = ['Assets/img_sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
                    'Assets/img_sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
                    'Assets/img_sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
                    'Assets/img_sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
                    'Assets/img_sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
                    ];
    currentImage = 0;

    constructor() {
        super().loadImage('Assets/img_sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIM);

        this.x = 300 + Math.random() * 400;
        this.speed = 0.15 + Math.random() * 0.25;
        
        this.animate();
    }

    animate() {
        this.moveLeft()

        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIM.length
            let path = this.IMAGES_SWIM[i]
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 110);
        
    }
}