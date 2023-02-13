import { Component } from '@angular/core';
import { bedOptions, propertyTypes } from "../../constants";

@Component({
  selector: 'app-sort-and-filter',
  templateUrl: './sort-and-filter.component.html',
  styleUrls: ['./sort-and-filter.component.scss']
})
export class SortAndFilterComponent {
  label = "bedrooms";
  options = bedOptions;
  propertyTypesLabel = 'Property Types';
  propertyTypes = propertyTypes;
  onChange = (value: string) => {
    console.log('parent on change: ', value);
  }

  onChangeMultiselect = (values: string[]) => {
    console.log('parent on change: ', values);
  }
}
