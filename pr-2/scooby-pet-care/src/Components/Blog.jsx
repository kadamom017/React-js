import "./Blog.css";

function Blog() {
  const blogs = [
    {
      category: "Medical Care",
      date: "March 6, 2023",
      title: "How To Keep Your Pet Happy And Healthy",
      description:
        "Simple tips and daily habits that can help your furry friend live a happy and healthy life.",
      image:
        "https://scooby-wp.egenslab.com/wp-content/uploads/2023/02/Mask-group-min-600x280.jpg",
    },
    {
      category: "Education Pet",
      date: "March 6, 2023",
      title: "Essential Grooming Tips For Your Pet",
      description:
        "Learn how regular grooming can improve your pet's comfort, health, and appearance.",
      image:
        "https://scooby-wp.egenslab.com/wp-content/uploads/2023/02/blog-dt-img-600x280.jpg",
    },
    {
      category: "Pet Training",
      date: "February 15, 2023",
      title: "Easy Ways To Train Your Dog At Home",
      description:
        "Discover simple and effective techniques to build good habits and strengthen your bond.",
      image:
        "https://scooby-wp.egenslab.com/wp-content/uploads/2023/02/Mask-group11-min-600x280.jpg",
    },
  ];

  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="blog-heading">
          <p className="section-tag"></p>
          <h2>Our Newest Blogs</h2>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <article className="blog-card" key={blog.title}>
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />

                <span className="blog-category">
                  {blog.category}
                </span>
              </div>

              <div className="blog-content">
                <div className="blog-date">
                  {blog.date}
                </div>

                <h3>{blog.title}</h3>

                <p>{blog.description}</p>

                <a href="#blog" className="read-more">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;