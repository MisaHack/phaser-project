export default class MainScene extends Phaser.Scene {
    constructor(){
        super('MainScene')
    }

    // phaser scene function - just before scene loads - this is place to load image files
    preload(){
        this.load.image('card', 'assets/card.png')
    }
}