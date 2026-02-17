import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneMenu } from './gestione-menu';

describe('GestioneMenu', () => {
  let component: GestioneMenu;
  let fixture: ComponentFixture<GestioneMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestioneMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioneMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
