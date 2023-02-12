import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { GitHub, Home } from "react-feather";
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
    underline: "sm:hover:underline",
};

export const Header = () => {
    const [theme, setTheme] = useState("default");
    const { navRef, homeRef, projectsRef, aboutRef, left, width } = useNavigation(theme);

    return (
        <div
            className={clsx(
                styles.text,
                "pointer-events-none fixed inset-x-4 bottom-4 flex sm:inset-x-8 sm:bottom-8"
            )}
        >
            <nav
                className="pointer-events-auto relative mx-auto flex w-auto items-center rounded-md bg-black/80 px-6 py-4 backdrop-blur dark:bg-white/80"
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
                    <ul className="flex items-center gap-3 sm:gap-6">
                        {(
                            [
                                ["/projects/", "projects", projectsRef],
                                // ['/blog/', 'blog'],
                                ["/about/", "about", aboutRef],
                            ] as [string, ReactNode, MutableRefObject<HTMLAnchorElement>][]
                        ).map(([url, title, ref]) => {
                            return (
                                <li key={url}>
                                    <Link href={url} className={clsx(styles.underline)} ref={ref}>
                                        {title}
                                    </Link>
                                </li>
                            );
                        })}
                        <li>
                            <Link
                                href={"https://github.com/jsonnull"}
                                className={clsx(styles.underline)}
                                target="_blank"
                            >
                                <GitHub width={18} height={18} className="" />
                            </Link>
                        </li>
                    </ul>
                    <Separator className="pr-1 sm:pr-4" />
                    <Theme onChange={(theme) => setTheme(theme)} />
                </div>
            </nav>
        </div>
    );
};
