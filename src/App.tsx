import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { store } from './store';
import { Provider } from 'react-redux';
import { ProtectedRoute } from './ProtectedRoute';
import { Logout } from './pages/Logout';


function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    } />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App
