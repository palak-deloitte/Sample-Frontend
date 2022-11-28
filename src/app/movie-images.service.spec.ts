import { TestBed } from '@angular/core/testing';

import { MovieImagesService } from './movie-images.service';

describe('MovieImagesService', () => {
  let service: MovieImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
