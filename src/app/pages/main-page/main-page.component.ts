import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { TreeComponent } from '../../shared/components/tree/tree.component';
import { TreeService } from '../../shared/services/tree.service';
import { TreeNode } from '../../shared/types/tree.types';
import { catchError, finalize, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [TreeComponent, LoadingComponent],
  providers: [TreeService],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  public treeService = inject(TreeService);
  public treeNodes = toSignal<TreeNode[]>(this.getTreeData(), {});
  public error = signal<string | null>(null);
  public loading = signal<boolean>(true);

  private getTreeData(): Observable<TreeNode[]> {
    return this.treeService.getTreeData().pipe(
      catchError((error) => {
        console.error('Error fetching tree data:', error);
        return [];
      }),
      finalize(() => this.loading.set(false)),
    );
  }
}
