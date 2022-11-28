import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickPlayerDialogComponent } from './pick-player-dialog.component';

describe('PickPlayerDialogComponent', () => {
  let component: PickPlayerDialogComponent;
  let fixture: ComponentFixture<PickPlayerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickPlayerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickPlayerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
