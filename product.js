export const products = [
{
id:1,
name:"Laptop",
price:65000,
category:"Electronics",
image:"https://picsum.photos/300?1",
description:"High-performance laptop"
},

{
id:2,
name:"Headphones",
price:2500,
category:"Electronics",
image:"https://picsum.photos/300?2",
description:"Wireless headphones"
},
import { products } from "../data/products.js";

export default function Products(){

return `
<input
class="search"
id="searchInput"
placeholder="Search products">

<div class="products">

${products.map(product=>`

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<p>${product.category}</p>

<a href="#/product/${product.id}">
<button>View Details</button>
</a>

</div>

`).join("")}

</div>
`;
}
{
id:3,
name:"Shoes",
price:3000,
category:"Fashion",
image:"https://picsum.photos/300?3",
description:"Comfortable running shoes"
},

{
id:4,
name:"Smart Watch",
price:5000,
category:"Electronics",
image:"https://picsum.photos/300?4",
description:"Advanced smartwatch"
}
];