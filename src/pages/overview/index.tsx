import SearchMapImage from '../../assets/Search Map.png';
import OverviewDetails from "../../components/templates/overview/OverviewDetails";
import OverviewPhases from "../../components/templates/overview/OverviewPhases";
import MainHeader from "../../components/molecules/MainHeader";

export default function Overview() {
    return (
        <div className="page">
            <MainHeader />
            <div className="search-map ">
                <img src={SearchMapImage} className="w-full min-h-36" alt="" />
            </div>
            <OverviewDetails />
            <OverviewPhases  />
        </div>
    )
}
