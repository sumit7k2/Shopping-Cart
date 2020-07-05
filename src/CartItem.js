import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        
        this.state={
            price:9999,
            title:'Phone',
            qty:1,
            img:''

        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
        
        // this.testing();
    }
    // testing(){
    //     const promise=new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         },5000);
    //     });

    //     promise.then(()=>{
    //         this.setState({qty:this.state.qty+10});
    //         this.setState({qty:this.state.qty+10});
    //         this.setState({qty:this.state.qty+10});
    //         console.log('state',this.state);
    //     });
    // }
    increaseQuantity=()=>{
        // setState form 1
            // this.setState({
            //     qty:this.state.qty+1
            // });
        // setState form 2(if prev state is required)
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            }
        });

    }
    decreaseQuantity=()=>{
        const {qty}=this.state;
        if(qty===0)
        {
            return;
        }
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-1
            }
        });
    }
    render(){
        console.log('render');
        const{price,qty,title}=this.state;
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
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/864/864373.svg"
                            onClick={this.decreaseQuantity}
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