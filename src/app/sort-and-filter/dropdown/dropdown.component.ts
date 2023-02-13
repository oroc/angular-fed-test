import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() label?: string;
  @Input() options: string[] = [];
  @Input() onChange?: (value: string) => void;

  handleChange(e: Event) {
    const value = (e.target as HTMLSelectElement).value;
    if (this.onChange) {
      this.onChange(value);
    }
  }
}
