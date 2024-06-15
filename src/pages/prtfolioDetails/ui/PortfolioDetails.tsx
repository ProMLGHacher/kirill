import { PortfolioItem, PortfolioItemId } from '@/entities/portfolio'
import styles from './PortfolioDetails.module.scss'
import { Carousel } from '@/shared/ui/Carousel/Carousel'
import Button from '@/shared/ui/Button/Button'
import { PortfolioSection } from '@/widgets/portfolioSection'
import { useParams } from 'react-router-dom'
import { MaterialId } from '@/entities/materail/model/types'


export const PortfolioDetails = () => {

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
            <div className={'container'} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                    <p>Главная – Наши Работы – {portfolio.title}</p>
                    <h1>{portfolio.title}</h1>
                    <div>
                        <div>
                            <p>Место установки:</p>
                            <p>{portfolio.place}</p>
                        </div>
                        <div>
                            <p>Материалы:</p>
                            <p>{portfolio.materials.map((material) => material.name).join(', ')}</p>
                        </div>
                    </div>
                    <p>{portfolio.description}</p>
                    <Button>Узнать стоимость</Button>
                </div>
                <Carousel imageUrls={portfolio.images} />
            </div>
            <PortfolioSection />
        </div>
    )
}

