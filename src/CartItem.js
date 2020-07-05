import React from 'react';

class CartItem extends React.Component{
    
    render(){
        console.log('this.props',this.props);
        const{price,qty,title}=this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image}/>
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
                            onClick={()=>this.props.onIncreaseQuantity(this.props.product)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/864/864373.svg"
                            onClick={()=>this.props.onDecreaseQuantity(this.props.product)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1215/1215092.svg"
                        />
                    </div>
                </div>
            </div>
        );
    }
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