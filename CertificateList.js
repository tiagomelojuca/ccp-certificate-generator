const TextParser = require('./TextParser');
const CourseParser = require('./CourseParser');
const Certificate = require('./Certificate');

module.exports = class CertificateList {

    constructor( srcCertificateFile, studentListFile, courseInfoFile ) {
        this.srcCertificateFile = srcCertificateFile;
        this.studentListFile = studentListFile;
        this.courseInfoFile = courseInfoFile;
    }
    
    build() {

        const srcCertificateFile = this.srcCertificateFile;
        const studentList = TextParser.mountArray( this.studentListFile );
        const courseInfo = CourseParser.readFile( this.courseInfoFile );
        
        for( var i = 0; i < studentList.length; i++ ) {
            const nameLowerCase = studentList[i].replace(/ /g, '_').toLowerCase();
            const outfile = `cert-${nameLowerCase}`;
            const currentCert = new Certificate(srcCertificateFile, courseInfo, studentList[i], outfile);
            currentCert.generate();
            console.log(`${outfile} generated successfully as SVG! (${i+1} from ${studentList.length})`);
        }

    }

}