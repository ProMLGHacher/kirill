import Button from "@/shared/ui/Button/Button"
import { Service } from "../model/types"

export type ServiceProps = {
    service: Service,
    index: number
}

export const ServiceCard = ({ service, index }: ServiceProps) => {
    return <div style={{
        borderRadius: '50px',
        color: 'white',
        padding: '28px',
        aspectRatio: '3/2',
        backgroundImage: `url(${service.cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
            <span style={{ fontWeight: '500', fontSize: '14px' }}>{index.toString().padStart(2, '0')}</span>
            <p style={{ fontWeight: '500', fontSize: '18px', textDecoration: 'underline' }}>{service.name}</p>
        </div>
        <Button style={{ width: '90%' }} rounded="xl" variant="tertiary" color="white" outlined>oij</Button>
    </div>
}

