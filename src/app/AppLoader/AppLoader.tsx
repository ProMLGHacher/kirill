import { useEffect } from "react"
import { AppRouter } from "../router/AppRouter"
import { configureTokenInterceptors } from "../lib/tokenInterceptors"
import { useAppDispatch } from "../hooks/storeHooks"
import { initStateThunk } from "@/features/initState"


const AppLoader = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        configureTokenInterceptors()
        dispatch(initStateThunk())
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
