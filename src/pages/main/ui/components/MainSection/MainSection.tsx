import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './MainSection.module.scss'
import { Link } from 'react-router-dom'

const MainSection = () => {
  return (
    <section className={classNames(styles.section, ['container'])}>
      <div>
        <h1 className={styles.title}>Создаем <span className={styles.primary}>качественные</span> памятники на заказ</h1>
        <h5 className={styles.subTitle}>Наша компания предлагает вам уникальную возможность выбрать и создать памятник, который будет стоять века, сохраняя память о ваших родных и близких.</h5>
        <div className={styles.buttonLinks}>
          <Link className={classNames(styles.buttonLink, [styles.gray])} to={'/more'}>Посмотреть больше</Link>
          <Link className={classNames(styles.buttonLink, [styles.black])} to={'/more'}>Заказать</Link>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <p className={styles.desc}>Посмотрите наши работы, чтобы удостовериться в нашем профессионализме</p>
            <Link to={'/portfolio'} className={styles.portfolio}>Наши работы <div className={styles.portfolioArrow}><img src="/arrowRightUp.svg" alt="" /></div></Link>
          </div>
          <img src="/mini-sad-monument.png" alt="" />
        </div>
      </div>
      <div style={{ position: 'relative' }}>
      <img className={styles.figure} src="/figureNo1.svg" alt="" />
      </div>
    </section>
  )
}

export default MainSection