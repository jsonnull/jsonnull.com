import clsx from "clsx";
import * as React from "react";

export const Button = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={clsx(
                "cursor-pointer bg-zinc-900 p-3 px-6 font-semibold text-white dark:bg-zinc-200 dark:font-bold dark:text-black",
                className
            )}
        >
            {children}
        </div>
    );
};
