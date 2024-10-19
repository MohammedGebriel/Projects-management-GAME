
import MainHeader from "../../components/molecules/MainHeader";
import ServicesHeader from "../../components/templates/services/ServicesHeader";
import ServicesTable from "../../components/templates/services/ServicesTable";

export default function Services() {
    return (
        <div className="!overflow-x-hidden page">
            <MainHeader />
            <ServicesHeader />
            <ServicesTable />
        </div>
    )
}
