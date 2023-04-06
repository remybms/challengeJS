function counter() {
    var fs = require('fs');
    fs.readdir('/magasins', function (error, files) {
        var totalFiles = files.length; // return the number of files
        console.log(totalFiles); // print the total number of files 
    })
}
export default counter