import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FloatLabelType } from '@angular/material/form-field';
import { HttpService } from '../config/http.service';

@Component({
  selector: 'app-teamnamechangerdialog',
  templateUrl: './teamnamechangerdialog.component.html',
  styleUrls: ['./teamnamechangerdialog.component.scss'],
})
export class TeamnamechangerdialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TeamnamechangerdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Ref: MatDialogRef<TeamnamechangerdialogComponent>,
    private _formBuilder: FormBuilder,
    private http: HttpService
  ) {}

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);

  newName = '';

  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  ngOnInit(): void {}

  onSubmit(event: any) {
    event.preventDefault();

    const id = this.data.team._id;

    this.http
      .editTeam(id, {
        name: this.newName,
      })
      .subscribe((data) => {
        console.log(data);
      });

    this.Ref.close(this.newName);
  }

  nameInputHandler(event: any): void {
    this.newName = event.target.value;
  }
}
