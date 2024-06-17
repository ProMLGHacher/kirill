import { PortfolioItem, PortfolioItemId } from '@/entities/portfolio'
import styles from './PortfolioDetails.module.scss'
import { Carousel } from '@/shared/ui/Carousel/Carousel'
import Button from '@/shared/ui/Button/Button'
import { PortfolioSection } from '@/widgets/portfolioSection'
import { useParams } from 'react-router-dom'
import { MaterialId } from '@/entities/materail/model/types'
import { useEffect, useState } from 'react'
import { $api } from '@/shared/api/api'


export const PortfolioDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { id } = useParams()

    const [portfolio, setPortfolio] = useState<PortfolioItem>()

    useEffect(() => {
        $api.get<{
            "description": string,
            "id": string,
            "name": string,
            "image": string,
            "cemeteryName": string,
            "materials":
            {
                "id": string,
                "name": string,
                "colorName": string,
                "image": string,
                "hex": string
            }[]
        }>(`/portfolio/`, {
            params: {
                id: id
            }
        }).then((res) => {
            setPortfolio({
                description: res.data.description,
                id: res.data.id as PortfolioItemId,
                title: res.data.name,
                images: [res.data.image],
                place: res.data.cemeteryName,
                materials: res.data.materials.map((mat) => ({
                    id: mat.id as MaterialId,
                    name: mat.name,
                })),
            })
        })
    }, [])

    return (
        <div className={styles.container}>
            <div className={'container'} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p>Главная – Наши Работы – {portfolio?.title}</p>
                    <h1 style={{ marginTop: '55px' }}>{portfolio?.title}</h1>
                    <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
                        <div>
                            <p>Место установки:</p>
                            <p>{portfolio?.place}</p>
                        </div>
                        <div>
                            <p>Материалы:</p>
                            <p>{portfolio?.materials.map((material) => material.name).join(', ')}</p>
                        </div>
                    </div>
                    <p style={{ marginTop: '40px' }}>{`portfolio.descriptiol `.repeat(100)}</p>
                    <Button style={{ marginTop: '46px' }}>Узнать стоимость</Button>
                </div>
                <div style={{ position: 'relative', height: '100%' }}>
                    <Carousel style={{ position: 'sticky', top: '50px' }} imageUrls={portfolio?.images ?? []} />
                </div>
            </div>
            <PortfolioSection id='asdas' />
        </div>
    )
}

