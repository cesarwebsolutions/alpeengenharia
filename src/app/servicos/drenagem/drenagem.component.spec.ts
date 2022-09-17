import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrenagemComponent } from './drenagem.component';

describe('DrenagemComponent', () => {
  let component: DrenagemComponent;
  let fixture: ComponentFixture<DrenagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrenagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrenagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
