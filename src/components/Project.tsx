import clsx from "clsx";
import { Project as ProjectType } from "../types";

export const Project = ({
    project,
    className,
    retired,
}: {
    project: ProjectType;
    className?: string;
    retired?: boolean;
}) => {
    const { name, description, milestones, tags, website } = project;
    const { name: milestone, progress = 100 } = milestones[0];

    let title = <h3 className="text-xl font-semibold leading-tight">{name}</h3>;

    return (
        <section className={clsx(className, "flex flex-col", retired && "text-dimmed")}>
            <div className="flex flex-row items-center gap-2">
                {website && (
                    <a href={website.url} target="_blank" className="hover:underline">
                        {title}
                    </a>
                )}
                {!website && title}
            </div>
            <div className="text pt-4">
                {description}{" "}
                {website && (
                    <a
                        href={website.url}
                        target="_blank"
                        className="text-dimmed text-sm hover:underline"
                    >
                        {website.title}
                    </a>
                )}
            </div>
            {tags?.length && (
                <div className="flex flex-row gap-2 pt-4 text-sm">
                    {tags.map((tag) => (
                        <div className="text-dimmed">{tag}</div>
                    ))}
                </div>
            )}
            <div className="mt-auto h-6" />
            <div
                className={clsx(
                    "flex",
                    "rounded border border-solid border-zinc-500",
                    "pattern-lines pattern-bg-transparent pattern-fg-zinc-500"
                )}
            >
                <div
                    className={clsx(
                        "m-[-1px] flex h-6 min-w-[120px] items-center pl-2 pr-1",
                        "text-sm text-zinc-100 dark:font-bold dark:text-black",
                        "bg-zinc-900 dark:bg-zinc-200",
                        retired && "bg-zinc-500 dark:bg-zinc-500",
                        progress === 100 ? "rounded" : "rounded-l"
                    )}
                    style={{ width: `calc(${progress}% + 2px)` }}
                >
                    {milestone && <div>{milestone}</div>}
                    {progress !== 100 && <div className="ml-auto">{progress}%</div>}
                </div>
            </div>
        </section>
    );
};
