setTimeout(() => {
    //Validations----------------------------------------------------------------------//Validations
let mail = document.getElementById("email");
document.getElementById("send").onclick = function () {

    if (window.innerWidth>768)
    {
        if(document.getElementById("fullName").value.length>0 && document.getElementById("phone").value.length>0)
        {
            if (mail.required)
            {
                if(mail.indexof("@")>0 && mail.indexof(".")>0)
                {
                    let submmited = document.createElement("p");
                    submmited.innerText = "נשלח בהצלחה";
                    submmited.style.color = "#080a41";   
                    submmited.style.fontFamily = `Heebo`;   
                    submmited.style.fontSize = "1.3vw";
                    submmited.style.position = "absolute";
                    submmited.style.bottom = "15vh";
                    submmited.style.left = "50vw";
                    submmited.style.fontWeight = "bold";
                    submmited.style.transform =  "translateX(-50%)";
                    document.getElementsByTagName("footer")[0].appendChild(submmited);
                
                    setTimeout(() => {
                        $(".empty").val("");
                        //$("textarea").val("");
                    }, 10);
                }

                else {

                }
            }

            else {
                let submmited = document.createElement("p");
                submmited.innerText = "נשלח בהצלחה";
                submmited.style.color = "#080a41";   
                submmited.style.fontFamily = `Heebo`;   
                submmited.style.fontSize = "1.3vw";
                submmited.style.position = "absolute";
                submmited.style.bottom = "15vh";
                submmited.style.left = "50vw";
                submmited.style.fontWeight = "bold";
                submmited.style.transform =  "translateX(-50%)";
                document.getElementsByTagName("footer")[0].appendChild(submmited);
            
                setTimeout(() => {
                    $(".empty").val("");
                    //$("textarea").val("");
                }, 10);
            }
        }
    }












    //phones
    else {
        if(document.getElementById("fullName").value.length>0 && document.getElementById("phone").value.length>0)
        {
            if (mail.required)
            {
                if(mail.indexof("@")>0 && mail.indexof(".")>0)
                {
                    document.getElementById("send").style.visibility="hidden";
                    let submmited = document.createElement("p");
                    submmited.innerText = "נשלח בהצלחה";
                    submmited.style.color = "#080a41";   
                    submmited.style.fontFamily = `Heebo`;   
                    submmited.style.fontSize = "6vw";
                    submmited.style.position = "absolute";
                    submmited.style.bottom = "20vh";
                    submmited.style.left = "50vw";
                    submmited.style.fontWeight = "bold";
                    submmited.style.transform =  "translateX(-50%)";
                    document.getElementsByTagName("footer")[0].appendChild(submmited);
                
                    setTimeout(() => {
                        $(".empty").val("");
                        //$("textarea").val("");
                    }, 10);
                }

                else {

                }
            }

            else {
                document.getElementById("send").style.visibility="hidden";
                let submmited = document.createElement("p");
                submmited.innerText = "נשלח בהצלחה";
                submmited.style.color = "#080a41";   
                submmited.style.fontFamily = `Heebo`;   
                submmited.style.fontSize = "6vw";
                submmited.style.position = "absolute";
                submmited.style.bottom = "20vh";
                submmited.style.left = "50vw";
                submmited.style.fontWeight = "bold";
                submmited.style.transform =  "translateX(-50%)";
                document.getElementsByTagName("footer")[0].appendChild(submmited);
            
                setTimeout(() => {
                    $(".empty").val("");
                    //$("textarea").val("");
                }, 10);
            }
        }
    }
}

mail.addEventListener("input",function(e){
    if(mail.value.length!=0)
    {
        mail.setAttribute("required","true");
    }

    else {
        mail.removeAttribute("required","false");
    }

});


///text with mail
$("#form").submit(function(event) {
    if(window.innerWidth< 768)
    {
        submitPhone();
    }
    else {
        submitPc();
    }
    
});





function submitPhone() {
    document.getElementById("send").style.visibility="hidden";
    let submmited = document.createElement("p");
    submmited.innerText = "נשלח בהצלחה";
    submmited.style.color = "#080a41";   
    submmited.style.fontFamily = `Heebo`;   
    submmited.style.fontSize = "6vw";
    submmited.style.position = "absolute";
    submmited.style.bottom = "20vh";
    submmited.style.left = "50vw";
    submmited.style.fontWeight = "bold";
    submmited.style.transform =  "translateX(-50%)";
    document.getElementsByTagName("footer")[0].appendChild(submmited);

    setTimeout(() => {
        $(".empty").val("");
        //$("textarea").val("");
    }, 10);
}

function submitPc() {
    let submmited = document.createElement("p");
    submmited.innerText = "נשלח בהצלחה";
    submmited.style.color = "#080a41";   
    submmited.style.fontFamily = `Heebo`;   
    submmited.style.fontSize = "1.3vw";
    submmited.style.position = "absolute";
    submmited.style.bottom = "15vh";
    submmited.style.left = "50vw";
    submmited.style.fontWeight = "bold";
    submmited.style.transform =  "translateX(-50%)";
    document.getElementsByTagName("footer")[0].appendChild(submmited);

    setTimeout(() => {
        $(".empty").val("");
        //$("textarea").val("");
    }, 10);
}

//phone
$('#phone').on('keyup', function() {
      // Remove invalid characters
  var sanitized = $(this).val().replace(/[^0-9]/g, '');
  // Update value
  $(this).val(sanitized);
});
//Validations----------------------------------------------------------------------//Validations




//DealingAndroidKeyboardChrome------------------------------------------------------------//DealingAndroidKeyboardChrome
let userAgent = navigator.userAgent || navigator.vendor || window.opera;
let phoneState;
let oriantedKeyboard = document.createElement("link");
oriantedKeyboard.setAttribute("rel","stylesheet");
oriantedKeyboard.setAttribute("href","orin.css");
oriantedKeyboard.setAttribute("id","lol");
let landscapeKeyboard = document.createElement("link");
landscapeKeyboard.setAttribute("rel","stylesheet");
landscapeKeyboard.setAttribute("href","oriantedKey3.css");
landscapeKeyboard.setAttribute("id","lol2");
let ua = navigator.userAgent.toLowerCase();
let isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

let iosOrianted = document.createElement("link");
iosOrianted.setAttribute("rel","stylesheet");
iosOrianted.setAttribute("href","orinIos.css");
iosOrianted.setAttribute("id","lol3");
let iosLandscape = document.createElement("link");
iosLandscape.setAttribute("rel","stylesheet");
iosLandscape.setAttribute("href","lnadIos.css");
iosLandscape.setAttribute("id","lol4");

if(window.innerHeight>window.innerWidth)
{
        phoneState="orianted"; //Now phone is orianted

}
else{
        phoneState="landscape"; //Now phone is Landscape
}


//firstsetup of css for keybaord
if(navigator.userAgent.indexOf("Chrome") != -1) 
{
    if(isAndroid) {  
        if(phoneState=="orianted")
        {
            //give it css for orianted
            setTimeout(() => {
                document.getElementsByTagName("head")[0].appendChild(oriantedKeyboard);
            }, 1);
        }
    
        else { //phonestate == "landscape"
           //give it css for landscape
           setTimeout(() => {
            document.getElementsByTagName("head")[0].appendChild(landscapeKeyboard);
           }, 1);
        }
    }
}

if (userAgent.match(/iPhone/i)) {
    if(phoneState=="orianted")
    {
        //give it css for orianted
        setTimeout(() => {
            document.getElementsByTagName("head")[0].appendChild(iosOrianted);
        }, 1);
    }

    else { //phonestate == "landscape"
       //give it css for landscape
       setTimeout(() => {
        document.getElementsByTagName("head")[0].appendChild(iosLandscape);
       }, 1);
    }
 }

//Detect Phone Mode and changes with that
window.addEventListener("orientationchange", function(){
    if(navigator.userAgent.indexOf("Chrome") != -1) 
{
    if(isAndroid) { 
        if(phoneState=="orianted") //The view is now gonna be landscape
        {
            phoneState="landscape";
            $("#lol").remove() //remove orianted style / it works - cheked
                document.getElementsByTagName("head")[0].appendChild(landscapeKeyboard)//only keep first mode, when orianted style not take over
        }
    
        else { //the view is now gonna be orianted
            phoneState="orianted";
            $("#lol2").remove() //remove landscape style // it works - cheked
                document.getElementsByTagName("head")[0].appendChild(oriantedKeyboard); //only keep first mode, when orianted style not take over
        }
    }
}

if (userAgent.match(/iPhone/i)) {
    if(phoneState=="orianted") //The view is now gonna be landscape
    {
        phoneState="landscape";
        $("#lol3").remove() //remove orianted style / it works - cheked
            document.getElementsByTagName("head")[0].appendChild(iosLandscape)//only keep first mode, when orianted style not take over
    }

    else { //the view is now gonna be orianted
        phoneState="orianted";
        $("#lol4").remove() //remove landscape style // it works - cheked
            document.getElementsByTagName("head")[0].appendChild(iosOrianted); //only keep first mode, when orianted style not take over
    }
}

});
//DealingAndroidKeyboardChrome------------------------------------------------------------//DealingAndroidKeyboardChrome



/*
let mq = window.matchMedia( "(max-height: 400px)" );
if (mq.matches) {
    alert("ds");
}
else {
    // window width is greater than 570px
}
 */
}, 1);



