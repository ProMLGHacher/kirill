import { useState, useEffect } from "react"
import { AppRouter } from "../router/AppRouter"
import { Loader } from "@/shared/ui/Loader/Loader"


const AppLoader = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1200)
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
