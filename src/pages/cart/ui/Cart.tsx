import styles from './Cart.module.scss'
import { CartItem, CartItemId } from "@/entities/cart"
import { MemorialItemId } from "@/entities/memorial"
import { classNames } from "@/shared/lib/classNames/classNames"
import Button from '@/shared/ui/Button/Button'


const cartItems: CartItem[] = [
    {
        id: '1' as CartItemId,
        memorial: {
            id: '1' as MemorialItemId,
            image: 'https://via.placeholder.com/150',
            materials: [],
            title: 'Товар 1',
        },
        quantity: 1
    },
    {
        id: '2' as CartItemId,
        memorial: {
            id: '2' as MemorialItemId,
            image: 'https://via.placeholder.com/150',
            materials: [],
            title: 'Товар 2',
        },
        quantity: 1
    }
]

export const Cart = () => {
    return (
        <div className={classNames('container', [styles.cart])}>
            <div className={styles.cartContent}>
                <div>
                    <h1>Корзина <span>(3 товара)</span></h1>
                    <p><img src="" alt="" /> Очистить корзину</p>
                </div>
                <div className={styles.cartColumnsHeader}>
                    <p>Товар</p>
                    <p>Количество</p>
                    <p>Цена</p>
                </div>
                {cartItems.map((item) => (
                    <div className={styles.cartItem} key={item.id}>
                        <div className={styles.cartItemImage}>
                            <img src={item.memorial.image} alt="" />
                            <div className={styles.cartItemInfo}>
                                <h5>{item.memorial.title}</h5>
                                <p>{item.memorial.materials.map((material) => material.name).join(', ')}</p>
                            </div>
                        </div>
                        <div className={styles.quantityWrapper}>
                            <button className={classNames(styles.cartItemQuantityButton, [styles.cartItemQuantityButtonDecrease])}>-</button>
                            <span>{item.quantity}</span>
                            <button className={classNames(styles.cartItemQuantityButton, [styles.cartItemQuantityButtonIncrease])}>+</button>
                        </div>
                        <p>24032894</p>
                        <button>Удалить</button>
                    </div>
                ))}
            </div>
            <div className={styles.cartSummary}>
                <h3>Оплата по QR-коду</h3>
                <img style={{ width: 'fit-content' }} src="/sbp.svg" alt="" />
                <hr />
                <div>
                    <p>Корзина</p>
                    <p>100 000 ₽</p>
                </div>
                <div>
                    <p>Доставка</p>
                    <p>100 000 ₽</p>
                </div>
                <div>
                    <p>Итого</p>
                    <p>100 000 ₽</p>
                </div>
                <Button variant='secondary' full rounded='xl'>Оплатить</Button>
            </div>
        </div>
    )
}
