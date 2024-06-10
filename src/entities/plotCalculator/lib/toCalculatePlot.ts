import { CalculatePlotDto } from "../api/types"
import { CalculatePlot } from "../model/types"

export const toCalculatePlot = (data: CalculatePlotDto): CalculatePlot => {
   return {
    additionalServicePrice: data.additionalServicePrice,
    graniteColorPrice: data.graniteColorPrice,
    plotSizePrice: data.plotSizePrice,
    totalPrice: data.totalPrice
   }
}