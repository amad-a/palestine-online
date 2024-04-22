const { readFile } = require('fs').promises;
const fs = require('fs');
const ejs = require('ejs');

// Read the EJS template file
const templatePath = 'tour.ejs';
const mainPageTemplatePath = 'main.ejs';
const template = fs.readFileSync(templatePath, 'utf8');
const mainPageTemplate = fs.readFileSync(
  mainPageTemplatePath,
  'utf8'
);
// Output directory for HTML files
const outputDir = 'output/';

// Create the output directory if it doesn't exist
// if (!fs.existsSync(outputDir)) {
//   fs.mkdirSync(outputDir);
// }

async function readAndParseJSON() {
  try {
    const data = await readFile('pages-tour.json', 'utf8');
    const jsonObject = JSON.parse(data);

    const mainContent = ejs.render(mainPageTemplate, {
      data: jsonObject,
    });


    for (let idx = 1; idx < jsonObject.length - 1; idx++) {
      if (idx > 0 && idx < jsonObject.length - 1) {
        let id = jsonObject[idx].id;
        let title = jsonObject[idx].title;
        let label = jsonObject[idx].label;
        let waybackUrl = jsonObject[idx].waybackUrl;
        let url = jsonObject[idx].url;
        let description = jsonObject[idx].description;

        if (url.slice(0, 5) !== 'https') {
          url = '../' + url;
          
        } else {
          console.log(id, url);
        }

        let prevId = jsonObject[idx - 1]?.id || '../index';
        let nextId = jsonObject[idx + 1]?.id || '../index';
        let year = jsonObject[idx].year;

        // Render the template with the current object's data
        const htmlContent = ejs.render(template, {
          id: id,
          title: title,
          label: label,
          waybackUrl: waybackUrl,
          url: url,
          description: description,
          prevId: prevId,
          nextId: nextId,
          year: year,
        });

        // Generate a unique filename for each HTML file
        const filename = `tour/${id}.html`;

        // Write the HTML content to the file
        fs.writeFileSync(filename, htmlContent, 'utf8');

        // console.log(
        //   `HTML file "${filename}" generated successfully.`
        // );
      }
    }
    // console.log('Parsed JSON object:', jsonObject);
  } catch (error) {
    console.error('Error reading or parsing JSON:', error);
  }
}

readAndParseJSON();
