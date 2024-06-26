import { Head } from "@inertiajs/react";
import Header from "@/Components/Blog/Header.jsx";

const FxBanner = () => {
    return (
        <div
            className="p-8 text-orange-600 bg-white"
            style={{
                marginTop: 0,
            }}
        >
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between">

                    <img
                        className={"w-80 h-72"}
                        src={"https://frameworkx.info/img/frameworkx.png"}
                        alt={"frameworkx"}
                    />

                    <h2 className="text-5xl font-bold text-center text-black tracki">
                        Your Accelerated Path to{" "}
                        <span className={"text-orange-600"}>API Creation</span>
                    </h2>
                    <p className={"text-2xl text-black max-w-5xl"}>
                        I created Framework X to be all about substance over
                        style!. A well-oiled machine for API development. Please
                        check it out. All and Any feedback is appreciated.
                    </p>
                    <a
                        href="https://frameworkx.info/docs/introduction"
                        rel="noreferrer noopener"
                        target={"_blank"}
                        className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-orange-600 text-gray-50 border-orang\e-600 font-bold"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
};

export default function Guest({ children, head }) {
    return (
        <>
            <Head>
                <title>{head.title}</title>
                <meta
                    name="description"
                    content={
                        head.description
                            ? head.description
                            : "Welcome to codebysamgan!. This is my blog where I write about web development and programming. I hope you enjoy your stay"
                    }
                />

                <meta
                    name="keywords"
                    content={
                        head.keywords
                            ? head.keywords.join(",")
                            : "codebysamgan, blog, technical blog, programming, code"
                    }
                />

                {head.metaTags &&
                    Object.keys(head.metaTags).map((key) => {
                        return (
                            <meta
                                key={key}
                                property={key}
                                content={head.metaTags[key]}
                            ></meta>
                        );
                    })}
            </Head>
            <div className="antialiased text-gray-800 bg-gray-100">
                <div className="flex flex-col min-h-screen space-y-12">
                    <Header />

                    <FxBanner />

                    <main className="flex-1 max-w-5xl px-6 pb-20 mx-auto space-y-12">
                        {children}
                    </main>
                    {/*<Footer/>*/}
                </div>
            </div>
        </>
    );
}
