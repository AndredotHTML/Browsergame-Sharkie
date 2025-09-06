class Level {
    enemies;
    barriers;
    backgroundObjects;
    level_end_x = 2880;

    constructor(enemies, barriers, backgroundObjects) {
        this.enemies = enemies;
        this.barriers = barriers;
        this.backgroundObjects = backgroundObjects;
    }
}