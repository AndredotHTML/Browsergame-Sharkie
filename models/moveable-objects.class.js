class MovableObject {
    height = 100;
    width = 100;
    img;
    speed = 0.15;
    y = 0
    imageCache = {};
    otherDirection = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
        
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(imgs) {
        let i = this.currentImage % imgs.length;
            let path = imgs[i];
            this.img = this.imageCache[path];
            console.log("Aktuelles Bild:", path, this.img);
            this.currentImage++;
    }
}