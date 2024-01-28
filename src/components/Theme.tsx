import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useCallback, useEffect, useLayoutEffect, useState } from "react";
import { Monitor, Moon, Sun } from "react-feather";
import { usePopper } from "react-popper";

const themes: [string, any, string][] = [
    ["light", Sun, "Light"],
    ["dark", Moon, "Dark"],
    ["system", Monitor, "System"],
];

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const applyTheme = (theme: string) => {
    if (
        theme === "dark" ||
        (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
};

const useTheme = ({ onChange }: { onChange: (theme: string) => void }) => {
    const initialTheme =
        typeof window !== "undefined" && "theme" in localStorage ? localStorage.theme : "system";

    const [theme, setThemeState] = useState(initialTheme);

    const setTheme = useCallback(
        (theme: string) => {
            setThemeState(theme);
            localStorage.theme = theme;
            applyTheme(theme);
            if (onChange) {
                onChange(theme);
            }
        },
        [setThemeState],
    );

    useIsomorphicLayoutEffect(() => {
        applyTheme(initialTheme);
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        mediaQuery.addEventListener("change", () => applyTheme(theme));

        return () => {
            mediaQuery.removeEventListener("change", () => applyTheme(theme));
        };
    }, []);

    return [theme, setTheme];
};

export const Theme = ({ onChange }: { onChange: (theme: string) => void }) => {
    const [theme, setTheme] = useTheme({ onChange });
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement);

    return (
        <Listbox value={theme} onChange={setTheme}>
            <Listbox.Button
                ref={setReferenceElement as any}
                className="rounded-full p-2 hover:bg-zinc-600 dark:hover:bg-zinc-400"
            >
                <Sun width={18} height={18} className="block dark:hidden" />
                <Moon width={18} height={18} className="hidden dark:block" />
            </Listbox.Button>
            <Listbox.Options
                ref={setPopperElement as any}
                className="mb-3 overflow-hidden rounded bg-black text-white dark:bg-white dark:text-black "
                style={styles.popper}
                {...attributes.popper}
            >
                {themes.map(([theme, Icon, display]) => {
                    return (
                        <Listbox.Option value={theme} key={theme} as={Fragment}>
                            {({ selected }) => {
                                return (
                                    <li
                                        className={clsx(
                                            "flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-zinc-900/50 dark:hover:bg-zinc-400/50",
                                            selected && "text-sky",
                                        )}
                                    >
                                        <Icon className="block" width={18} height={18} /> {display}
                                    </li>
                                );
                            }}
                        </Listbox.Option>
                    );
                })}
            </Listbox.Options>
        </Listbox>
    );
};
