interface Drawable {
    drawing():void;
}

interface Sortable {
    sorting():void;
}

class Canvas implements Drawable, Sortable {
    drawing() {
        console.log('Drawing...');
    };

    sorting() {
        console.log('Sorting...');
    }
}