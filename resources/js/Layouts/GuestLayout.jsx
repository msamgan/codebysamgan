import {Head} from '@inertiajs/react';
import Header from "@/Components/Blog/Header.jsx";


export default function Guest({children, head}) {
    return (<>
        <Head>
            <title>{head.title}</title>
            <meta name="description"
                  content={head.description
                      ? head.description
                      : 'Welcome to codebysamgan!. This is my blog where I write about web development and programming. I hope you enjoy your stay'}
            />

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

                <div className="p-6 py-12 text-orange-600 bg-grey">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center justify-between">

                            <img className={'w-80 h-72'} src={'https://www.frameworkx.info/img/frameworkx.png'} alt={'frameworkx'}/>
                            <h2 className="text-center text-5xl tracki font-bold text-black">
                                Your Accelerated Path to <span className={'text-orange-600'}>API Creation</span>
                            </h2>
                            <p className={'text-2xl text-black'}>
                                Framework X is all about substance over style!. A well-oiled machine for API development
                            </p>
                            <a href="https://www.frameworkx.info/docs/introduction" rel="noreferrer noopener"
                               className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-orange-600 text-gray-50 border-orange-600 font-bold">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>

                <main className="container flex-1 max-w-3xl px-6 mx-auto space-y-12 xl:max-w-5xl pb-20">
                    {children}
                </main>
                {/*<Footer/>*/}
            </div>
        </div>
    </>);
}
