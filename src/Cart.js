import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        
        this.state={
            products:[
                {
                    price:999,
                    title:'Watch',
                    qty:10,
                    img:'',
                    id:1
        
                },{
                    price:9999,
                    title:'Phone',
                    qty:1,
                    img:'',
                    id:2
        
                },{
                    price:99999,
                    title:'laptop',
                    qty:1,
                    img:'',
                    id:3
        
                }
            ]
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
        
        // this.testing();
    }
    render(){
        const {products}=this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                 return (
                    <CartItem 
                        product={product} 
                        key={product.id}/>
                );
                
                })}
            </div>

        );
    }
}


export default Cart;