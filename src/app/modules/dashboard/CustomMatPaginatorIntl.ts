import {MatPaginatorIntl} from '@angular/material';
import {Injectable} from '@angular/core';

@Injectable()
export class CustomMatPaginatorIntl extends MatPaginatorIntl {
  constructor() {
    super();

    this.getAndInitTranslations();
  }

  getAndInitTranslations() {
      this.itemsPerPageLabel = 'Items per page:';
      this.nextPageLabel = 'testing';
      this.previousPageLabel = 'testyou';
      this.changes.next();
  }

 getRangeLabel = (page: number, pageSize: number, length: number) =>  {
    if (length === 0 || pageSize === 0) {
      return `0 / ${length}`;
    }
    length = Math.max(length, 0);
    const label = 'Showing:';
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${label} ${startIndex + 1} 'to' ${endIndex} 'of' ${length} 'entries'`;
  }
}