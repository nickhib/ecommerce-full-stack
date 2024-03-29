import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminService } from './admin.service';

describe('AdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], // Import HttpClientModule here
    providers: [AdminService]
  }));

  it('should be created', () => {
    const service: AdminService = TestBed.inject(AdminService);
    expect(service).toBeTruthy();
  });
});