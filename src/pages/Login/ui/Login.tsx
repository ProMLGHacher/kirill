import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Login.module.scss'
import Input from '@/shared/ui/Input/Input'
import Button from '@/shared/ui/Button/Button'
import { useActionState } from 'react'
import { useAppDispatch } from '@/app/hooks/storeHooks'
import { loginThunk } from '@/features/auth/login'
import { Link } from 'react-router-dom'

export const Login = () => {

    const dispatch = useAppDispatch()

    const [error, submitAction, isPending] = useActionState<null | string, FormData>(
        async (_, formData) => {

            const email = formData.get('email')?.toString().trim()
            const password = formData.get('password')?.toString().trim()

            if (!email || !password) {
                return 'Не все данные введены'
            }

            try {
                await dispatch(loginThunk({
                    email: email,
                    password: password
                })).unwrap()
            } catch (error) {
                return `${error}`
            }

            return null
        }, null)

    return (
        <div className={classNames(styles.login, ['container'])}>
            <form action={submitAction} className={styles.form}>
                <h1>Вход</h1>
                <label htmlFor="email">
                    Email
                    <Input placeholder='Email' type='email' name='email' required />
                </label>
                <label htmlFor="password">
                    Пароль
                    <Input placeholder='Пароль' type='password' name='password' required />
                </label>
                <Button style={{ width: '50%' }} isPending={isPending}>Войти</Button>
                <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
                <Link to={'/registration'} style={{ textAlign: 'center', color: 'white', textDecoration: 'underline' }}>Зарегистрироваться</Link>
            </form>
        </div>
    )
}
