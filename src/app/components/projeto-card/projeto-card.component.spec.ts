import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoCardComponent } from './projeto-card.component';

describe('ProjetoCardComponent', () => {
  let component: ProjetoCardComponent;
  let fixture: ComponentFixture<ProjetoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
