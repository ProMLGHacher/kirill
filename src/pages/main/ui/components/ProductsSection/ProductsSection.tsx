import { classNames } from '@/shared/utils/classNames/classNames'
import styles from './ProductsSection.module.scss'
import { Carousel } from '@/shared/ui/Carousel/Carousel'

export const ProductsSection = () => {
    return (
        <section className={classNames(styles.productssection, ['container'])}>
            <h3 className={styles.title}><span className='primary'>Уникальные</span> памятники, хранящие память о дорогих сердцу людях</h3>
            <h5 className={styles.subTitle}>За 28 лет изготовили более тысячи памятников и уже не считаем, а просто делаем свое дело. Каждый памятник — это личная история, индивидуальный подход и мастерство</h5>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <Carousel imageUrls={[
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
                ]} />
                <Carousel imageUrls={[
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
                ]} />
            </div>
        </section>
    )
}
