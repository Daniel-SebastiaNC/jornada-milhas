import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoControleComponent } from './botao-controle.component';

describe('BotaoControleComponent', () => {
  let component: BotaoControleComponent;
  let fixture: ComponentFixture<BotaoControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotaoControleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
