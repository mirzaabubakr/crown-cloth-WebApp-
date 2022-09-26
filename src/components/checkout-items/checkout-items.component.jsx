import './checkout-item.styles.scss'

import { CartContext } from '../../context/cart.context'
import { useContext } from 'react'

const CheckoutItem = ({cartItem}) => {

    const {clearItemFromCart, addItemsToCart, removeItemToCart} = useContext(CartContext)

    const clearItemHandler = () => {
        clearItemFromCart(cartItem)
    }

    const addItemHandler = () => {
        addItemsToCart(cartItem)
    }

    const removeItemHandler = () => {
        removeItemToCart(cartItem)
    }

    const {name,imageUrl,price,quantity} = cartItem
    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
            <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={addItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={removeItemHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem