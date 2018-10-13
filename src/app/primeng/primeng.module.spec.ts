import { PrimengModule } from './primeng.module';

describe('PrimengModule', () => {
  let primengModule: PrimengModule;

  beforeEach(() => {
    primengModule = new PrimengModule();
  });

  it('should create an instance', () => {
    expect(primengModule).toBeTruthy();
  });
});
