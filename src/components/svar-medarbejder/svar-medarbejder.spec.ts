import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SvarMedarbejder } from './svar-medarbejder';

describe('SvarMedarbejder', () => {
  let component: SvarMedarbejder;
  let fixture: ComponentFixture<SvarMedarbejder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvarMedarbejder],
    }).compileComponents();

    fixture = TestBed.createComponent(SvarMedarbejder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
