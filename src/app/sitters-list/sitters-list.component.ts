import { TempDataService } from './../temp-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitters-list',
  templateUrl: './sitters-list.component.html',
  styleUrls: ['./sitters-list.component.scss']
})
export class SittersListComponent implements OnInit {

  constructor(private tempData: TempDataService) { 
  }

  ngOnInit() {
  }

}
