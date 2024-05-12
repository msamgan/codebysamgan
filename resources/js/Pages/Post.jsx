import GuestLayout from "@/Layouts/GuestLayout.jsx";
import { formatDate } from "@/utils/methods.js";
import TagList from "@/Components/Blog/TagList.jsx";
import { Link } from "@inertiajs/react";
import Giscus from "@giscus/react";

export default function Post({ post, relatedPosts }) {
    return (
        <GuestLayout
            head={{
                title: post.title,
                description: post.excerpt,
                keywords: post.tags.map((tag) => tag.name),
                metaTags: {
                    "og:type": "article",
                    "og:title": post.title,
                    "og:url": route("post", post.slug),
                    "og:image": post.featured_image,
                    "og:description": post.excerpt,
                    "article:author": post.author.name,
                    "article:published_time": post.publish_date,
                    "article:modified_time": post.updated_at,
                    "article:section": post.title,
                    "article:tag": post.tags.map((tag) => tag.name),
                    "twitter:card": "summary",
                    "twitter:site": "@codebysamgan",
                    "twitter:title": post.title,
                    "twitter:description": post.excerpt,
                    "twitter:image": post.featured_image,
                },
            }}
        >
            <div className="px-6 mx-auto space-y-12 post">
                <article className="space-y-8 bg-gray-100 text-gray-900">
                    <div className="space-y-6">
                        <h1 className="text-5xl font-bold md:tracki md:text-5xl">
                            {post.title}
                        </h1>
                        {post.featured_image ? (
                            <img
                                className={"rounded-lg"}
                                src={post.featured_image}
                                alt={post.title}
                            />
                        ) : null}
                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-600">
                            <div className="flex items-center md:space-x-2">
                                <p className="text-sm">
                                    {post.author.name} •{" "}
                                    {formatDate(post.publish_date)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-800">
                        {post.body && (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: post.body,
                                }}
                            ></div>
                        )}
                    </div>
                </article>
                <div>
                    <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed border-gray-600">
                        <TagList tagArray={post.tags} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-semibold">Related posts</h4>
                        <ul className="ml-4 space-y-1 list-disc">
                            {relatedPosts.map((post) => {
                                return (
                                    <li key={post.id}>
                                        <Link
                                            rel="noopener noreferrer"
                                            href={route("post", post.slug)}
                                            className="hover:underline"
                                        >
                                            {post.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Comments</h4>
                    <Giscus
                        id="comments"
                        src="https://giscus.app/client.js"
                        repo="msamgan/blog-comments"
                        repoId="R_kgDOIT1xSg"
                        category="General"
                        categoryId="DIC_kwDOIT1xSs4CSMzg"
                        mapping="title"
                        strict="0"
                        reactionsEnabled="1"
                        emitMetadata="0"
                        inputPosition="bottom"
                        theme="light"
                        lang="en"
                        crossorigin="anonymous"
                        loading={"lazy"}
                        async
                    ></Giscus>
                </div>
            </div>
        </GuestLayout>
    );
}
