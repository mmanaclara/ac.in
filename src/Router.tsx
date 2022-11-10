import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { PersonalInfo } from './pages/PersonalInfo'
import { Destination } from './pages/Destination'
import { DefaultLayout } from './components/layouts/DefaultLayout'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/personalInfo" element={<PersonalInfo />} />
                <Route path="/destination" element={<Destination />} />
            </Route>
        </Routes>
    )
}