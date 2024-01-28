import clsx from "clsx";
import Head from "next/head";
import * as React from "react";
import { Header } from "./";
import { Spacer } from "./Spacer";

export const Page = ({
    children,
    title = "Welcome",
    description = "Jason Nall's technical blog",
    pagePath,
    ogImagePath,
}: {
    children: React.ReactNode;
    title?: string;
    description?: string;
    pagePath: string;
    ogImagePath?: string;
}) => {
    const baseUrl =
        process.env.NEXT_PUBLIC_NETLIFY_URL && process.env.NEXT_PUBLIC_NETLIFY_URL !== ""
            ? process.env.NEXT_PUBLIC_NETLIFY_URL
            : process.env.NEXT_PUBLIC_SITE_URL;

    const domain = new URL(baseUrl!).hostname;
    const pageUrl = new URL(pagePath, baseUrl);

    let ogImageURL;
    if (ogImagePath) {
        ogImageURL = new URL(ogImagePath, baseUrl);
    }

    return (
        <div
            className={clsx(
                "flex min-h-screen flex-col bg-white text-black dark:bg-black dark:text-zinc-200",
                "decoration-black underline-offset-2 dark:decoration-zinc-200",
            )}
        >
            <Head>
                {/* Meta tags */}
                <title>{title} | Jason Nall</title>
                <meta name="description" content={description} />

                {/* Open Graph meta tags */}
                <meta property="og:url" content={pageUrl.toString()} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                {ogImageURL && <meta property="og:image" content={ogImageURL.toString()} />}

                {/* Twitter meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content={domain} />
                <meta property="twitter:url" content={pageUrl.toString()} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                {ogImageURL && <meta name="twitter:image" content={ogImageURL.toString()} />}
            </Head>
            <Header />
            <div className="flex flex-col">{children}</div>
            <Spacer extraWide />
        </div>
    );
};
