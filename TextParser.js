const fs = require('fs');

module.exports = class TextParser {

    static readFile(file) {
        const inputFileContent = fs.readFileSync(`./${file}`, {encoding: 'utf8', flag: 'r'});
        const data = inputFileContent.replace(/\n/g, ',');
        return data;
    }

    static breakString(str) {
        const virgPos = str.indexOf(',');
        const extractedName = str.slice(0, virgPos);
        const newStr = str.slice(virgPos+1);
        return { extractedName, newStr };
    }

    static mountArray(file) {
        const nameList = [];
        const originalData = this.readFile(file);
        var data = originalData;

        while( data.indexOf(',') >= 0 ) {
            let tmp = this.breakString(data);
            nameList.push( tmp.extractedName );
            data = tmp.newStr;
        }
        nameList.push( data );

        return nameList;
    }

}