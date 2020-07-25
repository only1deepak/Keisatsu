import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicFIRPage } from './public-fir.page';

describe('PublicFIRPage', () => {
  let component: PublicFIRPage;
  let fixture: ComponentFixture<PublicFIRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicFIRPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicFIRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
