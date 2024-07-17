import { Component, NgZone, ViewChild, ViewEncapsulation } from '@angular/core';
import { PrimeNGConfig, SelectItemGroup } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { ChipsModule } from 'primeng/chips';
import { ChangeDetectorRef } from '@angular/core';
interface Tags {
  label: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  cities: Tags[] = [];
  selectedTags: string[] = [];
  selectedCity!: Tags;
  customTagStyle: string = 'custom-chips';
  openDropdown!: boolean;
  overlayVisible!: boolean;
  @ViewChild('overlaypanel')overlayPanel!: OverlayPanel;

  constructor(private primengConfig: PrimeNGConfig,
    private cdr: ChangeDetectorRef,private zone: NgZone) {
    }

  onInputClick(event: Event, overlaypanel: any) {
    event.preventDefault();
    overlaypanel.toggle(event);
  }

  citySelect(data:any) {
    this.selectedTags = [this.selectedTags,...data.value.label];    this.overlayPanel.hide();
    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }

  onEnterKeyPress(event: any): void {
    console.log('called');
    if (event.originalEvent.key === 'Enter') {
          // @ts-ignore: Object is possibly 'null'.
      if (!this.cities.find((t) => t.label == event.value)) {
            // @ts-ignore: Object is possibly 'null'.
      this.cities.push({ label: event?.value.trim() });
      this.cities = [...this.cities];
      }
      console.log('city', this.cities);
          // @ts-ignore: Object is possibly 'null'.
      event.value = ''; // Clear input after adding a chip
      event.preventDefault(); // Prevent the default Enter key behavior
     
    }
  }

  selectedTagOption(data:any) {
    if (!this.selectedTags.find((item) => item == data.value.label)) this.selectedTags.push(data.value.label);
    this.selectedTags = [...this.selectedTags];
    this.overlayPanel.hide();
  }

  // showOverlay(inputField: any): void {
  //   // Get the cursor position within the input field
  //   const cursorPosition = inputField.selectionStart;

  //   // Calculate the position based on cursor position and input field dimensions
  //   const rect = inputField.getBoundingClientRect();
  //   // @ts-ignore: Object is possibly 'null'.
  //   const left = rect.left + cursorPosition * (rect.width / inputField.value.length) + 'px';
  //   const top = rect.top + rect.height + 'px';

  //   // Set the position of the overlay panel
  //   this.overlayPanel.overlayVisible = true;
  //   // @ts-ignore: Object is possibly 'null'.
  //   this.overlayPanel.container.style.left = left;
  //   // @ts-ignore: Object is possibly 'null'.
  //   this.overlayPanel.container.style.top = top;
  // }
  

 
}
