import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import Logo from '@/shared/ui/Logo/Logo'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppSelector } from '@/app/hooks/storeHooks'
import { selectIsAuthorized } from '@/entities/tokens'

const navigation = [
    {
        path: '/',
        title: 'УСЛУГИ'
    },
    {
        path: '/catalog',
        title: 'КАТАЛОГ'
    },
    {
        path: '/portfolio',
        title: 'НАШИ РАБОТЫ'
    },
    {
        path: '/reviews',
        title: 'ОТЗЫВЫ'
    },
    {
        path: '/sales',
        title: 'АКЦИИ'
    },
    {
        path: '/about',
        title: 'О НАС'
    },
]

export const Header = () => {

    const isAuthorized = useAppSelector(selectIsAuthorized)

    const navigate = useNavigate()

    return (
        <header className={classNames(styles.header, ['container'])}>
            <Link to={'/'}><Logo /></Link>
            <nav className={styles.navigation}>
                {
                    navigation.map(nav =>
                        <NavLink key={nav.path} className={({ isActive }) => classNames(styles.link, { [styles.isActive]: isActive })} to={nav.path}>
                            {nav.title}
                        </NavLink>
                    )
                }
                <Link className={styles.iconLink} to={'/cart'}>
                    <img style={{ color: 'white' }} src="/cart.svg" alt="cart link icon" />
                </Link>
                <Link className={styles.iconLink} to={isAuthorized ? '/profile' : '/registration'}>
                    <img src="/profile-circle.svg" alt="profile link icon" />
                </Link>
            </nav>
            <div onClick={() => navigate(isAuthorized ? '/profile' : '/registration')} className={styles.burger}>
                <span className={classNames(styles.burgerLine, [styles.burgerLine1])}></span>
                <span className={classNames(styles.burgerLine, [styles.burgerLine2])}></span>
                <span className={classNames(styles.burgerLine, [styles.burgerLine3])}></span>
            </div>
        </header>
    )
}
