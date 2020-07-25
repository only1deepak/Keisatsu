import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicNOCPage } from './public-noc.page';

describe('PublicNOCPage', () => {
  let component: PublicNOCPage;
  let fixture: ComponentFixture<PublicNOCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicNOCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicNOCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
