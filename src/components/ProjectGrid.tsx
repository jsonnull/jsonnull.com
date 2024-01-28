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
            {projects.map((project) => {
                return <Project project={project} key={project.name} retired={retired} />;
            })}
        </div>
    );
};
