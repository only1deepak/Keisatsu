import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminMainPage } from './admin-main.page';

describe('AdminMainPage', () => {
  let component: AdminMainPage;
  let fixture: ComponentFixture<AdminMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
