import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  myname = "";

  name = "Angular " + VERSION.major;
  count = 1;
  arr = ["Apple", "mango", "banana", "abcd", "pqrst"];
  img1 = "https://picsum.photos/id/1/700/500 ";
  img2 = "https://picsum.photos/id/2/700/500 ";
  img3 = "https://picsum.photos/id/3/700/500 ";
  imgsrc = "";
  islogin = false;

  btn1() {
    this.imgsrc = this.img1;
  }
  btn2() {
    this.imgsrc = this.img2;
  }
  btn3() {
    this.imgsrc = this.img3;
  }
  hello() {
    if (this.islogin == true) {
      this.islogin = false;
      this.count++;
    } else {
      this.islogin = true;
    }
  }
}
