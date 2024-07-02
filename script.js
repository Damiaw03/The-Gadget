const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if(pageName === "index.html"){
    document.querySelector(".home").classList.add("activelink");
}

if(pageName === "phone.html"){
    document.querySelector(".product").classList.add("activelink");
}

if(pageName === "pay.html"){
    document.querySelector(".payment").classList.add("activelink");
}

if(pageName === "us.html"){
    document.querySelector(".about").classList.add("activelink");
}

if(pageName === "faq.html"){
    document.querySelector(".faq").classList.add("activelink");
}

if(pageName === "feed.html"){
    document.querySelector(".feed").classList.add("activelink");
}