window.onload = function () {
  // Image loads
  let berryGoodImg = "images/BerryGood.jpg";
  let miniVanilliImg = "images/MiniVanilli.jpg";
  let lottaChocoImg = "images/LottaChocolat.jpg";
  let cookiesCreamImg = "images/Cookies-Cream.jpg";
  let fudgeSwirlImg = "images/LetSwirlTogether.jpg";
  let cookieDoughImg = "images/CookieDough.jpg";

  // Flavor Headers
  let berryGoodHeader = "Berry Good";
  let miniVanilliHeader = "Mini Vanilli";
  let lottaChocoHeader = "A Lotta Chocolat";
  let cookiesCreamHeader = "Cookies & Cream";
  let fudgeSwirlHeader = "Give It a Swirl";
  let cookieDoughHeader = "Oh, Cookie Dough!";

  // Flavor Descriptions
  let berryGoodDescr = "Berry season has been very good to our creamy vanilla ice cream.";
  let miniVanilliDescr = "Girl you know it's true. We only use the world's best vanilla to create this smooth flavor.";
  let lottaChocoDescr = "There's a lotta the best Belgium chocolate chunks in this rich chocolate ice cream.";
  let cookiesCreamDescr = "Cookies and Cream. Cream and Cookies. Any way you say it, it's a classic. ";
  let fudgeSwirlDescr = "Silky fudge swirl into fresh mint ice cream.";
  let cookieDoughDescr = "Me want cookies... to squeeze into a pint of oat milk ice cream. Non-dairy.";

  // Icon loads
  let berryGoodIcon = "images/Berry-Good-Icon.jpg";
  let miniVanilliIcon = "images/Mini-Vanilli-Icon.jpg";
  let lottaChocoIcon = "images/Lotta-Chocolat-Icon.jpg";
  let cookiesCreamIcon = "images/Cookies-Cream-Icon.jpg";
  let fudgeSwirlIcon = "images/Swirl-Together-Icon.jpg";
  let cookieDoughIcon = "images/Cookie-Dough-Icon.jpg";

  // Ice cream Buttons
  const berryGoodBtn = document.querySelector(".flavor.strawberry");
  const miniVanilliBtn = document.querySelector(".flavor.vanilla");
  const lottaChocolatBtn = document.querySelector(".flavor.chocolate");
  const cookiesCreamBtn = document.querySelector(".flavor.cookies-cream");
  const fudgeSwirlBtn = document.querySelector(".flavor.fudge-swirl");
  const cookieDoughBtn = document.querySelector(".flavor.cookie-dough");

  // Ice Cream Scoop area
  const iceCreamScoop = document.querySelector(".ice-cream-scoop");
  const iceCreamHeader = document.querySelector("#iceCreamHead");
  const iceCreamDescr = document.querySelector("#iceCreamDescr");

  // Event Listeners - Mouse enter Name Button
  berryGoodBtn.addEventListener("mouseenter", function(){switchIcon(berryGoodIcon)});
  miniVanilliBtn.addEventListener("mouseenter", function(){switchIcon(miniVanilliIcon)});
  lottaChocolatBtn.addEventListener("mouseenter", function(){switchIcon(lottaChocoIcon)});
  cookiesCreamBtn.addEventListener("mouseenter", function(){switchIcon(cookiesCreamIcon)});
  fudgeSwirlBtn.addEventListener("mouseenter", function(){switchIcon(fudgeSwirlIcon)});
  cookieDoughBtn.addEventListener("mouseenter", function(){switchIcon(cookieDoughIcon)});

  const flavorIcon = document.querySelector(".flavor-icon-change");
  const flavorIconDefault = "images/IceCreamCones_2.png";

  function switchIcon(newIcon) {
    flavorIcon.setAttribute("src", newIcon);
  }

  function switchIconBack() {
    flavorIcon.setAttribute("src", flavorIconDefault);
  }

  document.querySelector(".flavor").addEventListener("mouseleave", switchIconBack);


  //Event Listeners - Click Name Button
  berryGoodBtn.addEventListener("click", function(){switchInfo(berryGoodImg, berryGoodHeader, berryGoodDescr, berryGoodIcon)});
  miniVanilliBtn.addEventListener("click", function(){switchInfo(miniVanilliImg, miniVanilliHeader, miniVanilliDescr, miniVanilliIcon);});
  lottaChocolatBtn.addEventListener("click", function(){switchInfo(lottaChocoImg, lottaChocoHeader, lottaChocoDescr, lottaChocoIcon);});
  cookiesCreamBtn.addEventListener("click", function(){switchInfo(cookiesCreamImg, cookiesCreamHeader, cookiesCreamDescr, cookiesCreamIcon);});
  fudgeSwirlBtn.addEventListener("click", function(){switchInfo(fudgeSwirlImg, fudgeSwirlHeader, fudgeSwirlDescr, fudgeSwirlIcon);});
  cookieDoughBtn.addEventListener("click", function(){switchInfo(cookieDoughImg, cookieDoughHeader, cookieDoughDescr, cookieDoughIcon);});


  function switchInfo(newImage, newHeader, newDescription, newIcon) {
    iceCreamScoop.setAttribute("src", newImage);
    iceCreamHeader.innerHTML = newHeader; 
    iceCreamDescr.innerHTML = newDescription;
    flavorIcon.setAttribute("src", newIcon);
    // console.log(newHeader);
    // console.log(newDescription);
  }
}


// // Newsletter Sign-Up Bottom

// const form1 = document.querySelector("#newsletterSignPage");
// let emailInput1 = document.querySelector("#emailInput")
// let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// form1.addEventListener("submit", signUpSubmit);

// fuction signUpSubmit(event) {
//    event.preventDefault();

//    if (emailInput1.value.match(mailFormat)) {


//    } else {


//    }

// }


