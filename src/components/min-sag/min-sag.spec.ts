import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinSag } from './min-sag';

describe('MinSag', () => {
  let component: MinSag;
  let fixture: ComponentFixture<MinSag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinSag],
    }).compileComponents();

    fixture = TestBed.createComponent(MinSag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
