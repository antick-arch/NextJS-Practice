import Link from "next/link";

const BlogPage = () => {
    const blogs = [
        {
            id: 1,
            title: "Getting Started with React",
            author: "Antick Chandra Kuri",
            category: "Web Development",
            publishDate: "2026-05-08",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
            tags: ["React", "JavaScript", "Frontend"],
            content:
                "React is one of the most popular JavaScript libraries for building modern user interfaces. In this blog, we will explore components, props, state, and hooks step by step."
        },
        {
            id: 2,
            title: "Mastering Tailwind CSS",
            author: "Antick Chandra Kuri",
            category: "CSS",
            publishDate: "2026-05-06",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
            tags: ["Tailwind CSS", "Design", "Frontend"],
            content:
                "Tailwind CSS helps developers build responsive and modern websites faster. Learn utility classes, responsive design, flexbox, grid, and dark mode styling."
        },
        {
            id: 3,
            title: "Building REST APIs with Node.js",
            author: "Antick Chandra Kuri",
            category: "Backend Development",
            publishDate: "2026-05-02",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
            tags: ["Node.js", "Express", "API"],
            content:
                "Node.js and Express make backend development simple and powerful. This article covers routing, middleware, REST API creation, and MongoDB integration."
        }
    ];
    return (
        <div>
            <h2 className="text-2xl text-blue-500 flex items-center justify-center">This is blog page</h2>
            {
                blogs.map((blog) => (
                    <div key={blog.id}>
                        <h2>{blog.title}</h2>
                        <Link href={`/blog/${blog.id}`}>Show Details</Link>
                    </div>
                ))
            }
        </div>
    );
};

export default BlogPage;