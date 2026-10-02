import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlleSager } from './alle-sager';

describe('AlleSager', () => {
  let component: AlleSager;
  let fixture: ComponentFixture<AlleSager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlleSager],
    }).compileComponents();

    fixture = TestBed.createComponent(AlleSager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
