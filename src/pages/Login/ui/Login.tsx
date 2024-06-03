import { classNames } from '@/shared/utils/classNames/classNames'
import styles from './Login.module.scss'
import Input from '@/shared/ui/Input/Input'
import Button from '@/shared/ui/Button/Button'
import { useActionState } from 'react'
import { useAppDispatch } from '@/app/hooks/storeHooks'

export const Login = () => {

    const dispatch = useAppDispatch()

    const [state, submitAction, isPending] = useActionState<null | string, FormData>(
        async (previousState, formData) => {
            

            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(null)
                }, 2000)
            })

            return null
        }, null)

    return (
        <div className={classNames(styles.login, ['container'])}>
            <p>{`${state}`}</p>
            <form action={submitAction} className={styles.form}>
                <h1>Регистрация</h1>
                <div className={styles.flex}>
                    <Input placeholder='Имя' name='name' />
                    <Input placeholder='Фамилия' name='firstname' />
                </div>
                <Input placeholder='Email' type='email' name='email' />
                <Input placeholder='Пароль' type='password' name='password' />
                <Button isPending={isPending}>Зарегистрироваться</Button>
            </form>
        </div>
    )
}
