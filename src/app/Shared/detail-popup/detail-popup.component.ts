import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-popup',
  templateUrl: './detail-popup.component.html',
  styleUrls: ['./detail-popup.component.css']
})
export class DetailPopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
