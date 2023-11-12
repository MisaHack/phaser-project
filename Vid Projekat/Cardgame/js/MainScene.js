export default class MainScene extends Phaser.Scene {
    constructor(){
        super('MainScene');
    }

    //phaser scene function - loads just before scene - displays load image files
    preload(){
        this.load.image('card','assets/card.png')
    }
}