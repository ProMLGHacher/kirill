import MainSection from "./components/MainSection/MainSection"
import { ProductsSection } from "./components/ProductsSection/ProductsSection"


export const Main = () => {
    return (
        <main style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '20px'}}>
            <MainSection />
            <ProductsSection />
        </main>
    )
}
