import GuestLayout from "@/Layouts/GuestLayout.jsx";
import SearchForm from "@/Components/Blog/SearchForm.jsx";
import { useEffect, useState } from "react";
import PostListing from "@/Components/Blog/PostListing.jsx";

export default function Tag({ tag, posts, q }) {
    const [search, setSearch] = useState(q);

    useEffect(() => {
        //console.log(posts)
    }, []);

    return (
        <GuestLayout
            head={{
                title: tag.name,
            }}
        >
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                Tag: {tag.name}
            </h1>

            <SearchForm search={search} setSearch={setSearch} posts={posts} />

            <PostListing posts={posts} />
        </GuestLayout>
    );
}
