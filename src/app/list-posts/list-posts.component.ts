import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Post } from '../model/post.interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { deletePostRequest } from '../store/actions/posts.actions';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Array<Post>,
    private store: Store<AppState>,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }


  disable(): boolean {
    return this.data.length === 1 ? true : false;
  }

  deletePost(id: string) {
    console.log('id ', id);
    if (id) {
      this.store.dispatch(deletePostRequest({ id }));
      this.dialog.closeAll();
    }
  }

}
