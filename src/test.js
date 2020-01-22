export default class Test {
    constructor(title, img) {
        this.title = title
        this.img = img

    }

    info() {
        return JSON.stringify({
            title: this.title,
            img:this.img
        })
    }
}