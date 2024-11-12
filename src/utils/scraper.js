const puppeteer = require('puppeteer')
const fs = require('fs')

const scraper = async (url) => {
  // Launch browser in headless mode
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(url)
  await page.setViewport({ width: 1080, height: 1024 })

  // Initialize the data array
  const data = []

  const scrapeCurrentPage = async () => {
    // Extract data from the current page
    const arrayDivs = await page.$$('.col-lg-3.col-md-4.col-sm-6.pdr10')

    for (const funkoDiv of arrayDivs) {
      try {
        const img = await funkoDiv.$eval(
          '.attachment-woocommerce_thumbnail.size-woocommerce_thumbnail',
          (el) => el.src
        )
        const name = await funkoDiv.$eval('.title', (el) =>
          el.textContent.trim()
        )
        const priceText = await funkoDiv.$eval('.prices', (el) =>
          el.textContent.trim()
        )
        const price = parseFloat(
          priceText.replace(/[^\d,.-]/g, '').replace(',', '.')
        )

        const funko = { img, name, price }
        data.push(funko)
      } catch (err) {
        console.error('Error extracting Funko data:', err)
      }
    }
  }

  let hasMorePages = true

  while (hasMorePages) {
    // Scrape data from the current page
    await scrapeCurrentPage()

    // Try to find and click the "Show More" button to load the next page
    try {
      const showMoreBtn = await page.$('.next.page-numbers')
      if (showMoreBtn) {
        await Promise.all([
          showMoreBtn.click(),
          page.waitForNavigation({ waitUntil: 'networkidle2' })
        ])
      } else {
        hasMorePages = false
      }
    } catch (error) {
      console.error('No more pages to load or error clicking button:', error)
      hasMorePages = false
    }
  }

  // Save scraped data to JSON file
  try {
    fs.writeFileSync('./funkos.json', JSON.stringify(data, null, 2))
    console.log('Funko collection saved to funkos.json 📚')
  } catch (err) {
    console.error('Error writing JSON file:', err)
  }

  // Close the browser
  await browser.close()
  console.log('Scraping completed 🚀')
}

module.exports = { scraper }
