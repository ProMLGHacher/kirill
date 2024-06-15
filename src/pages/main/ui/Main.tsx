import { PlotCalculator } from "@/features/plotCalculator"
import MainSection from "./components/MainSection/MainSection"
import { PortfolioSection } from "@/widgets/portfolioSection"
import { MemorialsSection } from "@/widgets/memorialsSection"
import { ServicesSection } from "@/widgets/servicesSection/import"

export const Main = () => {
    return (
        <main style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '20px' }}>
            <MainSection />
            <PortfolioSection />
            <ServicesSection />
            <MemorialsSection />
            <PlotCalculator />
        </main>
    )
}
