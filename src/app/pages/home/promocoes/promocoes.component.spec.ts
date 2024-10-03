import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocoesComponent } from './promocoes.component';

describe('PromocoesComponent', () => {
  let component: PromocoesComponent;
  let fixture: ComponentFixture<PromocoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromocoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromocoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
