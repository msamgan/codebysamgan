import { formatDate } from "@/utils/methods.js";
import { Link } from "@inertiajs/react";
import TagList from "@/Components/Blog/TagList.jsx";

export default function PostListing({ posts }) {
    return (
        <div className="space-y-6">
            <ul className="space-y-8 xl:space-y-10">
                {posts.map((post) => {
                    return (
                        <li
                            key={post.id}
                            className={
                                post.featured_image ? "flex flex-row article-excerpt" : "w-full article-excerpt"
                            }
                        >
                            <article className={"border-b pb-6"}>
                                <dl>
                                    <dt className="sr-only">Published on</dt>
                                    <dd className="text-xs text-gray-600">
                                        <time
                                            dateTime={formatDate(
                                                post.publish_date,
                                            )}
                                        >
                                            {formatDate(post.publish_date)}
                                        </time>
                                    </dd>
                                </dl>
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-bold tracki">
                                        <Link
                                            rel="noopener noreferrer"
                                            href={route("post", post.slug)}
                                            className="text-gray-900"
                                        >
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="max-w-full text-gray-800 prose">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex flex-wrap space-x-3">
                                        <TagList tagArray={post.tags} />
                                    </div>
                                </div>
                            </article>
                            {post.featured_image ? (
                                <img
                                    className={"w-1/5 rounded-lg ml-3"}
                                    src={post.featured_image}
                                    alt={post.title}
                                />
                            ) : (
                                ""
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
