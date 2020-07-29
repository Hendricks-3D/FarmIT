import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GardenDetailPage } from './garden-detail.page';

describe('GardenDetailPage', () => {
  let component: GardenDetailPage;
  let fixture: ComponentFixture<GardenDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardenDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GardenDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
