import { Route, Routes } from 'react-router-dom';
import {
    NewProject,
    Inspections,
    Materials,
    Members,
    Overview,
    Projects,
    Reconcile,
    Reports,
    Services,
    Statistics,
    WBS,
    Deducts,
    Orders,
    Swaps,
    Returns,
} from '../pages';
import Root from './Root';
import MileStones from '../pages/milestones';

export default function AllRoutesProvider() {
    return (
        <Routes>
        <Route path="/" element={<Root />}>
            <Route index element={<Projects />} />
            <Route path="projects/:id/overview" element={<Overview />} />
            <Route path="projects/:id/statistics" element={<Statistics />} />
            <Route path="projects/:id/wbs" element={<WBS />} />
            <Route path="projects/:id/milestones" element={<MileStones />} />
            <Route path="projects/:id/inspections" element={<Inspections />} />
            <Route path="projects/:id/reports" element={<Reports />} />
            <Route path="projects/:id/reconcile" element={<Reconcile />} />
            <Route path="projects/:id/materials" element={<Materials />} />
            <Route path="projects/:id/materials/deducts" element={<Deducts />} />
            <Route path="projects/:id/materials/orders" element={<Orders />} />
            <Route path="projects/:id/materials/swaps" element={<Swaps />} />
            <Route path="projects/:id/materials/returns" element={<Returns />} />
            <Route path="projects/:id/services" element={<Services />} />
            <Route path="projects/:id/members" element={<Members />} />
            <Route path="new-project" element={<NewProject />} />
        </Route>
        </Routes>
    );
}
