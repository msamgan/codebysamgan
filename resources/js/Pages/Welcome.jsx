import GuestLayout from "@/Layouts/GuestLayout.jsx";
import { useState } from "react";
import SearchForm from "@/Components/Blog/SearchForm.jsx";
import Introduction from "@/Components/Blog/Introduction.jsx";
import PostListing from "@/Components/Blog/PostListing.jsx";

export default function Welcome({ posts, q }) {
    const [search, setSearch] = useState(q);

    return (
        <GuestLayout
            head={{
                title: "Blog",
            }}
        >
            <Introduction />

            <SearchForm search={search} setSearch={setSearch} posts={posts} />

            <PostListing posts={posts} />
        </GuestLayout>
    );
}
