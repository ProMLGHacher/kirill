import { MemorialItem } from "@/entities/memorial"

export type CartItemId = Brand<string, 'CartItemId'>

export type CartItem = {
    id: CartItemId
    memorial: MemorialItem
    quantity: number
}