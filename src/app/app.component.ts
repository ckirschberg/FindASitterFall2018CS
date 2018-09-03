import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Find A Sitter';

  // Method definition
  onClickSitter() : void {
    this.title = 'Find a sitter2';
    console.log("User clicked View Sitter");
  }

}
