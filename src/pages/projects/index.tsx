import * as React from "react";
import { Heading, Page, Title, Wrapper } from "../../components";
import { Project } from "../../components/Project";
import { ProjectGrid } from "../../components/ProjectGrid";
import { Spacer } from "../../components/Spacer";
import { configuration, jsonnull, novel } from "../../data/projects";
import * as past from "../../data/projects/past";

const Projects = () => {
    return (
        <Wrapper>
            <Spacer wide />
            <div className="flex justify-center">
                <Title>projects</Title>
            </div>
            <Spacer wide />
            <Heading>Work In Progress</Heading>
            <Spacer medium />
            <ProjectGrid projects={[jsonnull, configuration]} />
            <Spacer wide />
            <Heading>Writing</Heading>
            <Spacer medium />
            {[novel].map(({ name, description, milestones }) => {
                return (
                    <Project
                        key={name}
                        name={name}
                        description={description}
                        milestone={milestones[0].name}
                        progress={milestones[0].progress}
                    />
                );
            })}
            <Spacer wide />
            <Heading className="text-dimmed">Past Projects</Heading>
            <Spacer small />
            <p className="text-dimmed">
                These are projects which I no longer maintain, or which aren{"'"}t valuable enough
                for me to consider finishing at the moment.
            </p>
            <Spacer medium />
            <ProjectGrid retired projects={[past.reactRoutine, past.reactRedux]} />
        </Wrapper>
    );
};

Projects.getLayout = (page: React.ReactNode) => (
    <Page title="Projects" pagePath="/projects/">
        {page}
    </Page>
);

export default Projects;
