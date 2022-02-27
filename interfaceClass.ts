interface IBhavior {
    play():void;
}
class Soccer implements IBhavior {
    play() {
        console.log('Play Soccer');
    }
}
class Guitar implements IBhavior {
    play() {
        console.log('play the guitar');
    }
}

let bhavior = new Guitar();
bhavior.play(); // Play the guitar
bhavior = new Soccer();
bhavior.play(); // Play Soccer