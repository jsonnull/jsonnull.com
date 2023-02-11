import clsx from "clsx";
import { Project as ProjectType } from "../types";
import { Project } from "./Project";

export const ProjectGrid = ({
    projects,
    retired,
}: {
    projects: ProjectType[];
    retired?: boolean;
}) => {
    return (
        <div className={clsx("grid grid-flow-row grid-cols-1 gap-16 md:grid-cols-2")}>
            {projects.map(({ name, description, milestones }) => {
                return (
                    <Project
                        key={name}
                        name={name}
                        description={description}
                        milestone={milestones[0].name}
                        progress={milestones[0].progress}
                        retired={retired}
                    />
                );
            })}
        </div>
    );
};
