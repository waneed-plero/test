import Comp from '../src/comp';

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('touch-me'))).toBeVisible();
  });
});