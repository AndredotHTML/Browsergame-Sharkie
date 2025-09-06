class World {
    character = new Character();
    enemies = level1.enemies;
    barriers = level1.barriers;
    backgroundObjects = level1.backgroundObjects;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld()
    }


    setWorld() {
        this.character.world = this;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.translate(this.camera_x, 0);

        this.drawBackground();
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.barriers);
        
        this.ctx.translate(-this.camera_x, 0);



        //Draw() wird immer wieder aufgerufen 
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });

    }

    drawBackground() {
    let backgroundWidth = 720; // Breite eines Segments
    let totalWidth = this.canvas.width;

    // Startpunkt: Kamera-Ausrichtung
    let startX = Math.floor(-this.camera_x / backgroundWidth) * backgroundWidth;

    // Index: welches Segment (0=erstes Bild, 1=zweites Bild usw.)
    let segmentIndex = Math.floor(-this.camera_x / backgroundWidth);

    for (let x = startX; x < -this.camera_x + totalWidth; x += backgroundWidth) {
        // Bild im Wechsel auswählen
        let obj = this.backgroundObjects[segmentIndex % this.backgroundObjects.length];
        this.ctx.drawImage(obj.img, x, obj.y, obj.width, obj.height);

        segmentIndex++;
    }
    }
    

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
            
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height,);
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore()
        }
    }
}