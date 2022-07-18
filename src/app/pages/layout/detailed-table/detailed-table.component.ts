import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-detailed-table',
  templateUrl: './detailed-table.component.html',
  styleUrls: ['./detailed-table.component.scss'],
})
export class DetailedTableComponent {

  settings = {
    actions: false,
    hideSubHeader: true,
    pager:{
      display: false,
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        filter: false
      },
      oilRate: {
        title: 'Oil',
        type: 'number',
        filter: false
      },
      waterRate: {
        title: 'Water',
        type: 'number',
        filter: false
      },
      gasRate: {
        title: 'Gas',
        type: 'number',
        filter: false
      },
      totalCost: {
        title: 'Cost',
        type: 'number',
        filter: false
      },
      totalRevenue: {
        title: 'Revenue',
        type: 'number',
        filter: false
      },
      /* discountNcf: {
        title: 'Discount',
        type: 'number',
        filter: false,
        hide: true,
      }, */
      ncf: {
        title: 'NCF',
        type: 'number',
        filter: false
      },
      npv: {
        title: 'NPV',
        type: 'number',
        filter: false
      },
      capex: {
        title: 'CAPEX',
        type: 'number',
        filter: false
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getDataTable();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
