import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { PersonalInfo } from './pages/PersonalInfo'
import { Destination } from './pages/Destination'
import { Success } from './pages/Success'
import { PageNotFound } from './pages/PageNotFound'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/personalInfo" element={<PersonalInfo />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/success" element={<Success />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}