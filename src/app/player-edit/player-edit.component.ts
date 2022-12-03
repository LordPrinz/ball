import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FloatLabelType } from '@angular/material/form-field';
import { player } from 'src/types/player';
import { isEmpty } from 'src/utils/isEmpty';
import { HttpService } from '../config/http.service';
import { PickPlayerDialogComponent } from '../pick-player-dialog/pick-player-dialog.component';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.scss'],
})
export class PlayerEditComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PickPlayerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Ref: MatDialogRef<PickPlayerDialogComponent>,
    private http: HttpService
  ) {}

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  selectedFile: null | File = null;
  age: null | number = null;
  name: null | string = null;
  surname: null | string = null;
  role: null | string = null;
  club: null | string = null;

  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  nameInputHandler(event: any): void {
    this.name = event.target.value;
  }
  surnameInputHandler(event: any): void {
    this.surname = event.target.value;
  }
  ageInputHandler(event: any): void {
    this.age = event.target.value;
  }
  clubInputHandler(event: any): void {
    this.club = event.target.value;
  }
  roleInputHandler(event: any): void {
    this.role = event.value;
  }

  onUpload(event: any) {
    event.preventDefault();
    if (
      isEmpty(this.name) ||
      isEmpty(this.surname) ||
      isEmpty(this.age) ||
      isEmpty(this.club) ||
      isEmpty(this.role)
    ) {
      return alert('Some fileds are empty!');
    }

    this.http
      .editPlayer(this.data._id, {
        name: this.name,
        surname: this.surname,
        age: this.age,
        club: this.club,
        role: this.role,
        image: this.selectedFile ? this.selectedFile : null,
      })
      .subscribe((data) => {
        this.Ref.close({
          name: this.name,
          surname: this.surname,
          age: this.age,
          club: this.club,
          role: this.role,
          image: this.selectedFile ? this.selectedFile : null,
        });
      });
  }
  ngOnInit(): void {
    this.name = this.data.name;
    this.surname = this.data.surname;
    this.age = this.data.age;
    this.club = this.data.club;
    this.role = this.data.role;
  }
}
