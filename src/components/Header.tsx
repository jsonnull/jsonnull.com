import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import { GitHub, Home, Twitter } from "react-feather";
import { Theme } from "./Theme";

const PADDING = 8;

const useNavigation = (theme: string) => {
    const navRef = useRef<HTMLElement>();
    const homeRef = useRef<HTMLElement>();
    const projectsRef = useRef<HTMLElement>();
    const aboutRef = useRef<HTMLElement>();
    const router = useRouter();
    const [bounds, setBounds] = useState({ left: 10000, width: 0 });

    const path = router.pathname;

    const updateBounds = useCallback(() => {
        if (!navRef.current || !homeRef.current || !projectsRef.current || !aboutRef.current) {
            return;
        }

        const root = navRef.current.getBoundingClientRect();

        let navBounds;

        if (path === "/") {
            navBounds = homeRef.current.getBoundingClientRect();
        } else if (path === "/projects") {
            navBounds = projectsRef.current.getBoundingClientRect();
        } else if (path === "/about") {
            navBounds = aboutRef.current.getBoundingClientRect();
        } else {
            setBounds({ left: 10000, width: 0 });
            return;
        }

        const left = navBounds.x - root.x;
        const width = navBounds.width;

        setBounds({ left, width });
    }, [navRef, homeRef, projectsRef, aboutRef, setBounds, path]);

    useEffect(() => {
        updateBounds();
    }, [navRef, homeRef, projectsRef, aboutRef, setBounds, path, theme]);

    useEffect(() => {
        window.addEventListener("resize", updateBounds);
        return () => window.removeEventListener("resize", updateBounds);
    }, [updateBounds]);

    return {
        navRef,
        homeRef,
        projectsRef,
        aboutRef,
        left: bounds.left,
        width: bounds.width,
    };
};

const Separator = ({ className }: { className?: string }) => {
    return (
        <div className={clsx(className, "px-3 sm:px-6")}>
            <div className="w-0 border-l border-solid border-zinc-500 dark:border-zinc-500">
                &nbsp;
            </div>
        </div>
    );
};

const styles = {
    text: "dark:font-semibold text-white dark:text-black",
    homeText: "font-semibold dark:font-bold",
    underline: "underline-themed",
};

export const Header = () => {
    const [theme, setTheme] = useState("default");
    const { navRef, homeRef, projectsRef, aboutRef, left, width } = useNavigation(theme);

    return (
        <div
            className={clsx(
                styles.text,
                "pointer-events-none fixed inset-x-0 bottom-0 flex sm:inset-x-8 sm:bottom-8"
            )}
        >
            <nav
                className="pointer-events-auto relative flex w-full items-center bg-black/80 py-4 pl-4 pr-2 backdrop-blur dark:bg-white/80 sm:mx-auto sm:w-auto sm:rounded-md sm:px-6 sm:pr-4"
                ref={navRef as any}
            >
                <div
                    className="z-1 absolute h-8 rounded-lg bg-black/90 transition-[left,width] ease-in dark:bg-zinc-400/90"
                    style={{
                        left: `${left - PADDING}px`,
                        width: `${width + PADDING * 2}px`,
                    }}
                >
                    &nbsp;
                </div>
                <div className="z-1 z-10 flex w-full items-center">
                    <Link href="/" className={clsx(styles.underline)} ref={homeRef as any}>
                        <span className={clsx(styles.homeText, "hidden sm:inline")}>jsonnull</span>
                        <Home
                            className={clsx("block sm:hidden", styles.text)}
                            width={18}
                            height={18}
                        />
                    </Link>
                    <Separator />
                    <ul className="flex gap-3 sm:gap-6">
                        {(
                            [
                                ["/projects/", "projects", projectsRef],
                                // ['/blog/', 'blog'],
                                ["/about/", "about", aboutRef],
                            ] as [string, string, MutableRefObject<HTMLAnchorElement>][]
                        ).map(([url, title, ref]) => {
                            return (
                                <li key={url}>
                                    <Link href={url} className={clsx(styles.underline)} ref={ref}>
                                        {title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <Separator className="pr-1 sm:pr-4" />
                    <Theme onChange={(theme) => setTheme(theme)} />
                    <Separator className="hidden px-1 sm:block sm:px-4" />
                    <ul className="ml-auto flex items-center gap-1 leading-none text-zinc-400 dark:text-zinc-600 sm:gap-2">
                        {(
                            [
                                [GitHub, "https://github.com/jsonnull"],
                                [Twitter, "https://twitter.com/jsonnull"],
                            ] as [any, string][]
                        ).map(([Icon, href]) => {
                            return (
                                <a
                                    href={href}
                                    key={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full p-2 hover:bg-zinc-600 hover:text-white dark:hover:bg-zinc-400 dark:hover:text-black"
                                >
                                    <Icon width={18} height={18} />
                                </a>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    );
};
