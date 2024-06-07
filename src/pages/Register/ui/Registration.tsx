import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Registration.module.scss'
import { useActionState } from 'react'
import { useAppDispatch } from '@/app/hooks/storeHooks'
import { requestRegistrationThunk } from '@/features/auth/register'
import { RegistrationForm } from '@/widgets/registrationForm/import'

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
                await dispatch(requestRegistrationThunk({
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
            <RegistrationForm />
        </div>
    )
}
