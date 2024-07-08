import styles from './MemorialDetails.module.scss'
import Button from '@/shared/ui/Button/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { MaterialId } from '@/entities/materail/model/types'
import { useEffect, useState } from 'react'
import { $api } from '@/shared/api/api'
import { MemorialItem, MemorialItemId } from '@/entities/memorial'
import { MemorialsSection } from '@/widgets/memorialsSection'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppSelector } from '@/app/hooks/storeHooks'
import { selectIsAuthorized } from '@/entities/tokens'


export const MemorialDetails = () => {

    const isAuth = useAppSelector(selectIsAuthorized)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { id } = useParams()

    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate('/login')
    }

    const [memorial, setMemorial] = useState<MemorialItem>()

    useEffect(() => {
        $api.get<{
            "description": string,
            "price": number,
            "stelaSize": string,
            "id": string,
            "name": string,
            "image": string,
            "materials":
            {
                "id": string,
                "name": string,
                "colorName": string,
                "image": string,
                "hex": string
            }[]
        }>(`/api/memorial`, {
            params: {
                id: id
            }
        }).then((res) => {
            setMemorial({
                id: res.data.id as MemorialItemId,
                title: res.data.name,
                materials: res.data.materials.map((mat) => ({
                    id: mat.id as MaterialId,
                    name: mat.name,
                })),
                image: res.data.image,
                description: res.data.description
            })
        })
    }, [id])

    return (
        <div className={styles.container}>
            <div className={classNames(styles.grid, ['container'])} >
                <img className={classNames(styles.image, [styles.imageMobile])} src={memorial?.image} alt="" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p className={styles.breadcrumbs}>Главная – Наши Работы – {memorial?.title}</p>
                    <h1 className={styles.title}>{memorial?.title}</h1>
                    <div className={styles.materials}>
                        <p>Материалы:</p>
                        <p>{memorial?.materials.map((material) => material.name).join(', ')}</p>
                    </div>
                    <p style={{ marginTop: '40px' }}>{memorial?.description}</p>
                    <Button onClick={() => {
                        if (!isAuth) {
                            navigateToLogin()
                            return
                        }
                        $api.post('/api/order', {
                            "memorialId": memorial?.id
                        }).then(_ => {
                            navigate(`/profile/orders`)
                        })
                    }} style={{ marginTop: '46px' }}>Заказать</Button>
                </div>
                <img className={classNames(styles.image, [styles.imageDesktop])} src={memorial?.image} alt="" />
            </div>
            <MemorialsSection key={memorial?.id} id={memorial?.id} />
        </div>
    )
}

