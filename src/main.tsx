import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store/store'
import AppLoader from './app/AppLoader/AppLoader'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <AppLoader />
    </Provider>
)
