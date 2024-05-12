import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

export default function Header() {
    const [pages, setPages] = useState(
        JSON.parse(localStorage.getItem("pages")) || [],
    );

    const [topTags, setTopTags] = useState(
        JSON.parse(localStorage.getItem("topTags")) || [],
    );

    useEffect(() => {
        fetch(route("page.list"))
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("pages", JSON.stringify(data));

                if (pages.length === 0) {
                    setPages(data);
                }
            });

        fetch(route("top.tags"))
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("topTags", JSON.stringify(data));

                if (topTags.length === 0) {
                    setTopTags(data);
                }
            });
    }, []);

    return (
        <div className={"border-b bg-orange-600"}>
            <header className="container flex items-center justify-between w-full max-w-3xl px-6 py-10 mx-auto xl:max-w-5xl border-b">
                <Link
                    rel="noopener noreferrer"
                    href="/"
                    className="block h-6 text-2xl font-semibold text-white"
                >
                    {import.meta.env.VITE_APP_NAME}
                </Link>
                <div className="flex items-center">
                    <div className="hidden space-x-2 font-medium sm:block text-white">
                        <a
                            rel="noopener noreferrer"
                            href={route("page.tags")}
                            className="p-1"
                        >
                            Tags
                        </a>
                        {pages.map((page, index) => (
                            <Link
                                key={index}
                                rel="noopener noreferrer"
                                href={route("page", page.slug)}
                                className="p-1"
                            >
                                {page.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>

            <div className="container flex items-center justify-between w-full max-w-3xl px-6 py-10 mx-auto xl:max-w-5xl">
                {topTags.map((tag, index) => (
                    <div
                        key={index}
                        className="px-2 py-1 font-medium text-white bg-orange-500 rounded-md text-xl"
                    >
                        <Link href={route("tag", tag.slug)}>{tag.name}</Link>
                    </div>
                ))}

                <div
                    className={
                        "px-2 py-1 font-medium text-white bg-orange-500 rounded-md text-xl"
                    }
                >
                    <Link href={route("page.tags")} className="p-1">
                        All
                    </Link>
                </div>
            </div>
        </div>
    );
}
