import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col bg-gray-50 dark:bg-gray-900">
            <main className="flex-grow flex items-center justify-center px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div className="max-w-max mx-auto">
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">404</h1>
                        <p className="mt-2 text-lg font-medium text-blue-600 dark:text-blue-500">Page not found</p>
                        <p className="mt-1 text-base text-gray-500 dark:text-gray-400">
                            Sorry, we couldn't find the page you're looking for.
                        </p>
                        <div className="mt-6">
                            <NavLink
                                to="/"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Go back home
                            </NavLink>
                        </div>
                    </div>

                    <div className="mt-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-center">
                                <svg
                                    className="h-12 w-12 text-gray-300 dark:text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NotFound;