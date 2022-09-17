import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerraplanagemComponent } from './terraplanagem.component';

describe('TerraplanagemComponent', () => {
  let component: TerraplanagemComponent;
  let fixture: ComponentFixture<TerraplanagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerraplanagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerraplanagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
