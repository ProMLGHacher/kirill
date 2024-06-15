export type OrderHistory = {
    items: OrderHistoryItem[]
    total: number
}

export type OrderHistoryItemId = Brand<string, 'OrderHistoryItemId'>

export type OrderHistoryItem = {
    id: OrderHistoryItemId
    title: string
    price: number
    image: string
    createdAt: string
    updatedAt: string
}

