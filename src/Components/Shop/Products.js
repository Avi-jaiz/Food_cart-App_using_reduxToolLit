import Cart from "../Cart/Cart";



const Products =()=>
{
 const SampleProducts =[
    {id:'p1' , price:120, title:'First book'},
    {id:'p2' , price:100, title:'Second book'},
    {id:'p3' , price:180, title:'Third book'},

 ]

    return(
<div className="products" style={{color:'white'}}>
    {SampleProducts.map((items)=>
    {
        return(
<ProductItem />            


        )
    })}


</div>
    )
}

export default Products;