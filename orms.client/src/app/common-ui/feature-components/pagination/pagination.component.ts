import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropDownComponent } from '../../controls/drop-down/drop-down.component';
import { FormsModule } from '@angular/forms';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { TooltipDirective } from '../tooltip/directive/tooltip.directive';
import { NumberBoxComponent } from '../../controls/number-box/number-box.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'orms-pagination',
  imports: [
    CommonModule,
    DropDownComponent,
    FormsModule,
    TooltipDirective,
    NumberBoxComponent,
    IconComponent,
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() totalItems: number = 77;
  @Input() pageSize: number = 10;
  @Input() currentPage: number = 1;
  @Input() isdropcount: boolean = true;
  @Input() ispagination: boolean = true;
  @Input() isgoto: boolean = true;
  @Input() isShowingentries: boolean = true;
  @Output() pageChange = new EventEmitter<number>();

  totalPages: number = 0;
  goToNumber: number = 0;

  ngOnInit(): void {
    this.countTotalPage();
  }

  ngOnChanges() {
    this.countTotalPage();
  }

  countTotalPage() {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
  }

  goToPage(page: number) {
    if (!page || page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }

  prev() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  next() {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }
  onPageSizeChange(event: any) {
    this.pageSize = Number(event);
    this.currentPage = 1;
    this.countTotalPage();

    this.goToNumber = 0;
  }

  onGoToInput(event: any) {
    const value = event.target.value;
    event.target.value = value.replace(/[^0-9]/g, '');

    this.goToNumber = Number(event.target.value);
  }
  firstpage() {
    if (this.currentPage > 1) {
      this.goToPage(1);
    }
  }
  lastpage() {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.totalPages);
    }
  }
}
