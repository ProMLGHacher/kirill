import { PortfolioItem, PortfolioItemId } from '@/entities/portfolio'
import styles from './PortfolioDetails.module.scss'
import { Carousel } from '@/shared/ui/Carousel/Carousel'
import Button from '@/shared/ui/Button/Button'
import { PortfolioSection } from '@/widgets/portfolioSection'
import { useParams } from 'react-router-dom'
import { MaterialId } from '@/entities/materail/model/types'
import { useEffect, useState } from 'react'
import { $api } from '@/shared/api/api'
import { classNames } from '@/shared/lib/classNames/classNames'


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
            "images": string[],
            "materials":
            {
                "id": string,
                "name": string,
                "colorName": string,
                "image": string,
                "hex": string
            }[]
        }>(`/api/portfolio-memorial`, {
            params: {
                id: id
            }
        }).then((res) => {
            setPortfolio({
                description: res.data.description,
                id: res.data.id as PortfolioItemId,
                title: res.data.name,
                images: res.data.images,
                place: res.data.name,
                materials: res.data.materials.map((mat) => ({
                    id: mat.id as MaterialId,
                    name: mat.name,
                })),
            })
        })
    }, [id])

    return (
        <div className={''}>
            <div className={classNames(styles.container, ['container'])}>
                <div className={styles.mobile} style={{ position: 'relative', height: '100%' }}>
                    <Carousel style={{ position: 'sticky', top: '50px' }} imageUrls={portfolio?.images ?? []} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p className={styles.breadcrumbs}>Главная – Наши Работы – {portfolio?.title}</p>
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
                    <p style={{ marginTop: '40px' }}>{portfolio?.description}</p>
                    <Button style={{ marginTop: '46px' }}>Узнать стоимость</Button>
                </div>
                <div className={styles.desktop} style={{ position: 'relative', height: '100%' }}>
                    <Carousel style={{ position: 'sticky', top: '50px' }} imageUrls={portfolio?.images ?? []} />
                </div>
            </div>
            <PortfolioSection key={portfolio?.id} id={portfolio?.id} />
        </div>
    )
}

