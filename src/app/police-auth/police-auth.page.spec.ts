import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoliceAuthPage } from './police-auth.page';

describe('PoliceAuthPage', () => {
  let component: PoliceAuthPage;
  let fixture: ComponentFixture<PoliceAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceAuthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoliceAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
