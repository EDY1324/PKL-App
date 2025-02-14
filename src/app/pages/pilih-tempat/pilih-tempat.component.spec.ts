import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilihTempatComponent } from './pilih-tempat.component';

describe('PilihTempatComponent', () => {
  let component: PilihTempatComponent;
  let fixture: ComponentFixture<PilihTempatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilihTempatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilihTempatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
