/**
 * Created by keke on 2017/7/19.
 */

function checkEmail(str) {
    // console.log(str);
    var xmlhttp;

    if (str=="")
    {
        document.getElementById("iconHint").src = "";
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
            // console.log(str);
            console.log(str);
            // document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
            if(xmlhttp.responseText == "1") {
                document.getElementById("iconHint").src = "icon/no.png";
            } else {
                document.getElementById("iconHint").src = "icon/yes.png";
            }
        }
    }

    xmlhttp.open("POST","http://localhost/check_email.php",true);
    //必须在open之后send之前!!!
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // var formData = new FormData();
    // formData.append('q', str);
    // xmlhttp.send(formData);
    xmlhttp.send("q="+str);

}

