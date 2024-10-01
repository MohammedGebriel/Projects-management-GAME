
import MainHeader from "../../components/molecules/MainHeader";
import ServicesHeader from "../../components/templates/services/ServicesHeader";
import ServicesTable from "../../components/templates/services/ServicesTable";

export default function Services() {
    return (
        <div className=" flex flex-col gap-[15px] border-[2px] flex-1 bg-white border-[#EAEBF0] lg:mr-[10px]   p-[20px] ">
            <MainHeader />
            <ServicesHeader />
            <ServicesTable />
        </div>
    )
}
