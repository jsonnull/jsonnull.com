import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, GitHub } from "react-feather";
import { Heading, Page, Wrapper } from "../components";
import { Button } from "../components/Button";
import { ProjectGrid } from "../components/ProjectGrid";
import { Spacer } from "../components/Spacer";
import { electronTrpc, jsonnull } from "../data/projects";
import { profileDataURI } from "../lib/profileDataURI";

export const Title = ({ className }: { className?: string }) => {
    return (
        <h1 className={clsx("pt-4 text-4xl font-semibold tracking-tight sm:text-5xl", className)}>
            Crafting{" "}
            <span className="bg-gradient-to-r from-fog to-steel bg-clip-text text-transparent">
                experiences
            </span>{" "}
            with code.
        </h1>
    );
};

const TitleSection = () => {
    return (
        <div className="flex flex-col items-center">
            <Image
                src={profileDataURI}
                alt="Picture of the author"
                width="80"
                height="80"
                className="rounded-full"
            />
            <Title />
        </div>
    );
};

const Home = () => {
    return (
        <Wrapper>
            <Spacer extraWide />
            <TitleSection />
            <Spacer extraWide />
            <div className="flex flex-col items-center">
                <Heading>Projects</Heading>
            </div>
            <Spacer medium />
            <ProjectGrid projects={[electronTrpc, jsonnull]} />
            <Spacer medium />
            <div className="flex justify-center">
                <Link href="/projects">
                    <Button>
                        <div className="flex items-center gap-2 sm:hover:underline">
                            See my other projects
                            <ArrowRight size={18} />
                        </div>
                    </Button>
                </Link>
            </div>
        </Wrapper>
    );
};

Home.getLayout = (page: React.ReactNode) => (
    <Page title="Home" pagePath="/" ogImagePath="/og-images/index.png">
        {page}
    </Page>
);

export default Home;
