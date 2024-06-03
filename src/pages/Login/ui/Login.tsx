import { classNames } from '@/shared/utils/classNames/classNames'
import styles from './Login.module.scss'
import Input from '@/shared/ui/Input/Input'
import Button from '@/shared/ui/Button/Button'
import { useActionState } from 'react'

export const Login = () => {

    

    return (
        <div className={classNames(styles.login, ['container'])}>
            <form className={styles.form}>
                <h1>Регистрация</h1>
                <div className={styles.flex}>
                    <Input placeholder='Имя' />
                    <Input placeholder='Фамилия' />
                </div>
                <Input placeholder='Email' type='email' />
                <Input placeholder='Пароль' type='password' />
                <Button>Зарегистрироваться</Button>
            </form>
        </div>
    )
}
