import { NavLink, Outlet } from 'react-router-dom'
import styles from './ProfileNavigationLayout.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import React from 'react'

const nav = [
    {
        href: '/profile/orders',
        icon: <img style={{ width: '22px', height: '22px' }} src={'/cart.svg'} alt="" />,
        title: 'Заказы'
    },
    {
        href: '/profile/account',
        icon: <img style={{ width: '22px', height: '22px' }} src={'/profile-circle.svg'} alt="" />,
        title: 'Аккаунт'
    },
    {
        href: '/profile/security',
        icon: <img style={{ width: '22px', height: '22px' }} src={'/lock.svg'} alt="" />,
        title: 'Безопасность'
    },
]

// TODO: create layout in shared and create layout with composed widgets
export const ProfileNavigationLayout = () => {
    return (
        <div className={classNames(styles.asidenavigationlayout, ['container'])}>
            <aside className={styles.aside}>
                <h4>Навигация</h4>
                <nav>
                    {
                        nav.map((e, index) => <NavLink key={e.href + index} className={({ isActive }) => classNames(styles.navLink, {
                            [styles.active]: isActive
                        })} to={e.href} >
                            {React.cloneElement(e.icon, { className: styles.icon })}
                            {e.title}
                        </NavLink>)
                    }
                </nav>
            </aside>
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    )
}
