export class Like {

  constructor(private thumbsUp?: number, private thumbsDown?: number) {}

  get like() {
    return this.like;
  }

  getLike(another: Like) {
      let value;

        if click.thumbsUp() {
            value +1;
        }

        else if click.thumbsDown() {
            value -1;
        }

        this.like = value;
    }

  set like(value) {
    if (value < 0) throw new Error("value can not have likes less than 0.");

    this.like = value;
  }

  display() {
    console.log(
      "Thumbs Up: " + this.thumbsUp + " , Thumbs Down: " + this.thumbsDown
    );
  }
}
