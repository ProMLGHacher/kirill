export type CalculatePlotBody = {
    additionalService: string,
    graniteColor: string,
    plotSize: string
}

export type CalculatePlotDto = {
    plotSizePrice: number,
    graniteColorPrice: number,
    additionalServicePrice: number,
    totalPrice: number
}
