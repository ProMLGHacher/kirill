import styles from './ProgressBar.module.scss'

export type ProgressBarProps = {
    progress: number
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
    return (
        <div style={{ position: 'relative' }}>
            <progress className={styles.progressBarNative} value={progress} max={100}></progress>
            <div className={styles.progressBarValueWrapper} style={{ transform: `translateX(${progress}%)` }}>
                <p className={styles.progressBarValue}>
                    {progress}%
                </p>
            </div>
        </div>
    )
}

