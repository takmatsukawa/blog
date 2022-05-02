import {
    Outlet,
} from "@remix-run/react";

export default function Posts() {
    return (
        <main className="mt-10 container mx-auto max-w-5xl">
            <article className="prose prose-slate">
                <Outlet />
            </article>
        </main>
    )
}