import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Kunde } from './kunde';

describe('Kunde', () => {
  let component: Kunde;
  let fixture: ComponentFixture<Kunde>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kunde],
    }).compileComponents();

    fixture = TestBed.createComponent(Kunde);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
