import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Find A Sitter';
  isBaby: Boolean = undefined;
  type: String = '';

  // Method definition
  onClickSitter() : void {
    this.isBaby = false;
    // console.log("User clicked View Sitter");
  }

  // Method defintion
  onClickBaby() {
    this.isBaby = true;
  }


  onClick(value: String) {
    this.type = value;
  }
  // onClickParent() {
  //   this.type = 'Parent';
  // }
  // onClickSitter2() {
  //   this.type = 'Sitter';
  // }



}
