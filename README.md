# ccp-certificate-generator
A simple script I've made for personal use, to automatically generate all students' certificates based on a plain text list file. One of our customers make money with courses, so every month we have to generate 30+ certificates to him.

### Calling the API
Just create a new object parsing the SVG template, a text file containing the student list and a JSON with course information. For example, in `index.js`:

`const CertificateList = require('./CertificateList');`<br>
`const list = new CertificateList( 'SourceCertificate.svg', 'testList.txt', 'courseInfo.json' );`<br>
`list.build()`
<br><br>
Then, run:<br>
`node index.js`
<br>
<br>
### Output Files in PDF
Output certificates will be stored in `./out` folder, as SVG files. Since SVG template was made in `Inkscape`, the best choice for converting all files to pdf is using `svg2pdf`, which is an abstraction of `inkscape-cli` (make sure you've Inkscape installed and the binary is in your PATH).

`npm install -g svg2pdf`<br>
<br>
Then, just do the convertion according to your operating system. For example, in an UNIX environment:<br>
`cd out`<br>
`svg2pdf . .`<br>
`rm *.svg`<br>
<br>
That's all.