import { promises } from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import type { GetStaticPaths, GetStaticProps } from "next";
import { Heading, Page, Wrapper } from "../../components";
import { getPosts } from "../../lib/getPosts";
import type { PostFrontMatter } from "../../types";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [];
    for await (const { slug } of getPosts()) {
        paths.push({ params: { slug } });
    }

    return {
        paths,
        fallback: false,
    };
};

interface PageProps {
    data: PostFrontMatter;
    content: string;
    path: string;
    slug: string;
}

export const getStaticProps: GetStaticProps = async (context): Promise<{ props: PageProps }> => {
    const path = (context.params?.slug as string[]).join("/");
    const slug = (context.params?.slug as string[]).join("-");

    const { data, content } = await promises
        .readFile(`./content/blog/${path}.md`)
        .then((buf) => matter(buf.toString(), { delimiters: "```" }));

    return {
        props: {
            data: data as PostFrontMatter,
            content,
            path,
            slug,
        },
    };
};

const Post = ({ data, content }: PageProps) => {
    return (
        <Wrapper>
            <Heading>{data.title}</Heading>
            <Markdown>{content}</Markdown>
        </Wrapper>
    );
};

Post.getLayout = (page: React.ReactNode, { data, path }: PageProps) => (
    <Page
        title={data.title}
        pagePath={`/blog/${path}/`}
        // ogImagePath={`/og-images/${slug}.png`}
    >
        {page}
    </Page>
);

export default Post;
