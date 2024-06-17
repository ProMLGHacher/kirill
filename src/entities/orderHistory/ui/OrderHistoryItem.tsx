import Button from "@/shared/ui/Button/Button"
import { OrderHistoryItem } from "../model/types"

export type OrderHistoryCardProps = {
    orderHistoryItem: OrderHistoryItem
}

export const OrderHistoryCard = ({ orderHistoryItem }: OrderHistoryCardProps) => {
    return <div style={{ border: '1px solid white', color: 'white', borderRadius: '15px', overflow: 'hidden' }}>
        <img src={orderHistoryItem.image} style={{ transform: 'scale(1.005)' }} alt={orderHistoryItem.title} />
        <div style={{ marginTop: '5px', padding: '15px' }}>
            <p>{orderHistoryItem.title}</p>
            <p style={{ marginTop: '16px' }}>{orderHistoryItem.price}</p>
            <Button style={{ marginTop: '22px' }} full>Подробнее</Button>
        </div>
    </div>
}

