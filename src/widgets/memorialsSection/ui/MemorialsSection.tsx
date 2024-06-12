import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './MemorialsSection.module.scss'
import { MaterialId } from '@/entities/materail'
import { PortfolioItemId } from '@/entities/portfolio'
import { MemorialCard } from '@/entities/memorial'

export const MemorialsSection = () => {
    return (
        <section className={classNames(styles.productssection, ['container'])}>
            <h3 className={styles.title}>Предложим варианты детализированных <span className="primary">проектов</span> по вашим пожеланиям и воплотим лучший из них</h3>
            <h5 className={styles.subTitle}>Посмотрите, какие 3D-проекты мы разрабатываем</h5>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '56px' }}>
                <MemorialCard item={{
                    image: 'https://habrastorage.org/r/w1560/webt/jc/hw/st/jchwst6a3nwlxlscnmuw5tdhmry.png',
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
                    title: 'ПРОЕКТ №1',
                }} />
                <MemorialCard item={{
                    image: 'https://feature-sliced.design/ru/assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg',
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
                    title: 'ПРОЕКТ №2'
                }} />
                <MemorialCard item={{
                    image: 'https://habrastorage.org/r/w1560/webt/jc/hw/st/jchwst6a3nwlxlscnmuw5tdhmry.png',
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
                    title: 'ПРОЕКТ №3'
                }} />
            </div>
        </section>
    )
}
