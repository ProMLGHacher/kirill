import LogOutButton from '@/features/logOut/ui/LogOutButton'
import styles from './Profile.module.scss'

export const Profile = () => {
    return (
        <div className={styles.profile}>
            <LogOutButton />
        </div>
    )
}
