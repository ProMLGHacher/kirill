import { OrderHistoryCard } from '@/entities/orderHistory/ui/OrderHistoryItem'
import styles from './Orders.module.scss'
import { OrderHistory, OrderHistoryItemId } from '@/entities/orderHistory/model/types'
import { useEffect, useState } from 'react'
import { $api } from '@/shared/api/api'

export const Orders = () => {

    const [orders, setOrders] = useState<OrderHistory>()

    useEffect(() => {
        $api.get<{
            "count": number,
            "offset": 0,
            "total": 0,
            "items": [
              {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "memorialName": "string",
                "clientFirstName": "string",
                "clientLastName": "string",
                "clientPhone": "string",
                "stelaSize": "string",
                "totalPrice": 0,
                "date": "string"
              }
            ]
          }>('/api/orders/me')
    }, [])

    return <div className={styles.security}>
        <div className={styles.title}>
            <img style={{ width: '22px', height: '22px' }} src={'/cart.svg'} alt="" />
            <h1>Заказы</h1>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
            <OrderHistoryCard orderHistoryItem={{ id: '1' as OrderHistoryItemId, title: 'OrderHistoryItem', price: 100, image: 'https://via.placeholder.com/150', createdAt: '2021-01-01', updatedAt: '2021-01-01' }} />
            <OrderHistoryCard orderHistoryItem={{ id: '2' as OrderHistoryItemId, title: 'OrderHistoryItem', price: 100, image: 'https://via.placeholder.com/150', createdAt: '2021-01-01', updatedAt: '2021-01-01' }} />
            <OrderHistoryCard orderHistoryItem={{ id: '3' as OrderHistoryItemId, title: 'OrderHistoryItem', price: 100, image: 'https://via.placeholder.com/150', createdAt: '2021-01-01', updatedAt: '2021-01-01' }} />
            <OrderHistoryCard orderHistoryItem={{ id: '4' as OrderHistoryItemId, title: 'OrderHistoryItem', price: 100, image: 'https://via.placeholder.com/150', createdAt: '2021-01-01', updatedAt: '2021-01-01' }} />
        </div>
    </div>
}