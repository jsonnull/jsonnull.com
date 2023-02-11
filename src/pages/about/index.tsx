import * as React from "react";
import { Page, Title, Wrapper } from "../../components";
import { Spacer } from "../../components/Spacer";

const About = () => {
    return (
        <Wrapper>
            <Spacer wide />
            <div className="flex justify-center">
                <Title>about</Title>
            </div>
            <Spacer wide />
            <p>This site was generated by Next.js.</p>
            <Spacer wide />
        </Wrapper>
    );
};

About.getLayout = (page: React.ReactNode) => (
    <Page title="About" pagePath="/about">
        {page}
    </Page>
);

export default About;