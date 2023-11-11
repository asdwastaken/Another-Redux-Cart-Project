import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import CartPopUp from './CartPopUp/CartPopUp';

export default function RoutesComp() {
    return (
        <Routes>
            <Route path='/' element={<Home />}>
                <Route path='/cart' element={<CartPopUp />}></Route>
                <Route path='/checkout' element={<CartPopUp />}></Route>
                <Route path='/shipping' element={<CartPopUp />}></Route>
                <Route path='/done' element={<CartPopUp />}></Route>
            </Route>
        </Routes>
    )
}