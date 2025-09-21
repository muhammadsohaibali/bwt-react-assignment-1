const About = () => (
    <section className="bg-white dark:bg-gray-900 py-12">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
            <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                About Us
            </h2>
            <p className="mb-8 text-gray-500 dark:text-gray-400">
                A quick look at what drives us and what we bring to the dev community.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                        Our Mission
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        We build resources that make learning modern web tech simple and fun.
                        The aim is to keep devs sharp and ready for whatever the web throws next.
                    </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                        What We Do
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        From tutorials to practical guides, everything here is built for real-world use.
                        React, TypeScript, Node.js—if it helps you ship better projects, we cover it.
                    </p>
                </div>
            </div>

            <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                    The Crew
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                    We're a small team of devs and designers who love sharing what we learn.
                    Clean code, sleek UI, and constant growth keep us hyped to create and teach.
                </p>
            </div>
        </div>
    </section>
)

export default About
