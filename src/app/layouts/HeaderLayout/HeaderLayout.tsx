import { Header } from '@/widgets/header/'
import { Outlet } from 'react-router-dom'

const HeaderLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default HeaderLayout