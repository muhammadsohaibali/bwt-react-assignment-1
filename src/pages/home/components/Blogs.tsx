import { useEffect, useState } from 'react'

type Blog = {
    id: number
    title: string
    body: string
}

const Blogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://dummyjson.com/posts?limit=6')
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data.posts)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    if (loading) {
        return (
            <section className="bg-white dark:bg-gray-900 py-12">
                <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
                    <p className="text-center text-gray-500 dark:text-gray-400">
                        Loading blogs…
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section className="bg-white dark:bg-gray-900 py-12">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
                <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Latest Articles
                </h2>
                <p className="mb-8 text-gray-500 dark:text-gray-400">
                    Diverse range of articles fetched from an API
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                    {blogs.map((post) => (
                        <article
                            key={post.id}
                            className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
                        >
                            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                {post.title}
                            </h3>
                            <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-3">
                                {post.body}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blogs
