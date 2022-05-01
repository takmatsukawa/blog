import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import * as postA from "./posts/first-post.mdx";

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
    description: string,
  }>;
};

export async function loader() {
  return json<LoaderData>({
    posts: [
      postFromModule(postA),
    ]
  });
}

export default function Index() {
  const {posts} = useLoaderData() as LoaderData;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={"posts/" + post.slug}>{post.title}</Link>
          {post.description ? (
            <p>{post.description}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}