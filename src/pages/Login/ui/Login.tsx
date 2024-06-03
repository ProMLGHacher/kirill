import { classNames } from '@/shared/utils/classNames/classNames'
import styles from './Login.module.scss'
import Input from '@/shared/ui/Input/Input'
import Button from '@/shared/ui/Button/Button'
import { useActionState } from 'react'

export const Login = () => {

    const [state, submitAction, isPending] = useActionState<string, FormData>(
        async (previousState, formData) => {
            console.log(previousState);
            console.log(formData);

            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(null)
                }, 2000)
            })

            return ''
        }, '')

    return (
        <div className={classNames(styles.login, ['container'])}>
            <p>{`${state}`}</p>
            <p>{`${isPending}`}</p>
            <form action={submitAction} className={styles.form}>
                <h1>Регистрация</h1>
                <div className={styles.flex}>
                    <Input placeholder='Имя' name='name' />
                    <Input placeholder='Фамилия' name='firstname' />
                </div>
                <Input placeholder='Email' type='email' name='email' />
                <Input placeholder='Пароль' type='password' name='password' />
                <Button>Зарегистрироваться</Button>
            </form>
        </div>
    )
}
