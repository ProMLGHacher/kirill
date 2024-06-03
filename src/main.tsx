import {} from 'react/canary'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppLoader from './app/AppLoader/AppLoader'
import { Provider } from 'react-redux'
import store from './app/store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <AppLoader />
    </Provider>
)
