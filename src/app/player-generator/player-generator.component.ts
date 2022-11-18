import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { isEmpty } from 'src/utils/isEmpty';
import { HttpService } from '../config/http.service';

@Component({
  selector: 'app-player-generator',
  templateUrl: './player-generator.component.html',
  styleUrls: ['./player-generator.component.scss'],
})
export class PlayerGeneratorComponent implements OnInit {
  constructor(private http: HttpService, private _formBuilder: FormBuilder) {}

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
      isEmpty(this.role) ||
      isEmpty(this.selectedFile)
    ) {
      return;
    }
    this.http
      .createPlayer({
        name: this.name,
        surname: this.surname,
        age: this.age,
        club: this.club,
        role: this.role,
        image: this.selectedFile,
      })
      .subscribe((data) => alert('Data send!'));

    this.name = null;
    this.age = null;
    this.club = null;
    this.role = null;
    this.selectedFile = null;
    this.surname = null;
  }

  ngOnInit(): void {}
}
