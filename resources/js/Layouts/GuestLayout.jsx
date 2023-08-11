import {Head} from '@inertiajs/react';
import Header from "@/Components/Blog/Header.jsx";
import Footer from "@/Components/Blog/Footer.jsx";


export default function Guest({children, head}) {
    return (<>
        <Head>
            <title>{head.title}</title>
            <meta name="description"
                  content={head.description ? head.description : 'Welcome to codebysamgan!. This is my blog where I write about web development and programming. I hope you enjoy your stay'}/>

            <meta name="keywords"
                  content={head.keywords ? head.keywords.join(',') : 'codebysamgan, blog, technical blog, programming, code'}
            />

            {head.metaTags && Object.keys(head.metaTags).map((key) => {
                return (<meta key={key} property={key} content={head.metaTags[key]}></meta>)
            })}
        </Head>
        <div className="antialiased bg-gray-100 text-gray-800">
            <div className="flex flex-col min-h-screen space-y-12">
                <Header/>
                <main className="container flex-1 max-w-3xl px-6 mx-auto space-y-12 xl:max-w-5xl">
                    {children}
                </main>
                <Footer/>
            </div>
        </div>
    </>);
}
