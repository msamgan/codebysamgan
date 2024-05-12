import GuestLayout from "@/Layouts/GuestLayout.jsx";
import { formatDate } from "@/utils/methods.js";

export default function Page({ page }) {
    return (
        <GuestLayout
            head={{
                title: page.title,
            }}
        >
            <article className="max-w-4xl px-6 py-24 mx-auto space-y-16 bg-gray-100 text-gray-900 post">
                <div className="w-full mx-auto space-y-4">
                    <h1 className="text-5xl font-bold leadi">{page.title}</h1>
                    <p className="text-sm text-gray-600">
                        <time dateTime={page.updated_at}>
                            {formatDate(page.updated_at)}
                        </time>
                    </p>
                </div>
                <div className="text-gray-800">
                    <div
                        className="prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: page.body }}
                    />
                </div>
            </article>
        </GuestLayout>
    );
}
