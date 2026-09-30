import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Medarbejder } from './medarbejder';

describe('Medarbejder', () => {
  let component: Medarbejder;
  let fixture: ComponentFixture<Medarbejder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Medarbejder],
    }).compileComponents();

    fixture = TestBed.createComponent(Medarbejder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
