const fs = require('fs');
module.exports = class CourseParser {

    static readFile(fileName) {

        const inputFileContent = fs.readFileSync(`./${fileName}`, {
            encoding: 'utf8',
            flag: 'r'
        });

        const data = JSON.parse( inputFileContent );
        return data;

    }

}