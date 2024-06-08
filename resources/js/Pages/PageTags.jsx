import GuestLayout from "@/Layouts/GuestLayout.jsx";
import { Link } from "@inertiajs/react";

export default function PageTags({ tags }) {
    return (
        <GuestLayout
            head={{
                title: "Tags",
            }}
        >
            <div className="flex flex-wrap">
                {tags.map((tag) => (
                    <span
                        key={tag.id}
                        className="inline-block px-4 py-2 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
                        style={{ fontSize: `${tag.posts_count * 2 + 12}px` }}
                    >
                        <Link href={route("tag", tag.slug)}>
                            #{tag.name} ({tag.posts_count})
                        </Link>
                    </span>
                ))}
            </div>
        </GuestLayout>
    );
}
