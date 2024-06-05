import { useAppDispatch } from '@/app/hooks/storeHooks'
import Button, { ButtonProps } from '@/shared/ui/Button/Button'
import { logOutThunk } from '../model/logOut'

interface LogOutButtonProps extends ButtonProps {}

const LogOutButton = (props: LogOutButtonProps) => {

    const dispatch = useAppDispatch()

    return (
        <Button {...props} outlined onClick={() => { dispatch(logOutThunk()) }}>Выйти </Button>
    )
}

export default LogOutButton