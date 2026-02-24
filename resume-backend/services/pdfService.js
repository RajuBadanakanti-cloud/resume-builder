// import puppeteer from "puppeteer"; // local
import puppeteer from "puppeteer-core" // production
import chromium from "@sparticuz/chromium" // production

import { loadTailwindCSS } from "../utils/loadCss.js"
import { pageTemplate} from "../utils/pageTemplate.js";

export const generateMultipagePDF = async (html) => {
  const browser = await puppeteer.launch({
    // ---------
    args: [...chromium.args, "--no-sandbox"],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    // above all production
    headless: chromium.headless,

  })

  const page = await browser.newPage() 
  const css = loadTailwindCSS()

  await page.setContent(pageTemplate(html, css), {
    waitUntil:"networkidle0"
  })

  const pdf = await page.pdf({
    format:"A4",
    printBackground:true
  })

  await browser.close()
  return pdf


}


/*
export const generateMultiPagePDF = async (html) => {
      // create browser 
      const browser = await puppeteer.launch({
        headless:"new"
      })

      // create page 
      const page = await browser.newPage();

      // load css 
      const css = loadTailwindCSS();

      // set page content 
      await page.setContent(pageTemplate(html, css),{
        waitUntil:"networkidle0"
      })

      // create pdf 
      const pdf = await page.pdf({
        format:"A4",
        printBackground:true
      })

      await browser.close()
      return pdf;

} */
