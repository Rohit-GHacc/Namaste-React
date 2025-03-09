import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About'
import Error from './components/Error'
import { createBrowserRouter, BrowserRouter, Routes, Route,RouterProvider } from 'react-router-dom'

const AppLayout = () => (
    <div className='layout'>
        <Header />
        <Body />
        <Footer />
    </div>
)
const router = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        errorElement: <Error/>
    },{
        path:'/about',
        element: <About/>
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


