import { Carousel } from '@/shared/ui/Carousel/Carousel'
import { PortfolioItem } from '../model/types'
import styles from './PortfolioCard.module.scss'
import Button from '@/shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'

export type PortfolioCardProps = {
    item: PortfolioItem
}

export const PortfoliCard = (
    { item } : PortfolioCardProps
) => {

    const navigate = useNavigate()

    return (
        <div className={styles.card}>
            <Carousel imageUrls={item.images} />
            <h3 className={styles.title}>{item.title}</h3>
            <div className={styles.info}>
                <div className={styles.infoItem}>
                    <p className={styles.infoItemTitle}>Место установки</p>
                    <p className={styles.infoItemValue}>{item.place}</p>
                </div>
                <div className={styles.infoItem}>
                    <p className={styles.infoItemTitle}>Материалы</p>
                    <p className={styles.infoItemValue}>{item.materials.map((material) => material.name).join(', ')}</p>
                </div>
            </div>
            <Button variant='secondary' rouded='xl' style={{ padding: '24px 48px' }} onClick={() => navigate(`/portfolio/${item.id}`)}>Подробнее</Button>
        </div>
    )
}

