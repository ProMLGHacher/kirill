import { useEffect, useState } from "react"
import { Loader } from "../../shared/ui/Loader/Loader"
import { AppRouter } from "../router/AppRouter"
import Skeleton from "../../shared/ui/Skeleton/Skeleton"

const AppLoader = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1200)
    }, [])

    if (loading) {
        return <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
            <Skeleton  />
            <Skeleton  />
            <Skeleton width="200px" />
        </div>
    }

    return (
        <AppRouter />
    )
}

export default AppLoader
