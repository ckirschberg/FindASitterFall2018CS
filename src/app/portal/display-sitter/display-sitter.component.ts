import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sitter } from '../../entities/sitter';
import { SittersActions } from 'src/app/sitters-list/sitters.actions';

@Component({
  selector: 'display-sitter',
  templateUrl: './display-sitter.component.html',
  styleUrls: ['./display-sitter.component.scss']
})
export class DisplaySitterComponent implements OnInit {
  @Input() sitter: Sitter;
  @Output() sitterEditClicked: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private sittersActions: SittersActions) { }

  ngOnInit() {
  }

  onDeleteClick() {
    this.sittersActions.deleteSitter(this.sitter._id);
  }

  onEditClick() {
    // Handle logic here, or pass event to parent component.
    this.sitterEditClicked.emit(this.sitter);
  }
}
