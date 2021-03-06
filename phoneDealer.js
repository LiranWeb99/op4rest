if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    document.getElementsByTagName("html")[0].innerHTML = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>יועץ קולינארי בעל בינה מלאכותית OP אפליקציית</title>
    <link rel="icon" href="./headerPictures/logoLeft.png">
    <meta name="keywords" content="אפליקציה, תפריט מסעדה דיגטלי, אפליקציה חכמה, תפריט חכם, יועץ קולינרי, אפליקציה לסועדים, אפליקציית מסעדות, אפליקציה למסעדן, חסכון בעלויות למסעדה, הזמנת מנות חכמה, תשלום חכם, צמצום החזרי מנות, הגדלת מכירות, סריקת תפריט">
    <meta name="description" content="בעלת בינה מלאכותית, ממליצה לסועד במסעדה על מנות לפי העדפות טעם אישית ובאמצעותה ניתן להזמין ולשלם במסעדה ללא כל המתנה למלצר. הפלטפורמה משמשת למסעדנים ולסועדים OP אפליקצית">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="mobile1.css">
    <!--Styles Subs-->
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@500&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
    <div id="overflowPhone">
    <header>
        <a href="#robotPicture"><div id="buttonPhone"></div></a>
        <img id="firstLogo" src="./headerPictures/logoLeft.png" alt="לוגו">
        <p id="logoSub">Order & Pay</p>

        <div id="icons">
            <img src="./headerPictures/phoneIcon.png" alt="טלפון">
            <img src="./headerPictures/linkedinIcon.png" alt="לינקדאין">
            <img src="./headerPictures/facebookIcon.png" alt="פייסבוק">
        </div>

        <h1 id="firstHeader"> <span class="breakFirstHeader">היועץ OP שלום אני</span> <span class="breakFirstHeader">הקולינארי האישי שלך</span> </h1>
        <img id="firstPhone" src="./headerPictures/firstPhone.png" alt="מכשיר סלולארי">
    </header>

    <main>
        <img id="robotPicture" src="./mainPictures/robotPicture.png" alt="היועץ הקולינארי OP">
        <p id="robotText">
            <span class="breakFirstHeader">אני אפליקציה חכמה בעלת בינה מלאכותית ואוכל להמליץ לך על מנות</span>
            <span class="breakFirstHeader">, ומסעדות לפי העדפות הטעמים שלך</span>
            <span class="breakFirstHeader">את האינפורמציה הזאת אני אאסוף מההזמנות שלך</span>
            <span class="breakFirstHeader">כך שגם תוכל בעזרתי להזמין ולשלם במסעדה ללא</span>
            <span class="breakFirstHeader">?!כל המתנה למלצר, נכון שאני כביר</span>
        </p>

        <div id="flexCircles">
            <div>
                <img id="payers" class="circles" src="./mainPictures/leftCircle.png" alt="תשלום">
                <h3 class="h3Color">משלמים</h3>
                <p>
                    <span class="breakFirstHeader robotsUnderText">" ה"חשבון</span>
                    <span class="breakFirstHeader robotsUnderText">אצלכם כבר</span>
                </p>
            </div>
            <div>
                <img id="orders" class="circles" src="./mainPictures/centerCircle.png" alt="הזמנה">
                <h3 class="h3Color">מזמינים</h3>
                <p>
                    <span class="breakFirstHeader robotsUnderText">את המנות ושולחים</span>
                    <span class="breakFirstHeader robotsUnderText">להכנה במטבח</span>
                </p>
            </div>
            <div>
                <img id="scaners" class="circles" src="./mainPictures/rightCircle.png" alt="סריקה">
                <h3 class="h3Color scanersText">סורקים</h3>
                <p class="scanersText">
                    <span class="breakFirstHeader robotsUnderText">נכנסים אל המסעדה וסורקים</span>
                    <span class="breakFirstHeader robotsUnderText">את הברקוד שבשולחן</span>
                </p>
            </div>
        </div>
    </main>

    <footer>
        <img id="aboveLastPhone" src="./footerPictures/aboveLastPhone.png" alt="Decorate">
        <img id="underLastPhone" src="./footerPictures/underLastPhone.png" alt="Decorate">
        <h3 id="intrested">?מסעדנים</h3>
        <p id="intrestedText">
            <span class="breakFirstHeader">אני סוגר לכם את הפינה,</span>
            <span class="breakFirstHeader">תוכלו ללמוד יותר על הלקוחות שלכם</span>
            <span class="breakFirstHeader">אני מאפשר קיצור זמני שולחן וצמצום</span>
            <span class="breakFirstHeader">החזרי מנות, צמצום כח אדם ועלויות</span>
            <span class="breakFirstHeader">תפעול. בזכותי תגדיל מכירות כי אני</span>
            <span class="breakFirstHeader">יודע בדיוק מה להמליץ ללקוח שלך</span>
        </p>

        <img id="lastPhone" src="./footerPictures/lastPhone.png" alt="מכשיר סלולארי">
        <img id="lastHalfCircle" src="./footerPictures/lastHalfCircle.png" alt="Decorate">
        <img id="secondLogo" src="./headerPictures/logoLeft.png" alt="Decorate">
        <div id="orangeCircle"></div>

        <div>
           <div id="formHeaders">
              <h3>?מתעניינים בי</h3>
              <h4>:לפרטים נוספים</h4>
           </div>

            <form id="form" target="formDestination" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScnaSuQRNph4kNtIyagGYKrBsT4lFzFNAAAZ4dPJ1YFRPlC7A/formResponse" autocomplete="off">
                <div id="inputs">
                    <div id="flexInputs">
                        <input required id="fullName" name="entry.754762192" placeholder="שם מלא:" class="inputType1 empty" type="text">
                        <input required id="phone" name="entry.1802613921" placeholder="טלפון:" class="inputType1 empty" type="text">
                        <input id="email" name="entry.3130587" placeholder="מייל:" class="inputType1 empty" type="email">
                    </div>
                    <textarea class="empty" name="entry.1204214150" placeholder="הודעה:" id="massage"></textarea>
                    <!--                    <input class="empty" name="entry.1204214150" placeholder="הודעה:" id="massage" type="text">-->
                </div>
                <input id="send" type="submit" value="שליחה">
                <iframe name="formDestination"></iframe>
            </form>

        </div>
    </footer>   
</div>

    <script src="script.js"></script>
</body>`;

document.getElementsByTagName("link")[1].setAttribute("href","phoneDeal/style.css");
}


