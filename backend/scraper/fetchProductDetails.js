const puppeteer = require('puppeteer');

const fetchProductDetails = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  // Scrape product details
  const productDetails = await page.evaluate(() => {
    const title = document.querySelector('._35KyD6').innerText;
    const price = document.querySelector('._1vC4OE._3qQ9m1').innerText.replace(/[^0-9]/g, '');
    const description = document.querySelector('._3la3Fn._1zZOAc').innerText;
    const reviews = document.querySelector('._38sUEc span').innerText;
    const totalPurchases = document.querySelector('._1VPdXc').innerText;
    
    return {
      title,
      price: parseInt(price),
      description,
      reviews,
      totalPurchases
    };
  });

  await browser.close();
  return productDetails;
};

module.exports = fetchProductDetails;
