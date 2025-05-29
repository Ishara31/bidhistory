const { test, expect } = require('@playwright/test');

test('hover to open popup and auto close after 5 seconds', async ({ page }) => {
  await page.goto('file://' + __dirname + '/auction.html');

  // Hover over first "View" button
  await page.hover('button.open-form-btn');

  const popup = page.locator('#popup');
  await expect(popup).toHaveClass(/show/);

  // Wait 5 seconds for auto close
  await page.waitForTimeout(5000);

  // Verify popup is closed automatically
  await expect(popup).not.toHaveClass(/show/);
});
