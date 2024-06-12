export type CalculatePlotBody = {
    additionalService: string,
    graniteColor: 'White' | 'Black' | 'Grey' | 'Other',
    plotSize: 'Size0_8x1_1' | 'Size1_0x2_0' | 'Size1_8x2_0' | 'Size2_0x2_0' | 'Size2_0x2_5' | 'Other'
}

export type CalculatePlotDto = {
    plotSizePrice: number,
    graniteColorPrice: number,
    additionalServicePrice: number,
    totalPrice: number
}
