import { useAppDispatch } from '@/app/hooks/storeHooks'
import { registerThunk, requestRegistrationThunk } from '@/features/auth/register'
import Button from '@/shared/ui/Button/Button'
import Input from '@/shared/ui/Input/Input'
import { useActionState, useState } from 'react'
import styles from './RegistrationForm.module.scss'
import { Link } from 'react-router-dom'

export const RegistrationForm = () => {

    const [requestedEmail, setRequestedEmail] = useState<string>()

    const dispatch = useAppDispatch()

    const [requestRegistrationError, submitRequestRegistrationAction, requestRegistrationPending] =
        useActionState<null | string, FormData>(
            async (_, formData) => {

                const email = formData.get('email')?.toString().trim()
                const password = formData.get('password')?.toString().trim()
                const firstname = formData.get('firstname')?.toString().trim()
                const name = formData.get('name')?.toString().trim()

                if (!email || !password || !firstname || !name) {
                    return 'Не все поля введены'
                }


                try {
                    await dispatch(requestRegistrationThunk({
                        email: email,
                        firstName: firstname,
                        lastName: name,
                        password: password
                    })).unwrap()
                    setRequestedEmail(email)
                } catch (error) {
                    return `${error}`
                }

                return null
            }, null)

    const [registrationError, submitRegistrationAction, registrationPending] =
        useActionState<null | string, FormData>(
            async (_, formData) => {

                const code = formData.get('code')?.toString().trim()

                if (!code) {
                    return 'Введите код подтверждения'
                }
                if (!requestedEmail) {
                    return 'Непредвиденная ошибка'
                }


                try {
                    await dispatch(registerThunk({
                        email: requestedEmail,
                        code: code
                    })).unwrap()
                } catch (error) {
                    return `${error}`
                }

                return null
            }, null)


    if (requestedEmail) {
        return <form action={submitRegistrationAction} className={styles.form}>
            <h1>Подтверждение регистрации</h1>
            <Input placeholder='Код' name='code' required />
            <Button isPending={registrationPending}>Зарегистрироваться</Button>
            <p style={{ textAlign: 'center', color: 'red' }}>{registrationError}</p>
        </form>
    }

    return (
        <form action={submitRequestRegistrationAction} className={styles.form}>
            <h1>Регистрация</h1>
            <div className={styles.flex}>
                <Input placeholder='Имя' name='name' required />
                <Input placeholder='Фамилия' name='firstname' required />
            </div>
            <Input placeholder='Email' type='email' name='email' required />
            <Input placeholder='Пароль' type='password' name='password' required />
            <Button isPending={requestRegistrationPending}>Зарегистрироваться</Button>
            <Link to={'/login'} style={{ textAlign: 'center', color: 'white', textDecoration: 'underline' }}>Уже есть аккаунт?</Link>
            <p style={{ textAlign: 'center', color: 'red' }}>{requestRegistrationError}</p>
        </form>
    )
}
