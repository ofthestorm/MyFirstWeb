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
            document.getElementById("content").value += urlData;
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
    showDataByText()
}

function publish() {
    //     id int,
    //     title varchar(50),
    //     content text,
    //     create_time datetime,
    //     blogger_id int,
    var content = document.getElementById("content").value;
    var title = document.getElementById("title").value;

    var xmlhttp;

    // if (str=="")
    // {
    //     document.getElementById("textHint").src = "";
    //     return;
    // }
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            // document.getElementById("textHint").innerHTML=xmlhttp.responseText;
        }
    }

    xmlhttp.open("POST","http://localhost/publish.php",true);
    //必须在open之后send之前!!!
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // var formData = new FormData();
    // formData.append('q', str);
    // xmlhttp.send(formData);
    xmlhttp.send("content="+content+"&title="+title);
}