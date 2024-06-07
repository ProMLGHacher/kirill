import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Registration.module.scss'
import { RegistrationForm } from '@/widgets/registrationForm/import'

export const Registration = () => {
    return (
        <div className={classNames(styles.registration, ['container'])}>
            <RegistrationForm />
        </div>
    )
}
