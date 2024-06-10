import { $api } from "@/shared/api/api"
import { CalculatePlot } from "../model/types"
import { CalculatePlotBody, CalculatePlotDto } from "./types"
import { toCalculatePlot } from "../lib/toCalculatePlot"

export const plotCalculatorApi = {
    calculate: async (body: CalculatePlotBody): Promise<CalculatePlot> => {
        const response = await $api.post<CalculatePlotDto>('/api/tools/calculate-plot-price', body)
        return toCalculatePlot(response.data)
    }
}
