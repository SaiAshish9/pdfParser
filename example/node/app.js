// let fs = require('fs'),
//     PDFParser = require("pdf2json");
const root = __dirname + '/../../';

const StringifyStream=require('stringifystream')
//
// let pdfParser = new PDFParser();
//
// pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
// pdfParser.on("pdfParser_dataReady", pdfData => {
//     fs.writeFile(root+'files/test1.json', JSON.stringify(pdfParser.getAllFieldsTypes()));
// });
//
// pdfParser.loadPDF(root+'files/test.pdf');
let fs = require('fs'),
       PDFParser = require("pdf2json");

   let inputStream = fs.createReadStream(root+'files/test.pdf', {bufferSize: 64 * 1024});
   let outputStream = fs.createWriteStream(root+'files/test1.json');

   inputStream.pipe(new PDFParser()).pipe(new StringifyStream()).pipe(outputStream);
