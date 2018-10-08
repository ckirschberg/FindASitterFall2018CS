import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sitter } from '../../entities/sitter';

@Component({
  selector: 'display-sitter',
  templateUrl: './display-sitter.component.html',
  styleUrls: ['./display-sitter.component.scss']
})
export class DisplaySitterComponent implements OnInit {
  @Input() sitter: Sitter;
  @Output() sitterEditClicked: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

  onEditClick() {
    // Handle logic here, or pass event to parent component.
    this.sitterEditClicked.emit(this.sitter);
  }
}
