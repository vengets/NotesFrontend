import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Note} from '../model/note';
import {DashboardService} from '../dashboard.service';
import {Injectable} from '@angular/core';

@Injectable()
export class NotesResolver implements  Resolve <Note[]> {

  private noteService: DashboardService;

  constructor(noteService: DashboardService) {
    this.noteService = noteService;
  }
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Promise<Note[]>{
    return await this.noteService.getNotes(localStorage.getItem('user'));
  }
}
