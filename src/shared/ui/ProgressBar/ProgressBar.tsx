import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ProgressBar.module.scss'

export type ProgressBarProps = {
    progress: number
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
    return (
        <div style={{ position: 'relative' }}>
            <progress className={styles.progressBarNative} value={progress} max={100}></progress>
            <div className={styles.progressBarValueWrapper} style={{ transform: `translateX(${progress}%)` }}>
                <p className={classNames(styles.progressBarValue, {
                    [styles.progressBarValueZero]: progress === 0
                })}>
                    {progress}%
                </p>
            </div>
        </div>
    )
}

