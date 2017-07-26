if(typeof FileReader == "undified") {
    alert("Fail！");
}
// function showDataByURL() {
//     var resultFile = document.getElementById("selectFile").files[0];
//     if (resultFile) {
//         var reader = new FileReader();
//         reader.readAsDataURL(resultFile);
//         reader.onload = function (e) {
//             var urlData = this.result;
//             document.getElementById("result").innerHTML += "<img src='" + urlData + "' alt='" + resultFile.name + "' />";
//         };
//
//     }
// }
// function showDataByBinaryString() {
//     var resultFile = document.getElementById("selectFile").files[0];
//     if (resultFile) {
//         var reader = new FileReader();
//         //异步方式，不会影响主线程
//         reader.readAsBinaryString(resultFile);
//
//         reader.onload = function(e) {
//             var urlData = this.result;
//             document.getElementById("result").innerHTML += urlData;
//         };
//     }
// }
function showDataByText() {
    var resultFile = document.getElementById("selectFile").files[0];
    if (resultFile) {
        var reader = new FileReader();

        reader.readAsText(resultFile,'UTF-8');
        reader.onload = function (e) {
            var urlData = this.result;
            document.getElementById("content").value = urlData;
        };
    }
}
function showTitle() {
    document.getElementById("selectFile").title;
}

function update() {
    var title = document.getElementById("title").value;

    var file = document.getElementById("selectFile");

    var path = file.value;

    var pos1 = path.lastIndexOf('\\');
    var pos2 = path.lastIndexOf('.md');
    // var pos = Math.max(pos1, pos2)
    path = path.substring(pos1+1,pos2);

    if(title=="") {

        document.getElementById("title").value = path;

    }
    showDataByText();
}

