import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerGeneratorComponent } from './player-generator.component';

describe('PlayerGeneratorComponent', () => {
  let component: PlayerGeneratorComponent;
  let fixture: ComponentFixture<PlayerGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
