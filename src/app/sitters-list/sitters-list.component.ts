import { TempDataService } from './../temp-data.service';
import { Component, OnInit } from '@angular/core';
import { Sitter } from '../entities/sitter';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

@Component({
  selector: 'app-sitters-list',
  templateUrl: './sitters-list.component.html',
  styleUrls: ['./sitters-list.component.scss']
})
export class SittersListComponent implements OnInit {
  sitters: Sitter[];
  
  constructor(private ngRedux: NgRedux<IAppState>) { 
    // this.sitters = tempData.sitters;
  }

  ngOnInit() {
    this.ngRedux.select(x => x.sitters).subscribe((data) => {
      this.sitters = data.sitters;
    });
  }

  onSitterEditClicked(sitter: Sitter) {
    console.log("someone clicked sitter", sitter);
  }

}
