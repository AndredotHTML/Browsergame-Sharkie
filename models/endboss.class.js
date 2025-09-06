class Endboss extends MovableObject {

    IMAGES_INTRODUCE = ["Assets/img_sharkie/2.Enemy/3 Final Enemy/1.Introduce/1.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/1.Introduce/2.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/1.Introduce/3.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/1.Introduce/4.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/1.Introduce/5.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/1.Introduce/6.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/1.Introduce/7.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/1.Introduce/8.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/1.Introduce/9.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/1.Introduce/10.png"
    ];

    IMAGES_FLOAT =      ["Assets/img_sharkie/2.Enemy/3 Final Enemy/2.floating/1.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/2.floating/2.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/2.floating/3.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/2.floating/4.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/2.floating/5.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/2.floating/6.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/2.floating/7.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/2.floating/8.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/2.floating/9.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/2.floating/10.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/2.floating/11.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/2.floating/12.png",
                        "Assets/img_sharkie/2.Enemy/3 Final Enemy/2.floating/13.png",
    ];


    constructor() {
        super().loadImage(this.IMAGES_FLOAT[0]);
        this.loadImages(this.IMAGES_FLOAT);

        this.x = 720;

        this.animate()
    }

    animate() {
        

        setInterval(() => {
            this.playAnimation(this.IMAGES_FLOAT)
        }, 110);
        
    }
}