import { useAppDispatch } from '@/app/hooks/storeHooks'
import Button from '@/shared/ui/Button/Button'
import { logOutThunk } from '../model/logOut'

const LogOutButton = () => {

    const dispatch = useAppDispatch()

    return (
        <Button onClick={() => { dispatch(logOutThunk()) }}>LogOutButton</Button>
    )
}

export default LogOutButton