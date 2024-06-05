import { useRef, useState } from 'react'
import styles from './Gallery.module.scss'

type GalleryProps = {
    images: string[]
}

export const Gallery = ({ images }: GalleryProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const sliderRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className={styles.gallery}
        >
            <img className={styles.img} src={images[currentImageIndex]} alt="" />
            <div
                className={styles.slider}
                ref={sliderRef}
            >
                {
                    // images.map((img, index) => <button key={img + index} className={styles.imgButton} onClick={() => { setCurrentImageIndex(index) }}><img src={img} alt="" /></button>)
                    images.map((img, index) => <img key={img + index} draggable={false} className={styles.imgButton} onClick={() => { setCurrentImageIndex(index) }} src={img} alt="" />)
                }
            </div>
        </div>
    )
}
