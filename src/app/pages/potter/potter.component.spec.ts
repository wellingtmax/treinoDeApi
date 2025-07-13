import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotterComponent } from './potter.component';

describe('PotterComponent', () => {
  let component: PotterComponent;
  let fixture: ComponentFixture<PotterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
