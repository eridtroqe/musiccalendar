import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { getPostsRequest } from '../store/actions/posts.actions';
import { MatCalendarCellCssClasses, MatDialog } from '@angular/material';
import { Subscription, Observable } from 'rxjs';
import { isLoadingpost } from '../store/reducers/posts.reducer';
import { ActivatedRoute } from '@angular/router';
import { Post, PostsResponse } from '../model/post.interface';
import { ListPostsComponent } from '../list-posts/list-posts.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnDestroy {

  releaseDates = [];
  posts: Array<Post>;
  isLoading: boolean;

  isLoadingSub: Subscription;

  constructor(private store: Store<AppState>,
              private activatedRoute: ActivatedRoute,
              private dialog: MatDialog) {
                
                this.isLoadingSub = this.store.select(isLoadingpost).subscribe(val => this.isLoading = val);
                this.store.dispatch(getPostsRequest());

  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { calendar: PostsResponse }) => {
      this.posts = data.calendar.posts;
      data.calendar.posts.forEach(el => {
        this.releaseDates.push(el.release_date);
      }
      );
    });
  }

  ngOnDestroy() {
    this.isLoadingSub.unsubscribe();
  }

  onSelect(event) {
    const hasReleases = this.hasReleases(event);
    const postsOnDate = [];
    this.posts.forEach(post => {
      const areSameDate = this.areSameDate(post.release_date, event);
      if (areSameDate) {
        postsOnDate.push(post);
      }
    });
    if (hasReleases && postsOnDate.length > 0) {
      this.posts.sort((a, b) => a.order - b.order);
      this.dialog.open(ListPostsComponent, { data: postsOnDate });
    }
  }

  getClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlight = this.hasReleases(date);
      return highlight ? 'has-releases' : '';
    };
  }

  hasReleases(date: Date): boolean {
    return this.releaseDates.some(d => this.areSameDate(d, date));
  }

  areSameDate(d1, d2): boolean {
    d1 = new Date(d1);
    return d1.getDate() === d2.getDate()
      && d1.getMonth() === d2.getMonth()
      && d1.getFullYear() === d2.getFullYear();
  }

}
