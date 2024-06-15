import { OrderHistoryItem } from "../model/types"

export type OrderHistoryCardProps = {
    orderHistoryItem: OrderHistoryItem
}

export const OrderHistoryCard = ({ orderHistoryItem }: OrderHistoryCardProps) => {
    return <div>
        <img src={orderHistoryItem.image} alt={orderHistoryItem.title} />
        <div>{orderHistoryItem.title}</div>
        <div>{orderHistoryItem.price}</div>
    </div>
}

