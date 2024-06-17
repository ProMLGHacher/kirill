import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './MemorialsSection.module.scss'
import { MaterialId } from '@/entities/materail'
import { PortfolioItemId } from '@/entities/portfolio'
import { MemorialCard, MemorialItem, MemorialItemId } from '@/entities/memorial'
import { $api } from '@/shared/api/api'
import { useState, useEffect } from 'react'

export const MemorialsSection = () => {

    const [memorials, setMemorials] = useState<MemorialItem[]>([])

    useEffect(() => {
        $api.get<{
            "count": number,
            "offset": number,
            "total": number,
            "items":
            {
                "id": string,
                "name": string,
                "images": string[],
                "materials": {
                    "id": string,
                    "name": string,
                    "colorName": string,
                    "image": string,
                    "hex": string
                }[]
            }[]
        }>('/api/memorials').then((res) => {
            setMemorials(res.data.items.map((item) => ({
                id: item.id as MemorialItemId,
                name: item.name,
                images: item.images,
                materials: item.materials.map((material) => ({
                    id: material.id as MaterialId,
                    name: material.name,
                })),
                image: item.images[0],
                title: item.name,
            })))
        })
    }, [])

    if (memorials.length === 0) {
        return null
    }

    return (
        <section className={classNames(styles.productssection, ['container'])}>
            <h3 className={styles.title}>Предложим варианты детализированных <span className="primary">проектов</span> по вашим пожеланиям и воплотим лучший из них</h3>
            <h5 className={styles.subTitle}>Посмотрите, какие 3D-проекты мы разрабатываем</h5>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '56px' }}>
                {memorials.map(memorial => (
                    <MemorialCard key={memorial.id} item={memorial} />
                ))}
            </div>
        </section>
    )
}
