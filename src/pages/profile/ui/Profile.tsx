import LogOutButton from '@/features/logOut/ui/LogOutButton'
import styles from './Profile.module.scss'
import Input from '@/shared/ui/Input/Input'
import Button from '@/shared/ui/Button/Button'
import { useActionState, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks/storeHooks'
import { selectUser } from '@/entities/user'
import { updateUserThunk, updateUserEmailThunk, updateUserPhoneThunk } from '@/features/user/updateUser'
import { mapPhone } from '@/shared/lib/mapPhone/mapPhone'

export const Profile = () => {

    const user = useAppSelector(selectUser)

    const dispatch = useAppDispatch()

    const [error, submitAction, isPending] = useActionState<null | string, FormData>(
        async (_, formData) => {

            const firstName = formData.get('firstName')?.toString().trim()
            const lastName = formData.get('lastName')?.toString().trim()
            const phone = formData.get('phone')?.toString().trim()
            const email = formData.get('email')?.toString().trim()

            if (!firstName || !lastName || !email) {
                return 'Не все данные введены'
            }

            if (phone?.length && phone.length !== 10) {
                return 'Некорректный номер телефона'
            }

            if (email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                return 'Некорректный email'
            }

            try {
                if (firstName && lastName && (user?.firstName !== firstName || user?.lastName !== lastName)) {
                    await dispatch(updateUserThunk({
                        firstName: firstName,
                        lastName: lastName
                    })).unwrap()
                }
            } catch (error) {
                console.log(`${error}`);

                setDataChanged(false)
                return `${error}`
            }

            try {
                if (phone && user?.phone !== phone) {
                    await dispatch(updateUserPhoneThunk({
                        phone: phone
                    })).unwrap()
                }
            } catch (error) {
                console.log(`${error}`);
                setDataChanged(false)
                return `${error}`
            }

            try {
                if (email && user?.email !== email) {
                    await dispatch(updateUserEmailThunk({
                        email: email
                    })).unwrap()
                }
            } catch (error) {
                console.log(`${error}`);
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

    const [phone, setPhone] = useState(user?.phone)

    const phoneChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value)
        changeHandle()
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
                        <Input defaultValue={user?.firstName} onChange={changeHandle} id='name' name='firstName' />
                    </label>
                    <label htmlFor="lastName">
                        Фамилия
                        <Input defaultValue={user?.lastName} onChange={changeHandle} id='lastName' name='lastName' />
                    </label>
                    <label htmlFor="email">
                        Email
                        <Input defaultValue={user?.email} onChange={changeHandle} id='email' name='email' />
                    </label>
                    <label htmlFor="phone">
                        Номер телефона
                        <Input value={mapPhone(phone || '')} onChange={phoneChangeHandle} id='phone' name='phone' />
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
