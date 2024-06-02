import { useState, useEffect } from "react"
import { AppRouter } from "../router/AppRouter"
import { configureTokenInterceptors } from "../lib/tokenInterceptors"
import { useAppDispatch } from "../hooks/storeHooks"
import { getUserThunk } from "@/features/user/getUser"


const AppLoader = () => {

    const [loading, setLoading] = useState(true)

    const dispatch = useAppDispatch()

    useEffect(() => {
        configureTokenInterceptors()
        dispatch(getUserThunk())
    }, [])

    // if (loading) {
    //     return <div style={{ display: 'flex', alignItems:'center', justifyContent: 'center', gap: '20px', height: '100%' }}>
    //         <Loader />
    //     </div>
    // }

    return (
        <AppRouter />
    )
}

export default AppLoader
