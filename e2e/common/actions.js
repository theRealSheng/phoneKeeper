/* eslint-disable no-undef */
export const clickAddButton = async (screen) => {
  const buttonId = by.id(`${screen}.add-button`);
  await expect(element(buttonId)).toBeVisible();
  await element(buttonId).tap();
};

export const typeInput = async (target, text) => {
  await waitFor(target).toBeVisible();
  await target.tap();
  await target.typeText(text);
};
