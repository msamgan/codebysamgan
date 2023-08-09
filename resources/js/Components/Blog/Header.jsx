import {useEffect, useState} from "react";
import {Link} from "@inertiajs/react";

export default function Header() {
    const [pages, setPages] = useState(
        JSON.parse(localStorage.getItem('pages')) || []
    );

    useEffect(() => {
        fetch(route('page.list'))
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('pages', JSON.stringify(data));

                if (pages.length === 0) {
                    setPages(data);
                }
            });
    }, []);


    return (
        <div className={'border-b'}>
            <header
                className="container flex items-center justify-between w-full max-w-3xl px-6 py-10 mx-auto xl:max-w-5xl">
                <Link rel="noopener noreferrer" href="/" className="block h-6 text-2xl font-semibold">
                    CodeBySamgan
                </Link>
                <div className="flex items-center">
                    <div className="hidden space-x-2 font-medium sm:block">
                        <a rel="noopener noreferrer" href={route('page.tags')} className="p-1">Tags</a>
                        {
                            pages.map((page, index) => (
                                <Link key={index} rel="noopener noreferrer" href={route('page', page.slug)}
                                      className="p-1">{page.title}</Link>
                            ))
                        }
                    </div>
                </div>
            </header>
        </div>
    )
}
