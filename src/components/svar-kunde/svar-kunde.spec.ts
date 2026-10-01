import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SvarKunde } from './svar-kunde';

describe('SvarKunde', () => {
  let component: SvarKunde;
  let fixture: ComponentFixture<SvarKunde>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvarKunde],
    }).compileComponents();

    fixture = TestBed.createComponent(SvarKunde);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
