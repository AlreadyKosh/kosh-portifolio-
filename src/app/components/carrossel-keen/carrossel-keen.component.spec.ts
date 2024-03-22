import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselKeenComponent } from './carrossel-keen.component';

describe('CarrosselKeenComponent', () => {
  let component: CarrosselKeenComponent;
  let fixture: ComponentFixture<CarrosselKeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosselKeenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrosselKeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
