import { Header } from '@/widgets/header/ui/Header'
import styles from './HeaderLayout.module.scss'
import { Outlet } from 'react-router-dom'

const HeaderLayout = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Outlet />
        </div>
    )
}

export default HeaderLayout