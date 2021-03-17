import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoPesquisaComponent } from './campo-pesquisa.component';

describe('CampoPesquisaComponent', () => {
  let component: CampoPesquisaComponent;
  let fixture: ComponentFixture<CampoPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
