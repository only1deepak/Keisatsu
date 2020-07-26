import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoliceMainPage } from './police-main.page';

describe('PoliceMainPage', () => {
  let component: PoliceMainPage;
  let fixture: ComponentFixture<PoliceMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoliceMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
