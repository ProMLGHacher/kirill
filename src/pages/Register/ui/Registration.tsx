import { classNames } from '@/shared/utils/classNames/classNames'
import styles from './Registration.module.scss'
import Input from '@/shared/ui/Input/Input'
import Button from '@/shared/ui/Button/Button'
import { useActionState } from 'react'
import { useAppDispatch } from '@/app/hooks/storeHooks'
import { registerThunk } from '@/features/auth/register'

export const Registration = () => {

    const dispatch = useAppDispatch()

    const [error, submitAction, isPending] = useActionState<null | string, FormData>(
        async (_, formData) => {

            const email = formData.get('email')?.toString().trim()
            const password = formData.get('password')?.toString().trim()
            const firstname = formData.get('firstname')?.toString().trim()
            const name = formData.get('name')?.toString().trim()

            if (!email || !password || !firstname || !name) {
                return 'Не все поля введены'
            }


            try {
                await dispatch(registerThunk({
                    email: email,
                    firstName: firstname,
                    lastName: name,
                    password: password
                })).unwrap()
            } catch (error) {
                return `${error}`
            }

            return null
        }, null)

    return (
        <div className={classNames(styles.registration, ['container'])}>
            <p>{`${error}`}</p>
            <form action={submitAction} className={styles.form}>
                <h1>Регистрация</h1>
                <div className={styles.flex}>
                    <Input placeholder='Имя' name='name' required />
                    <Input placeholder='Фамилия' name='firstname' required />
                </div>
                <Input placeholder='Email' type='email' name='email' required />
                <Input placeholder='Пароль' type='password' name='password' required />
                <Button isPending={isPending}>Зарегистрироваться</Button>
            </form>
        </div>
    )
}
