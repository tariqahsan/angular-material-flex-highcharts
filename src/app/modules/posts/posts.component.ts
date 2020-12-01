import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../posts.service';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { Post } from '../posts';
import { CustomMatPaginatorIntl } from '../../shared/custom/CustomMatPaginatorIntl ';

export interface PeriodicElement {
  userId: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface User {

  id: number,
  name: string,
  domain: string,
  email: string,
  experience: number
}
const ELEMENT_DATA: PeriodicElement[] = [
  { userId: '1', firstName: 'Hydrogen', lastName: '1.0079', phone: 'H' },
  { userId: '2', firstName: 'Helium', lastName: '4.0026', phone: 'He' },
  { userId: '1', firstName: 'Hydrogen', lastName: '1.0079', phone: 'H' },
  { userId: '2', firstName: 'Helium', lastName: '4.0026', phone: 'He' },
  { userId: '1', firstName: 'Hydrogen', lastName: '1.0079', phone: 'H' },
  { userId: '2', firstName: 'Helium', lastName: '4.0026', phone: 'He' },
   { userId: '1', firstName: 'Hydrogen', lastName: '1.0079', phone: 'H' },
  { userId: '2', firstName: 'Helium', lastName: '4.0026', phone: 'He' },
  
];

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


  displayedColumns: string[] = ['id', 'name', 'email', 'domain'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource : any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private postService: PostService) { }

  ngOnInit() {

    // this.cards = this.postService.cards();
    // this.postService.getUserProfile().subscribe(users => this.users = users);
    //this.cards = this.postService.getUserProfile();
    //this.dataSource.paginator = this.paginator;

    // this.postService.getUserProfile().subscribe(
    //   (response) => console.log(response)
    // )

    this.postService.getUserProfile().subscribe(
      (response) => {
        this.dataSource = new MatTableDataSource(response);
		this.dataSource.sort = this.sort;
      });
  }

}
