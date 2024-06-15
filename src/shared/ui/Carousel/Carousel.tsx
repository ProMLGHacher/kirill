import { ArrowIcon } from '@/shared/svg/Arrow';
import styles from './Carousel.module.scss';
import { CSSProperties, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

export type CarouselProps = {
    imageUrls: string[];
    style?: CSSProperties;
}

export const Carousel = (
    { imageUrls, style }: CarouselProps
) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevButtonClick = () => {
        if (currentIndex === 0) return;
        setCurrentIndex(currentIndex - 1);
    }

    const handleNextButtonClick = () => {
        if (currentIndex === imageUrls.length - 1) return;
        setCurrentIndex(currentIndex + 1);
    }

    return <div style={style} className={classNames(styles.carousel, ['container'])}>
        <button onClick={handlePrevButtonClick} className={classNames(styles.carousel__button, {
            [styles.carousel__button_disabled]: currentIndex === 0
        }, [styles.carousel__button_left])}>
            <ArrowIcon direction="left" />
        </button>
        <div className={styles.carousel__inner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {imageUrls.map((url, index) => (
                <img src={url} alt="carousel image" className={styles.carouselImage} key={index} />
            ))}
        </div>
        <button onClick={handleNextButtonClick} className={classNames(styles.carousel__button, {
            [styles.carousel__button_disabled]: currentIndex === imageUrls.length - 1
        }, [styles.carousel__button_right])}>
            <ArrowIcon direction="right" />
        </button>
    </div>;
};

