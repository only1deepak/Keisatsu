import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicHomePage } from './public-home.page';

describe('PublicHomePage', () => {
  let component: PublicHomePage;
  let fixture: ComponentFixture<PublicHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
