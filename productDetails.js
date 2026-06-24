import { products } from "../data/products.js";

export default function ProductDetails(id){

const product=products.find(p=>p.id==id);

if(!product)
return "<h2>Product Not Found</h2>";

return `
<div class="card">

<img src="${product.image}">

<h2>${product.name}</h2>

<p>${product.description}</p>

<p>Price: ₹${product.price}</p>

<p>Category: ${product.category}</p>

</div>
`;
}