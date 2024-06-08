import { Link } from "@inertiajs/react";

export default function Pagination({ pagination, links = [], meta = null }) {
    return (
        <div className="my-2 sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <p className="text-sm text-gray-700 leading-5">
                Showing{" "}
                <span className="font-medium">
                    {meta ? meta.from : pagination.from}
                </span>
                /
                <span className="font-medium">
                    {meta ? meta.to : pagination.to}{" "}
                </span>
                (
                <span className="font-medium">
                    {meta ? meta.total : pagination.total}
                </span>{" "}
                total)
            </p>
            <div>
                <span className="relative z-0 inline-flex rounded-md shadow-sm">
                    <span>
                        {links.map((link, index) => {
                            const key = link.label + index;
                            if (link.active) {
                                return (
                                    <span key={key}>
                                        <span
                                            className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-100 bg-orange-700 border border-gray-300 cursor-default leading-5"
                                            dangerouslySetInnerHTML={{
                                                __html: link.label,
                                            }}
                                        ></span>
                                    </span>
                                );
                            }

                            if (link.url === null) {
                                return (
                                    <span key={key}>
                                        <span
                                            className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-300 bg-white border border-gray-300 leading-5"
                                            dangerouslySetInnerHTML={{
                                                __html: link.label,
                                            }}
                                        ></span>
                                    </span>
                                );
                            }

                            return (
                                <span key={key}>
                                    <Link
                                        href={link.url}
                                        preserveState={true}
                                        className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:bg-orange-600 hover:text-white"
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    ></Link>
                                </span>
                            );
                        })}
                    </span>
                </span>
            </div>
        </div>
    );
}
