import React from 'react';

const CartItem =(props)=>{
        const{price,qty,title}=props.product;
        const{product,onDeleteProduct,onDecreaseQuantity,onIncreaseQuantity}=props;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image} src={product.img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/864/864378.svg"
                            onClick={()=>onIncreaseQuantity(product)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/864/864373.svg"
                            onClick={()=>onDecreaseQuantity(product)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1215/1215092.svg"
                            onClick={()=>onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }


const style={
    image:{
        background:'#777',
        height:110,
        width:110,
        borderRadius:4
    }
}

export default CartItem;