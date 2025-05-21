import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TreeNode } from '../types/tree.types';
import { delay, Observable, of } from 'rxjs';
import { treeData } from '../data/tree-data';

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  public http = inject(HttpClient);

  getTreeData(): Observable<TreeNode[]> {
    const delayTime: number = Math.floor(Math.random() * 1000 + 200);

    console.log(`Delay: ${delayTime}ms`);

    return of(treeData).pipe(delay(delayTime));
  }
}
