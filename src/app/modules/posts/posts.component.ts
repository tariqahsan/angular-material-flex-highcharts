import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../posts.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

export interface User {

  id: number;
  name: string;
  experience: number;
  domain: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  pageEvent: PageEvent;

  //cards = [];
  cards: Observable<Post[]>;

  dataSource: any;

  displayedColumns: string[] = ['id', 'name', 'experience', 'domain'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private postsService: PostsService) { }

  ngOnInit() {

    this.postsService.getUsers().subscribe(
        (data) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
        }
    )

  }

}
