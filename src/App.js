import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About'
import Error from './components/Error'
import Contact from './components/Contact'
import { createBrowserRouter, BrowserRouter, Routes, Route,RouterProvider, Outlet } from 'react-router-dom'
import Restaurant from './components/Restaurant'
const AppLayout = () => (
    <div className='layout'>
        <Header />
        <Outlet />
        <Footer />
    </div>
)
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
                element: <About/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
            {
                path: 'restaurants/:id',
                element: <Restaurant/>
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


