import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaDetalhesComponent } from './receita-detalhes.component';

describe('ReceitaDetalhesComponent', () => {
  let component: ReceitaDetalhesComponent;
  let fixture: ComponentFixture<ReceitaDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceitaDetalhesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceitaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
