import {
    Link,
    Outlet,
    useLoaderData,
} from "@remix-run/react";

export default function Posts() {
    return (
        <div>
            <main className="col-span-4 md:col-span-3">
                <Outlet />
            </main>
        </div>
    )
}