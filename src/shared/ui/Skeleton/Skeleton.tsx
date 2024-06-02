import styles from './Skeleton.module.scss';

interface SkeletonProps {
    width?: string;
    height?: string;
    circle?: boolean;
    borderRadius?: string
}

const Skeleton: React.FC<SkeletonProps> = ({
    width = '100%',
    height = '60px',
    borderRadius = '12px',
    circle = false,
}) => {
    const style = {
        width,
        borderRadius,
        height: circle ? width : height,
    };

    return (
        <div
            className={`${styles.skeleton} ${circle ? styles.circle : ''}`}
            style={style}
        >
            <div className={styles.shimmer} />
        </div>
    );
};

export default Skeleton;
