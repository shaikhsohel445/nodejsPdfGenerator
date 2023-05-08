const express = require('express');
const path = require('path');
//const app = express();
const puppeteer = require('puppeteer')
const { templateHtml }=require('./template/newTemplate.js')
const app = express();
//app.use(cors());
app.use(express.json());



app.listen(3001, () => {
  console.log(`Server Started at ${3001}`);
});

app.get('/pdf', async (req, res) => {
   

//     // async function printPDF() {
//         const browser = await puppeteer.launch({ headless: false });
//         const page = await browser.newPage();
//        // await page.goto('https://blog.risingstack.com', { waitUntil: 'networkidle0' });
//         await page.goto(__dirname + '/template/renderhtml.js' );
//        //const pdf = await page.pdf({ format: 'A4' });
// //res.sendFile(__dirname + '/public/index.html');
//         // await browser.close();
//         // return pdf
   // }

async function printPDF() {

console.log('... launching browser ...');

	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox'],
		timeout: 0,
	});

	console.log('... generating previews ...');
	const page = await browser.newPage();
	await page.setContent(templateHtml);
    const pdf = await page.pdf({ format: 'A4',   printBackground: true});
    await browser.close();
    return pdf
    console.log('gotpdf');
    //res.send('pdf')
}

printPDF().then(pdf => {
	res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
	res.setHeader("Content-Disposition", `attachment; filename=invoice_${Date.now()}.pdf`);
	res.send(pdf)
})




});

module.exports = app;
