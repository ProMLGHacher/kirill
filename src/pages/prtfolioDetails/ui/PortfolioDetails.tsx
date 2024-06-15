import { PortfolioItemId } from '@/entities/portfolio'
import styles from './PortfolioDetails.module.scss'
import { Carousel } from '@/shared/ui/Carousel/Carousel'
import Button from '@/shared/ui/Button/Button'
import { PortfolioSection } from '@/widgets/portfolioSection'
import { useParams } from 'react-router-dom'
import { MaterialId } from '@/entities/materail/model/types'
import { useEffect } from 'react'


export const PortfolioDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { id } = useParams()
    const portfolio = {
        images: [
            'https://feature-sliced.design/ru/assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg',
            'https://habrastorage.org/r/w1560/webt/jc/hw/st/jchwst6a3nwlxlscnmuw5tdhmry.png',
            'https://feature-sliced.design/ru/assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg',
            'https://habrastorage.org/r/w1560/webt/jc/hw/st/jchwst6a3nwlxlscnmuw5tdhmry.png',
            'https://feature-sliced.design/ru/assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg',
            'https://habrastorage.org/r/w1560/webt/jc/hw/st/jchwst6a3nwlxlscnmuw5tdhmry.png',
            'https://feature-sliced.design/ru/assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg',
            'https://habrastorage.org/r/w1560/webt/jc/hw/st/jchwst6a3nwlxlscnmuw5tdhmry.png',
            'https://feature-sliced.design/ru/assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg',
            'https://habrastorage.org/r/w1560/webt/jc/hw/st/jchwst6a3nwlxlscnmuw5tdhmry.png',
            'https://feature-sliced.design/ru/assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg',
            'https://habrastorage.org/r/w1560/webt/jc/hw/st/jchwst6a3nwlxlscnmuw5tdhmry.png',
        ],
        description: 'Портфолио',
        id: '1231231' as PortfolioItemId,
        materials: [
            {
                id: 'q423423' as MaterialId,
                name: 'okfnjowe'
            },
            {
                id: 'ewfrew' as MaterialId,
                name: 'wgergergerg'
            }
        ],
        place: 'Гроб',
        title: 'Ухуу как же хорошо'
    }

    return (
        <div className={styles.container}>
            <div className={'container'} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p>Главная – Наши Работы – {portfolio.title}</p>
                    <h1 style={{ marginTop: '55px' }}>{portfolio.title}</h1>
                    <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
                        <div>
                            <p>Место установки:</p>
                            <p>{portfolio.place}</p>
                        </div>
                        <div>
                            <p>Материалы:</p>
                            <p>{portfolio.materials.map((material) => material.name).join(', ')}</p>
                        </div>
                    </div>
                    <p style={{ marginTop: '40px' }}>{`portfolio.descriptiol `.repeat(100)}</p>
                    <Button style={{ marginTop: '46px' }}>Узнать стоимость</Button>
                </div>
                <div style={{ position: 'relative', height: '100%' }}>
                    <Carousel style={{ position: 'sticky', top: '50px' }} imageUrls={portfolio.images} />
                </div>
            </div>
            <PortfolioSection id='asdas' />
        </div>
    )
}

