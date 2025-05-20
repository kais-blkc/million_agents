import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TreeNode } from '../types/tree.types';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  public http = inject(HttpClient);

  getTreeData(): Observable<TreeNode[]> {
    const delayTime: number = Math.floor(Math.random() * 1000 + 200);
    console.log(`Delay: ${delayTime}ms`);

    return this.http.get<TreeNode[]>('/tree-data.json').pipe(delay(delayTime));
  }
}
