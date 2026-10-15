export default async function run(page, ui) {
  const link = page.locator('.location-link');
  const box = await link.boundingBox();

  await link.hover();
  await page.waitForTimeout(300);

  const state = await page.evaluate(() => {
    const clone = document.querySelector('.location-link-clone');
    const imgContainer = document.querySelector('.location-image-container');
    const img = document.querySelector('.location-link-image');
    return {
      cloneOpacity: window.getComputedStyle(clone).opacity,
      containerOpacity: window.getComputedStyle(imgContainer).opacity,
      cloneClipPath: window.getComputedStyle(clone).clipPath || window.getComputedStyle(clone).webkitClipPath,
      containerTransform: imgContainer.style.transform,
      imageNaturalWidth: img ? img.naturalWidth : 0
    };
  });

  return { box, state };
}
