import Aside from "./aside";
import ImageSpan from "./imageSpan";
import BlogCard from './blogs';
import Hero from "./hero";

const Body = () => { 
    return (
        
        <div className="body">
            <Hero variant="home"/>
            < Aside />
            < ImageSpan
                image="/src/assets/Rectangle 2.png"
            title = "urban planning"
            />
            < ImageSpan
                image="/src/assets/Rectangle 4.png"
            title = "graphics design"
            />
            < ImageSpan
                image="/src/assets/Rectangle 5.png"
            title = "art"
            />

            <div className="body-bottom">
                <h1>Latest Blog</h1>
            </div>

            <div className="blog-Container">
                <BlogCard
                    variant="home"
                    images="/src/assets/Rectangle 13.png"
                    title=" Lorem ipsum patt kar i renyst "
                    description=" Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen"
                />
                <BlogCard
                    variant="home"
                    images="/src/assets/Rectangle 10.png"
                    title=" Lorem ipsum patt kar i renyst "
                    description=" Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen"
                />
                <BlogCard
                    variant="home"
                    images="/src/assets/Rectangle 11.png"
                    title=" Lorem ipsum patt kar i renyst "
                    description=" Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen"
                />
                <BlogCard
                    variant="home"
                    images="/src/assets/Rectangle 12.png"
                    title=" Lorem ipsum patt kar i renyst "
                    description=" Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen" />
                <BlogCard
                    variant="home"
                    images="/src/assets/Rectangle 14.png"
                    title=" Lorem ipsum patt kar i renyst "
                    description=" Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen"
                />
            </div>  

        </div>
    
);
}; 
export default Body;