import LogOutButton from '@/features/logOut/ui/LogOutButton'
import styles from './Profile.module.scss'
import Input from '@/shared/ui/Input/Input'
import Button from '@/shared/ui/Button/Button'
import { useActionState, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks/storeHooks'
import { User, selectUser } from '@/entities/user'
import { updateUserThunk } from '@/features/user/updateUser/model/updateUser'

export const Profile = () => {

    const user = useAppSelector(selectUser)

    const dispatch = useAppDispatch()

    const [error, submitAction, isPending] = useActionState<null | string, FormData>(
        async (_, formData) => {

            const firstName = formData.get('firstName')?.toString().trim()
            const lastName = formData.get('lastName')?.toString().trim()
            const phone = formData.get('phone')?.toString().trim()
            const email = formData.get('email')?.toString().trim()

            if (!firstName || !lastName) {
                setDataChanged(false)
                return 'Не все данные введены'
            }

            try {
                await dispatch(updateUserThunk({
                    firstName: firstName,
                    lastName: lastName
                })).unwrap()
            } catch (error) {
                setDataChanged(false)
                return `${error}`
            }

            return null
        }, null)

    const [dataChanged, setDataChanged] = useState(false)

    const changeHandle = () => {
        if (!dataChanged) {
            setDataChanged(true)
        }
    }

    return (
        <div className={styles.profile}>
            <div className={styles.title}>
                <img style={{ width: '22px', height: '22px' }} src={'/profile-circle.svg'} alt="" />
                <h1>Настройки учетной записи</h1>
            </div>
            <form action={submitAction}>
                <div className={styles.grid}>
                    <label htmlFor="name">
                        Имя
                        <Input defaultValue={user?.firstName} onChange={changeHandle} id='name' />
                    </label>
                    <label htmlFor="firstName">
                        Фамилия
                        <Input defaultValue={user?.lastName} onChange={changeHandle} id='lastName' />
                    </label>
                    <label htmlFor="email">
                        Email
                        <Input defaultValue={user?.email} onChange={changeHandle} id='email' />
                    </label>
                    <label htmlFor="phone">
                        Номер телефона
                        <Input defaultValue={user?.phone} onChange={changeHandle} id='phone' />
                    </label>
                </div>
                <div className='row' style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: '30%' }}>
                    <Button full isPending={isPending} className={styles.saveButton} disabled={!dataChanged}>Сохранить</Button>
                    <LogOutButton full />
                </div>
                <p style={{ marginTop: '20px', color: 'red' }}>{error}</p>
            </form>
        </div>
    )
}
