/**
 * Created by keke on 2017/7/20.
 */


function sendComment() {
    var str = document.getElementById("textArea").value;
    console.log(str);
    var xmlhttp;

    if (str=="")
    {
        document.getElementById("textHint").src = "";
        return;
    }
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
            document.getElementById("textHint").innerHTML=xmlhttp.responseText;
        }
    }

    xmlhttp.open("POST","http://localhost/send_comment.php",true);
    //必须在open之后send之前!!!
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // var formData = new FormData();
    // formData.append('q', str);
    // xmlhttp.send(formData);
    xmlhttp.send("q="+str);

}

