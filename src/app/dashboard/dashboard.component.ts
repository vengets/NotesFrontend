import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Note} from '../model/note';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  notes: Note[];

  constructor(private  activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.notes = data.NotesResolver;
    });
  }

}
