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
      "offset": number,
      "total": number,
      "items":
      {
        "id": OrderHistoryItemId,
        "memorialName": string,
        "clientFirstName": string,
        urlImage: string,
        "clientLastName": string,
        "clientPhone": string,
        "stelaSize": string,
        "totalPrice": number,
        "date": string
      }[]
    }>('/api/orders/me')
      .then(res => setOrders({
        total: res.data.total,
        items: res.data.items.map(item => ({
          id: item.id,
          title: item.memorialName,
          price: item.totalPrice,
          image: item.urlImage,
          createdAt: item.date,
          updatedAt: item.date,
        }))
      }))
  }, [])

  return <div className={styles.security}>
    <div className={styles.title}>
      <img style={{ width: '22px', height: '22px' }} src={'/cart.svg'} alt="" />
      <h1>Заказы</h1>
    </div>
    {orders?.items.length === 0 && <div className={styles.empty}>
      <h2 style={{ color: '#fff' }}>У вас еще нет заказов</h2>
    </div>}
    {orders && <div className={styles.grid}>
      {orders.items.map(order => <OrderHistoryCard key={order.id} orderHistoryItem={order} />)}
    </div>}
  </div>
}