import {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body';
import Footer from './components/Footer';
import Error from './components/Error'
import { createBrowserRouter, BrowserRouter, Routes, Route, RouterProvider, Outlet } from 'react-router-dom'
import UserContext from './utils/UserContext'
import {useState} from 'react'
import Cart from './components/Cart'
import Restaurant from './components/Restaurant'
import UserContext from './utils/UserContext';
import {Provider} from 'react-redux'
import appStore from './utils/appStore'
const AppLayout = () => {
    const [userName, setUserName] = useState("Rohit Chugh")
    return (
        <Provider store={appStore}>
        <UserContext.Provider value ={{loggedInUser: userName, setUserName: setUserName}}>
            <div className='layout'>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </UserContext.Provider>
        </Provider>
    )
}
const About = lazy(()=> import('./components/About'));
const Contact = lazy(()=>import('./components/Contact'))
const router = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        errorElement: <Error/>,
        children:[
            {
                index: true,
                element: <Body/>
            },
            {
                path:'about',
                element: <Suspense fallback = {<h1>Loading...</h1>}><About/></Suspense>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
            // {
            //     path: 'restaurants/:id',
            //     element: <Restaurant/>
            // },
            {
                path: '/cart',
                element: <Cart/>
            }
        ],
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router = {router}/>)
// root.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path='/' element={<AppLayout/>} errorElement={<Error/>}/>
//             <Route path='/about' element = {<About/>}/>
//         </Routes>
//     </BrowserRouter>
// );


