import { fadeIn } from '../../animations/fadeIn.animation';
import { TreeNode } from '../../types/tree.types';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tree',
  imports: [],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
  animations: [fadeIn],
})
export class TreeComponent {
  public nodes = input<TreeNode[]>([]);
  public expandedNodes = new Set<number>();

  toggleNode(node: TreeNode) {
    if (this.hasChildren(node)) {
      if (this.expandedNodes.has(node.id)) {
        this.expandedNodes.delete(node.id);
      } else {
        this.expandedNodes.add(node.id);
      }
    }
  }

  hasChildren(node: TreeNode): boolean {
    return node.children && node.children.length > 0;
  }

  isExpanded(node: TreeNode): boolean {
    return this.expandedNodes.has(node.id);
  }
}
