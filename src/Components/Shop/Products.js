
import ProductItem from "./ProductItem";


const Products =()=>
{
 const SampleProducts =[
    {id:'p1' , price:120, title:'First book', description: "This is my first book"},
    {id:'p2' , price:100, title:'Second book' ,description:'This is second book I will read this'},
    {id:'p3' , price:180, title:'Third book', description:'This is Third book I will read this'},

 ]

    return(
<div className="products" style={{color:'white'}}>
    {SampleProducts.map((items)=>
    {

        return(
<ul key={items.id}>
<ProductItem 
id={items.id}
title={items.title}
price={items.price}
description={items.description}

/>


</ul>   
        )
     


        
    })}


</div>
    )
}

export default Products;