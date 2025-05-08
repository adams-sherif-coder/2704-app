import { Dropdown, DropdownItem } from 'flowbite-react'


import Header from './layouts/Header';
import TopNavbar from './layouts/TopNavbar';
import Footer from './layouts/Footer';

import { Route, Routes } from 'react-router'

import Users from './pages/Users';
import Products from './pages/Products';
import P404 from './pages/P404';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SingleProduct from './pages/SingleProduct';
import EditProduct from './pages/EditProduct';

export default function App() {
    // console.log('App Component rendered');

    return (
        <div className="h-screen">

            <Header />
            <TopNavbar />

            <Routes>
                <Route path='/:z' element={<Home />} />
                <Route path='/users' element={<Users />} />
                <Route path='/marketplace' element={<Products />} />
                <Route path='/marketplace/:id' element={<SingleProduct />} />
                <Route path='/marketplace/:id/edit' element={<EditProduct />} />
                <Route path='/contacts' element={<Contact />} />
                <Route path='*' element={<P404 />} />
            </Routes>


            <Footer />
        </div>
    )
}
