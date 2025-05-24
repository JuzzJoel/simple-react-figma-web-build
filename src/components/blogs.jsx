import '/src/styles/blogs.css';

const BlogCard = ({ images, title, description, variant }) => {
    if (variant === "home") {
        return (
            <div className="Blog" >
                <img src={images} alt="Blog" className="blog-image" />
                <h2 className="title">{title}</h2>
                <p className="deps">{description}</p>
                <button className="button"> Read More</button>
            </div>
        )

    }

    else if (variant === "blog") {
        return (

            <div className="Blog b" >
                <img src={images} alt="Blog" className="blog-image b" />
                <h2 className="title b">{title}</h2>
                <p className="deps b">{description}</p>
                <button className="button b"> Read More</button>
            </div>
        )
    }
  
    };
export default BlogCard;