import { Service, ServiceCard, ServiceId } from '@/entities/service'
import { $api } from '@/shared/api/api'
import { useState, useEffect } from 'react'

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
            <h3 style={{ marginTop: '84px', fontSize: '45px', fontWeight: '500' }}>Все <span className='primary'>услуги</span> в одном месте «под ключ»</h3>
            <p style={{ marginTop: '15px', fontSize: '24px' }}>От поиска идей до монтажа</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: '30px' }}>
                {services.map((service, index) => (
                    <ServiceCard key={service.id} index={index + 1} service={service} />
                ))}
            </div>
        </section>
    )
}
