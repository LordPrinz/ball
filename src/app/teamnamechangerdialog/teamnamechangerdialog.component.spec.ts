import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamnamechangerdialogComponent } from './teamnamechangerdialog.component';

describe('TeamnamechangerdialogComponent', () => {
  let component: TeamnamechangerdialogComponent;
  let fixture: ComponentFixture<TeamnamechangerdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamnamechangerdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamnamechangerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
