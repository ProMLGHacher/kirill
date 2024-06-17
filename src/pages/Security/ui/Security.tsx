import Input from '@/shared/ui/Input/Input'
import styles from './Security.module.scss'
import { useAppDispatch } from '@/app/hooks/storeHooks'
import LogOutButton from '@/features/logOut/ui/LogOutButton'
import Button from '@/shared/ui/Button/Button'
import { useEffect, useState, useActionState, useRef } from 'react'
import { userApi } from '@/entities/user'
import { isAxiosError } from 'axios'

export const Security = () => {

    const dispatch = useAppDispatch()

    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => {
                setIsSuccess(false)
                setDataChanged(false)
            }, 1500)
        }
    }, [isSuccess])


    const [error, submitAction, isPending] = useActionState<null | string, FormData>(
        async (_, formData) => {

            const password = formData.get('password')?.toString().trim()
            const newPassword = formData.get('newPassword')?.toString().trim()

            if (!password || !newPassword) {
                return 'Не все данные введены'
            }

            try {
                const responce = await userApi.changePassword({
                    oldPassword: password,
                    newPassword: newPassword
                })

                if (responce === 200) {
                    setIsSuccess(true)
                }
            } catch (error) {
                console.log(`${error}`);

                setDataChanged(false)

                if (isAxiosError(error)) {
                    if (error.response?.status === 400) {
                        return 'Не верный пароль'
                    }
                }
                return `${error}`
            }

            setIsSuccess(true)

            return null
        }, null)

    const [dataChanged, setDataChanged] = useState(false)

    const passwordRef = useRef<string>('')
    const newPasswordRef = useRef<string>('')

    const changeHandle = () => {
        if (passwordRef.current && newPasswordRef.current) {
            setDataChanged(true)
        } else {
            setDataChanged(false)
        }
    }

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        passwordRef.current = e.target.value
        changeHandle()
    }

    const onNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        newPasswordRef.current = e.target.value
        changeHandle()
    }

    return <div className={styles.security}>
        <div className={styles.title}>
            <img style={{ width: '22px', height: '22px' }} src={'/lock.svg'} alt="" />
            <h1>Настройки учетной записи</h1>
        </div>
        <form className={styles.form} action={submitAction}>
            <label htmlFor="password">
                Пароль
                <Input id='password' editableIcon name='password' placeholder='Пароль' onChange={onPasswordChange} required />
            </label>
            <label htmlFor="newPassword" >
                Новый пароль
                <Input id='newPassword' editableIcon name='newPassword' placeholder='Новый пароль' onChange={onNewPasswordChange} required />
            </label>
            <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '80%' }}>
                <Button full isPending={isPending} className={styles.saveButton} disabled={!dataChanged} variant={isSuccess ? 'success' : 'primary'} >{isSuccess ? 'Успешно' : 'Сохранить'}</Button>
                <LogOutButton full />
            </div>
            {error && <p style={{ color: 'red'}} className={styles.error}>{error}</p>}
        </form>
    </div>
}

