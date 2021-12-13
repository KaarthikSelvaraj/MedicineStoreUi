import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drugs } from '../drugs';
import { DrugsService } from '../drugs.service';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.scss']
})
export class DrugsComponent implements OnInit {
AllDrugs:Observable<Drugs[]>;
  constructor(private drugsService: DrugsService) { }

  ngOnInit(): void {
    this.loadAllDrugs();
  }

  loadAllDrugs(){
    this.AllDrugs = this.drugsService.getAllDrugs();
  }

}
