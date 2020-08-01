import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCropToMarketPage } from './add-crop-to-market.page';

describe('AddCropToMarketPage', () => {
  let component: AddCropToMarketPage;
  let fixture: ComponentFixture<AddCropToMarketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCropToMarketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCropToMarketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
