import MainHeader from "../../components/molecules/MainHeader";
import MaterialsHeader from "../../components/templates/materials/MaterialsHeader";
import MaterialsTable from "../../components/templates/materials/MaterialsTable";

export default function Materials() {
    return (
        <div className="!overflow-x-hidden page">
            <MainHeader />
            <MaterialsHeader />
            <MaterialsTable />
        </div>
    )
}
