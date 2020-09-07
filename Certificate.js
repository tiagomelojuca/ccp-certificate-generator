const fs = require('fs');

module.exports = class Certificate {

    constructor(source, course, studentName, output) {
        this.sourceFile = source;
        this.outputFile = output;
        this.studentName = studentName;
        this.courseName = course.name;
        this.courseWorkload = course.workload;
        this.courseDate = course.date;
        this.courseModality = course.modality;
    }

    generate() {

        const sourceFileContent = fs.readFileSync(`./${this.sourceFile}`,{
            encoding: 'utf8',
            flag: 'r'
        });

        const newCertificate = sourceFileContent
            .replace('STUDENTNAME', this.studentName)
            .replace('COURSENAME', this.courseName)
            .replace('COURSEWORKLOAD', this.courseWorkload)
            .replace('COURSEDATE', this.courseDate)
            .replace('COURSEMODALITY', this.courseModality);

        if ( !fs.existsSync('./out') ) {
            fs.mkdir("./out", function(err) {
                if (err) {
                  console.log(err);
                  return;
                }
            })
        }
        fs.writeFileSync(`./out/${this.outputFile}.svg`, newCertificate);
        return;
        
    }

}