import Home from "./pages/home.js";
import About from "./pages/about.js";
import Products from "./pages/products.js";
import ProductDetails from "./pages/productDetails.js";

const app=document.getElementById("app");

function router(){

const hash=window.location.hash || "#/";

if(hash==="#/"){
app.innerHTML=Home();
}

else if(hash==="#/products"){
app.innerHTML=Products();
}

else if(hash==="#/about"){
app.innerHTML=About();
}

else if(hash.startsWith("#/product/")){

const id=hash.split("/")[2];

app.innerHTML=ProductDetails(id);
}
}

window.addEventListener("hashchange",router);

window.addEventListener("load",router);