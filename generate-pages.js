const { readFile } = require('fs').promises;

async function readAndParseJSON() {
  try {
    const data = await readFile('pages.json', 'utf8');
    const jsonObject = JSON.parse(data);
    for (idx in jsonObject) {
      console.log(jsonObject[idx].id);
    }
    // console.log('Parsed JSON object:', jsonObject);
  } catch (error) {
    console.error('Error reading or parsing JSON:', error);
  }
}

readAndParseJSON();
