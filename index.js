const CertificateList = require('./CertificateList');

const list = new CertificateList( 'SourceCertificate.svg', 'testList.txt', 'courseInfo.json' );
list.build();