import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/actions/cartAction';

const Cart = () => {
	const cartItems = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();

	const handleRemoveFromCart = (itemId) => {
		dispatch(removeFromCart(itemId));
	};

	return (
		<div>
			<h2>Я зина корзина</h2>
			{cartItems.length === 0 ? (
				<p>Зина в отпуске, товаров нет</p>
			) : (
				<ul>
					{cartItems.map((item) => (
						<li key={item.id}>
							{item.name} - {item.price} - {item.quantity} шт.
							<button onClick={() => handleRemoveFromCart(item.id)}>Удалить</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Cart;
