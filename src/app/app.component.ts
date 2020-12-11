import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  taeisdump = "Vote for Kim Jong Un?";
  showHeader = false;
  nobutton = "no";
  buttonsshown = true;
  no() {
    this.nobutton = "yes";
  }
  buttonclick() {
this.taeisdump = "Correct!"
this.buttonsshown = false;
  }
}
