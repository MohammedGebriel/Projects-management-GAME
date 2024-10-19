
import { Link } from "react-router-dom";
import { SectionHeader } from "../../components/atoms";
import MainHeader from "../../components/molecules/MainHeader";
import { BsFillPersonFill } from "react-icons/bs";
import ProjectMembers from "../../components/templates/members/ProjectMembers";
import CreateMember from "../../components/templates/members/CreateMember";

export default function Members() {
    return (
        <div className="page">
            <MainHeader />
            <div className="flex flex-col gap-2.5">
                <SectionHeader icon={<BsFillPersonFill />} header=" Project Members">
                    <div className="flex items-center gap-3">
                        <Link to='/' className="link">See All</Link>
                        <CreateMember />
                    </div>
                </SectionHeader>
                <ProjectMembers />
            </div>
        </div>
    )
}
