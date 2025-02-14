import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTempatComponent } from './info-tempat.component';

describe('InfoTempatComponent', () => {
  let component: InfoTempatComponent;
  let fixture: ComponentFixture<InfoTempatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTempatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTempatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
