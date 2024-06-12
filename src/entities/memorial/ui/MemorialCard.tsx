import { MemorialItem } from '../model/types'
import styles from './MemorialCard.module.scss'
import Button from '@/shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'

export type MemorialCardProps = {
    item: MemorialItem
}

export const MemorialCard = (
    { item }: MemorialCardProps
) => {

    const navigate = useNavigate()

    return (
        <div className={styles.card}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <h3 className={styles.title}>{item.title}</h3>
            <div className={styles.info}>
                <p className={styles.infoItemTitle}>Материалы</p>
                <p className={styles.infoItemValue}>{item.materials.map((material) => material.name).join(', ')}</p>
            </div>
            <Button variant='secondary' rouded='xl' style={{ padding: '24px 48px' }} onClick={() => navigate(`/portfolio/${item.id}`)}>Подробнее</Button>
        </div>
    )
}

