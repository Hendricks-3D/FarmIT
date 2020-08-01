import { TestBed } from '@angular/core/testing';

import { IBMPushNotificationService } from './ibmpush-notification.service';

describe('IBMPushNotificationService', () => {
  let service: IBMPushNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IBMPushNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
