import clsx from "clsx";
import * as React from "react";

export * from "./Header";
export * from "./Page";
export * from "./Title";

export const Wrapper = (props: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={clsx("inset-x-0 mx-auto w-full max-w-[900px] px-8", props.className)}>
            {props.children}
        </div>
    );
};

export const Heading = (props: { children: React.ReactNode; className?: string }) => {
    // <h1 className={clsx("text-2xl font-semibold text-zinc-500", props.className)}>
    return <h1 className={clsx("text-xl font-semibold", props.className)}>{props.children}</h1>;
};
