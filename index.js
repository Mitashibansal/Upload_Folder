
document.getElementById("folder").addEventListener("change", function (event) {
    var files = event.target.files;
    function formatSizeUnits(bytes) {
        if (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
        else if (bytes >= 1048576) { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
        else if (bytes >= 1024) { bytes = (bytes / 1024).toFixed(2) + " KB"; }
        else if (bytes > 1) { bytes = bytes + " bytes"; }
        else if (bytes == 1) { bytes = bytes + " byte"; }
        else { bytes = "0 bytes"; }
        return bytes;
    }
    
    for (var i = 0; i < files.length; i++) {

        var table = document.getElementById('POITable').insertRow(1);
        var columnOne = table.insertCell(0);
        var columnTwo = table.insertCell(1);
        columnOne.innerHTML = files[i].webkitRelativePath;
        columnTwo.innerHTML = formatSizeUnits(files[i].size);

    };
    document.getElementById("choosefolder").style.display='none';
    document.getElementById("mydiv").style.display='block';
}, false);