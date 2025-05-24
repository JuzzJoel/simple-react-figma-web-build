import HeaderBlog from '/src/components/blogheader';
import BlogNav from '/src/components/blogNav';
import Hero from '/src/components/hero';
import BlogPosts from '/src/components/blogPosts';
import BlogFooter from '/src/components/blogFooter';


function Blog () {
    return (
        <main className='blog-page'>
            <HeaderBlog />
            <BlogNav />
            <Hero variant="blog" />
            <BlogPosts />  
            <BlogFooter/>
        </main>

        
    )
 }
    ;
export default Blog;


