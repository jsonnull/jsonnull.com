import clsx from "clsx";

export const Project = ({
    name,
    description,
    progress = 100,
    milestone,
    className,
    retired,
}: {
    name: string;
    description: string;
    progress?: number;
    milestone: string;
    className?: string;
    retired?: boolean;
}) => {
    return (
        <div className={clsx(className, "flex flex-col", retired && "text-dimmed")}>
            <div className="rounded-t pb-4 text-xl font-semibold">{name}</div>
            <div className="pb-6 text-sm">{description}</div>
            <div
                className={clsx(
                    "mt-auto flex",
                    "border border-solid border-zinc-500",
                    "pattern-lines pattern-bg-transparent pattern-fg-zinc-500"
                )}
            >
                <div
                    className={clsx(
                        "m-[-1px] flex h-6 min-w-[120px] items-center pl-2 pr-1",
                        "text-sm text-zinc-100 dark:font-bold dark:text-black",
                        "bg-zinc-900 dark:bg-zinc-200",
                        retired && "bg-zinc-700 dark:bg-zinc-400"
                    )}
                    style={{ width: `calc(${progress}% + 2px)` }}
                >
                    {milestone && <div>{milestone}</div>}
                    {progress !== 100 && <div className="ml-auto">{progress}%</div>}
                </div>
            </div>
        </div>
    );
};
