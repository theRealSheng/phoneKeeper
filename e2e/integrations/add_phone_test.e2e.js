/* eslint-disable no-undef */

import {clickAddButton, typeInput} from '../common/actions';

describe('Add phone', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('Should go to add phone screen', async () => {
    await waitFor(element(by.id('main_screen.add-button'))).toBeVisible();
    await clickAddButton('main_screen');
  });

  it('Shoul fill the form', async () => {
    const nameTarget = element(by.id('name-input'));
    const manufactureTarget = element(by.id('manufacturer-input'));
    const descriptionTarget = element(by.id('description-input'));
    const colorTarget = element(by.id('color-input'));
    const priceTarget = element(by.id('price-input'));
    const screenTarget = element(by.id('screen-input'));
    const processorTarget = element(by.id('processor-input'));

    await typeInput(nameTarget, 'iPhone X \n');
    await typeInput(manufactureTarget, 'Apple \n');
    await typeInput(descriptionTarget, 'Cool Iphone \n');
    await typeInput(colorTarget, 'Red \n');
    await typeInput(priceTarget, '700 \n');
    await typeInput(screenTarget, '4.7 inch \n');
    await typeInput(processorTarget, '2GB \n');
  });
});
