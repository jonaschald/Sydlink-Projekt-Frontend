import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NySag } from './ny-sag';

describe('NySag', () => {
  let component: NySag;
  let fixture: ComponentFixture<NySag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NySag],
    }).compileComponents();

    fixture = TestBed.createComponent(NySag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
