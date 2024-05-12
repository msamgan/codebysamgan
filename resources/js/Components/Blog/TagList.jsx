import { Link } from "@inertiajs/react";

export default function TagList({ tagArray }) {
    return (
        <div className="flex flex-wrap space-x-3">
            {tagArray.map((tag) => {
                return (
                    <Link
                        key={tag.id}
                        rel="noopener noreferrer"
                        href={route("tag", tag.slug)}
                        className="text-orange-600"
                    >
                        #{tag.name}
                    </Link>
                );
            })}
        </div>
    );
}
