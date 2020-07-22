import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Note} from './model/note';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) {
  }

  async getNotes(userId: string): Promise<Note[]> {
    const url = `http://localhost:8085/notes/${userId}`;
    return await this.httpClient.get<Note[]>(url ).toPromise();
  }
}
