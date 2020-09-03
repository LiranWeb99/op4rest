//checking

function vhEqualTo(num) {
    return(window.screen.availHeight*1/100)*num;
}

function toPxAll (idElement) {
    //Element Data (in pixels)
    let elementWidth = document.getElementById(idElement).clientWidth;
    let elementHeight = document.getElementById(idElement).clientHeight;
    let elementPosition = document.getElementById(idElement).getBoundingClientRect();    

    //Window Data (in Pixels)
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    

    //Viewports of element
    let elementVw = 100*elementWidth/windowWidth;
    let elementVh = 100*elementHeight/windowHeight;


    //Screen Data (in Pixels) Include bar
    let screenWidth = screen.width;
    let screenHeight = screen.height;

    //Final height - full sized
    let finalHeight = window.screen.availHeight - (window.outerHeight-window.innerHeight);

    //Pure Window Full size
    //screen , window current size, 

    document.getElementById(idElement).style.width = screenWidth*elementVw/100 + "px";
    document.getElementById(idElement).style.height = (finalHeight*elementVh/100) + "px";

    //top and left in viewports
    let topElement = elementPosition.top*100/windowHeight;
    let leftElement = elementPosition.left*100/windowWidth;
    leftElement= leftElement*window.screen.availWidth/100;
    topElement= topElement*window.screen.availHeight/100;
        
    //Final Position for elements
    document.getElementById(idElement).style.left = leftElement + "px";
    document.getElementById(idElement).style.top = topElement + "px";
}




function toPxPosition (idElement) {
    //Element Data (in pixels)
    let elementWidth = document.getElementById(idElement).clientWidth;
    let elementHeight = document.getElementById(idElement).clientHeight;
    let elementPosition = document.getElementById(idElement).getBoundingClientRect();    

    //Window Data (in Pixels)
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    

    //Viewports of element
    let elementVw = 100*elementWidth/windowWidth;
    let elementVh = 100*elementHeight/windowHeight;


    //Screen Data (in Pixels) Include bar
    let screenWidth = screen.width;
    let screenHeight = screen.height;

    //Final height - full sized
    let finalHeight = window.screen.availHeight - (window.outerHeight-window.innerHeight);

    //Pure Window Full size
    //screen , window current size, 

    //top and left in viewports
    let topElement = document.getElementById(idElement).offsetTop*100/windowHeight;
    let leftElement = elementPosition.left*100/windowWidth;
    leftElement= leftElement*window.screen.availWidth/100;
    topElement= topElement*window.screen.availHeight/100;
        
    //Final Position for elements
    document.getElementById(idElement).style.left = leftElement + "px";
    document.getElementById(idElement).style.top = topElement + "px";
}

function toPxTop (idElement) {
    //Element Data (in pixels)
    let elementWidth = document.getElementById(idElement).clientWidth;
    let elementHeight = document.getElementById(idElement).clientHeight;
    let elementPosition = document.getElementById(idElement).getBoundingClientRect();    

    //Window Data (in Pixels)
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    

    //Viewports of element
    let elementVw = 100*elementWidth/windowWidth;
    let elementVh = 100*elementHeight/windowHeight;


    //Screen Data (in Pixels) Include bar
    let screenWidth = screen.width;
    let screenHeight = screen.height;

    //Final height - full sized
    let finalHeight = window.screen.availHeight - (window.outerHeight-window.innerHeight);

    //Pure Window Full size
    //screen , window current size, 

    //document.getElementById(idElement).style.width = screenWidth*elementVw/100 + "px";
    //document.getElementById(idElement).style.height = (finalHeight*elementVh/100) + "px";

    //top and left in viewports
    let topElement = document.getElementById(idElement).offsetTop*100/windowHeight;
    topElement= topElement*window.screen.availHeight/100;
 
    //Final Position for elements
    //document.getElementById(idElement).style.left = leftElement + "px";
    document.getElementById(idElement).style.top = (topElement) + "px";
}

function toPxLeft (idElement) {
    //Element Data (in pixels)
    let elementWidth = document.getElementById(idElement).clientWidth;
    let elementHeight = document.getElementById(idElement).clientHeight;
    let elementPosition = document.getElementById(idElement).getBoundingClientRect();    

    //Window Data (in Pixels)
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    

    //Viewports of element
    let elementVw = 100*elementWidth/windowWidth;
    let elementVh = 100*elementHeight/windowHeight;


    //Screen Data (in Pixels) Include bar
    let screenWidth = screen.width;
    let screenHeight = screen.height;

    //Final height - full sized
    let finalHeight = window.screen.availHeight - (window.outerHeight-window.innerHeight);

    //Pure Window Full size
    //screen , window current size, 

    //document.getElementById(idElement).style.width = screenWidth*elementVw/100 + "px";
    //document.getElementById(idElement).style.height = (finalHeight*elementVh/100) + "px";

    //top and left in viewports
    let topElement = elementPosition.top*100/windowHeight;
    let leftElement = elementPosition.left*100/windowWidth;
    leftElement= leftElement*window.screen.availWidth/100;
    //topElement= topElement*window.screen.availHeight/100;
    //Final Position for elements
    document.getElementById(idElement).style.left = leftElement + "px";
    //document.getElementById(idElement).style.top = topElement + "px";
}




function toPxHeight (idElement) {
    //Element Data (in pixels)
    let elementWidth = document.getElementById(idElement).clientWidth;
    let elementHeight = document.getElementById(idElement).clientHeight;
    let elementPosition = document.getElementById(idElement).getBoundingClientRect();    

    //Window Data (in Pixels)
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    

    //Viewports of element
    let elementVw = 100*elementWidth/windowWidth;
    let elementVh = 100*elementHeight/windowHeight;


    //Screen Data (in Pixels) Include bar
    let screenWidth = screen.width;
    let screenHeight = screen.height;

    //Final height - full sized
    let finalHeight = window.screen.availHeight - (window.outerHeight-window.innerHeight);

    //Pure Window Full size
    //screen , window current size, 

    //document.getElementById(idElement).style.width = screenWidth*elementVw/100 + "px";
    document.getElementById(idElement).style.height = (finalHeight*elementVh/100) + "px";

    //top and left in viewports
    let topElement = elementPosition.top*100/windowHeight;
    let leftElement = elementPosition.left*100/windowWidth;
    leftElement= leftElement*window.screen.availWidth/100;
    topElement= topElement*window.screen.availHeight/100;
        
    //Final Position for elements
    //document.getElementById(idElement).style.left = leftElement + "px";
    //document.getElementById(idElement).style.top = topElement + "px";
}

function toPxWidh (idElement) {
    //Element Data (in pixels)
    let elementWidth = document.getElementById(idElement).clientWidth;
    let elementHeight = document.getElementById(idElement).clientHeight;
    let elementPosition = document.getElementById(idElement).getBoundingClientRect();    

    //Window Data (in Pixels)
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    

    //Viewports of element
    let elementVw = 100*elementWidth/windowWidth;
    let elementVh = 100*elementHeight/windowHeight;


    //Screen Data (in Pixels) Include bar
    let screenWidth = screen.width;
    let screenHeight = screen.height;

    //Final height - full sized
    let finalHeight = window.screen.availHeight - (window.outerHeight-window.innerHeight);

    //Pure Window Full size
    //screen , window current size, 

    document.getElementById(idElement).style.width = screenWidth*elementVw/100 + "px";
    //document.getElementById(idElement).style.height = (finalHeight*elementVh/100) + "px";

    //top and left in viewports
    let topElement = elementPosition.top*100/windowHeight;
    let leftElement = elementPosition.left*100/windowWidth;
    leftElement= leftElement*window.screen.availWidth/100;
    topElement= topElement*window.screen.availHeight/100;
        
    //Final Position for elements
    //document.getElementById(idElement).style.left = leftElement + "px";
    //document.getElementById(idElement).style.top = topElement + "px";
}



function toPxSize (idElement) {
        //Element Data (in pixels)
        let elementWidth = document.getElementById(idElement).clientWidth;
        let elementHeight = document.getElementById(idElement).clientHeight;
        let elementPosition = document.getElementById(idElement).getBoundingClientRect();    
    
        //Window Data (in Pixels)
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        
    
        //Viewports of element
        let elementVw = 100*elementWidth/windowWidth;
        let elementVh = 100*elementHeight/windowHeight;
    
    
        //Screen Data (in Pixels) Include bar
        let screenWidth = screen.width;
        let screenHeight = screen.height;
    
        //Final height - full sized
        let finalHeight = window.screen.availHeight - (window.outerHeight-window.innerHeight);
    
        //Pure Window Full size
        //screen , window current size, 
    
        document.getElementById(idElement).style.width = screenWidth*elementVw/100 + "px";
        document.getElementById(idElement).style.height = (finalHeight*elementVh/100) + "px";
}


function toPXFont (idElement) {
    let size = window.getComputedStyle(document.getElementById(idElement)).fontSize;
    let screenWidth = window.innerWidth;
    size = parseFloat(size.replace("px", ''));
    detectVw = size*100/screenWidth;
    let finalFontSize = detectVw*window.screen.availWidth/100;
    document.getElementById(idElement).style.fontSize = finalFontSize + "px";
}



//resized - overflow Dealing
window.addEventListener("resize",function(){
    if(window.screen.availWidth!=window.innerWidth)
    {
        document.getElementsByTagName("body")[0].style.overflowX = "visible";
    }

    else {
        document.getElementsByTagName("body")[0].style.overflowX = "hidden";
    }
});
window.addEventListener("load",function(){
    if(window.screen.availWidth!=window.innerWidth)
    {
        document.getElementsByTagName("body")[0].style.overflowX = "visible";
        document.getElementById("send").style.marginTop = (window.screen.availHeight*1/100)*5 - 15 + "px";
        document.getElementById("formHeaders").style.left = document.getElementById("formHeaders").offsetLeft + 10 + "px";
        document.getElementById("massage").style.height = document.getElementById("massage").offsetHeight + 0.0125 + "px";
    }

    else {
        document.getElementsByTagName("body")[0].style.overflowX = "hidden";
    }
});

//Normalize Size//

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    }

    else {
        document.getElementById("mobile").remove();
//header
toPXFont("firstHeader");
toPxSize("firstLogo");
toPxPosition("firstHeader");
toPxPosition("firstPhone");
toPXFont("logoSub");
toPxPosition("logoSub");
toPxPosition("firstLogo");
toPxSize("firstPhone");

//main
toPXFont("robotText");
toPxPosition("flexCircles");
toPxSize("robotPicture");
toPXFont("d1");
toPXFont("d2");
toPXFont("d3");
toPXFont("d4");
toPXFont("d5");
toPXFont("d6");
toPXFont("a1");
toPXFont("a2");
toPXFont("a3");

//footer
toPxPosition("aboveLastPhone");
toPxSize("aboveLastPhone");
toPxSize("underLastPhone");
toPxSize("lastPhone");
document.getElementById("aboveLastPhone").style.transform = "rotate(390deg)";
document.getElementById("underLastPhone").style.transform = "rotate(355deg)";
toPxPosition("lastPhone");
toPxPosition("underLastPhone");
toPXFont("intrested");
toPxPosition("intrested");
toPXFont("intrestedText");
toPxPosition("intrestedText");
//////////////////////////////////
toPXFont("h3Form");
toPXFont("h4Form");
toPxTop("formHeaders");
toPxTop("form");
toPxSize("form");
toPxSize("fullName");
toPxSize("phone");
toPxSize("email");
toPxSize("massage");
toPxSize("send");
toPxLeft("secondLogo");
document.getElementById("secondLogo").style.transform="translateX(-52%)";
toPXFont("massage");
toPXFont("fullName");
toPXFont("phone");
toPXFont("email");
toPXFont("send");
toPxLeft("form");
toPxSize("orangeCircle");
toPxTop("orangeCircle");
if(window.screen.availWidth-window.innerWidth!=0)
{
    toPxLeft("orangeCircle");
    let d = window.screen.availWidth-window.innerWidth;
    if(d*100/window.screen.availWidth<50)
    {
        document.getElementById("orangeCircle").style.left = document.getElementById("orangeCircle").offsetLeft - d/50 + "px";
    }
    if(d*100/window.screen.availWidth>50)
    {
        document.getElementById("orangeCircle").style.left = document.getElementById("orangeCircle").offsetLeft - d/40 + "px";
    }
    if(d*100/window.screen.availWidth>60)
    {
        document.getElementById("orangeCircle").style.left = document.getElementById("orangeCircle").offsetLeft - d/100 + "px";
    }
}
else {
    toPxLeft("orangeCircle");
}
document.getElementById("form").style.transform="none";
document.getElementById("form").style.bottom = (18*210/100)*window.screen.availHeight/210 + "px";
document.getElementById("massage").style.marginTop = (window.screen.availHeight*1/100)*0.9 + "px";
document.getElementById("send").style.marginTop = (window.screen.availHeight*1/100)*5 + "px";
//form - add to left the scroll that created


//container layers
toPxSize("header");
toPxSize("main");
toPxSize("footer");   
}



//alert(window.screen.availWidth-window.innerWidth);