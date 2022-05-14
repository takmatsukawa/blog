import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import * as post1 from "./posts/example-markdown.mdx";
import * as post2 from "./posts/tama-new-town.mdx";
import * as post3 from "./posts/constructive-career-outlook.mdx";

type Module = {
  filename: string,
  attributes: {
    meta: any
  }
}

function postFromModule(mod: Module) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

type LoaderData = {
  posts: Array<{
    slug: string,
    title: string,
    description?: string,
    created: string,
  }>;
};

export async function loader() {
  return json<LoaderData>({
    posts: [
      postFromModule(post3),
      postFromModule(post2),
      postFromModule(post1),
    ]
  });
}

export default function Index() {
  const { posts } = useLoaderData() as LoaderData;

  return (
    <main>
      <ul className="container mx-auto  max-w-5xl mt-10 flex flex-col space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={"posts/" + post.slug} className="text-2xl underline">{post.title}
            </Link>
            <p className="text-gray-600 text-sm mt-1">{post.created}</p>
            {post.description ? (
              <p className="text-gray-600 text-sm">{post.description}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  );
}