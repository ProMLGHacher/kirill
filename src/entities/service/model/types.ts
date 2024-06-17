export type ServiceId = Brand<string, 'ServiceId'>

export type Service = {
    id: ServiceId
    name: string
    price: number
    cover: string
}

