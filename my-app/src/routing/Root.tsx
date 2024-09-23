import { Outlet } from "react-router-dom";
import Layout from "../components/organisms/Layout";

export default function Root() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    )
} 
