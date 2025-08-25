class World {
    character = new Character();
    enemies = [
    new PufferFish(),
    new PufferFish(),
    new PufferFish()
    ];
    barriers = [
        new Barrier()
    ];
    backgroundObjects = [
        new BackgroundObject('Assets/img_sharkie/3. Background/Dark/1.png', 0),
        new BackgroundObject('Assets/img_sharkie/3. Background/Dark/2.png', 719)
    ]
    canvas;
    ctx;
    keyboard;

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

        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.barriers);
        
        


        //Draw() wird immer wieder aufgerufen 
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });

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