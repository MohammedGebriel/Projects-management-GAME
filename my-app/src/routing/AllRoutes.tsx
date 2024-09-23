import { Route, Routes } from 'react-router-dom'
import { Overview, Phases, Projects, Services } from '../pages'
import Root from './Root'
export default function AllRoutesProvider() {
    return (
            <Routes>
                <Route path="/" element={<Root />} >
                    <Route index  element={<Projects />}/>
                    <Route path="projects/:id" element={<Overview />}/>
                    <Route path="projects/:id/phases" element={<Phases />}/>
                    <Route path="projects/:id/services" element={<Services />}/>
                </Route>
            </Routes>
    )
}
