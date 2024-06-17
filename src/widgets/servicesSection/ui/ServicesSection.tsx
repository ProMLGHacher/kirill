import { Service, ServiceCard, ServiceId } from '@/entities/service'
import { $api } from '@/shared/api/api'
import { useState, useEffect } from 'react'
import styles from './ServicesSection.module.scss'

export const ServicesSection = () => {

    const [services, setServices] = useState<Service[]>([])

    useEffect(() => {
        $api.get<{
            "id": string,
            "name": string,
            "price": number,
            "urlImage": string
        }[]>('/api/additional-services').then((res) => {
            setServices(res.data.map((item) => ({
                id: item.id as ServiceId,
                name: item.name,
                price: item.price,
                cover: item.urlImage,
            })))
        })
    }, [])

    if (services.length === 0) {
        return null
    }

    return (
        <section className="container">
            <h3 className={styles.title}>Все <span className='primary'>услуги</span> в одном месте «под ключ»</h3>
            <p className={styles.subtitle}>От поиска идей до монтажа</p>
            <div className={styles.grid}>
                {services.map((service, index) => (
                    <ServiceCard key={service.id} index={index + 1} service={service} />
                ))}
            </div>
        </section>
    )
}
