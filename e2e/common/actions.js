/* eslint-disable no-undef */
export const clickAddButton = async (screen) => {
  const buttonId = by.id(`${screen}.add-button`);
  await expect(element(buttonId)).toBeVisible();
  await element(buttonId).tap();
};
