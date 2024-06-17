import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './PortfolioSection.module.scss'
import { MaterialId } from '@/entities/materail'
import { PortfolioItem, PortfolioItemId } from '@/entities/portfolio'
import { PortfoliCard } from '@/entities/portfolio'
import { $api } from '@/shared/api/api'
import { useState, useEffect } from 'react'

export type PortfolioSectionProps = {
    id?: string;
}

export const PortfolioSection = ({ id }: PortfolioSectionProps) => {

    const [portfolio, setPortfolio] = useState<PortfolioItem[]>([])

    useEffect(() => {
        $api.get<{
            "count": number,
            "offset": number,
            "total": number,
            "items": [
                {
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
                }
            ]
        }>('/api/portfolio-memorials').then((res) => {
            setPortfolio(res.data.items.map((item) => ({
                id: item.id as PortfolioItemId,
                title: item.name,
                images: [item.image],
                place: item.cemeteryName,
                materials: item.materials.map((material) => ({
                    id: material.id as MaterialId,
                    name: material.name,
                })),
            })).filter((item) => item.id != id))
        })
    }, [])

    if (portfolio.length === 0) {
        return null
    }

    return (
        <section key={id} className={classNames(styles.productssection, ['container'])}>
            <h3 className={styles.title}><span className='primary'>Уникальные</span> памятники, хранящие память о дорогих сердцу людях</h3>
            <h5 className={styles.subTitle}>За 28 лет изготовили более тысячи памятников и уже не считаем, а просто делаем свое дело. Каждый памятник — это личная история, индивидуальный подход и мастерство</h5>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '56px' }}>
                {portfolio.map((item) => (
                    <PortfoliCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    )
}
