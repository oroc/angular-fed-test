import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { ChangeDetection } from "@angular/cli/lib/config/workspace-schema";

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent {
  selectedOptions: Record<string, boolean> = {};
  @Input() label!: string;
  @Input() options: string[] = [];
  @Input() onChange?: (values: string[]) => void;

  handleChange(e: Event) {
    const target = (e.target as HTMLInputElement);
    this.selectedOptions = {...this.selectedOptions, [target.value]: target.checked};
    if (this.onChange) {
      const values = Object.keys(this.selectedOptions).filter((key) => Boolean(this.selectedOptions[key]))
      this.onChange(values);
    }
  }
}
