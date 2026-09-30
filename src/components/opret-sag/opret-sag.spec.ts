import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpretSag } from './opret-sag';

describe('OpretSag', () => {
  let component: OpretSag;
  let fixture: ComponentFixture<OpretSag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpretSag],
    }).compileComponents();

    fixture = TestBed.createComponent(OpretSag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
