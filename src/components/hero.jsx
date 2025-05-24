
import NavBar from './navbar';

const Header = ({ variant }) => {
    if (variant === "home") {
        return (

            <div className="header-hero">
                < NavBar variant="home" />
                <div className="hero">
                    <div className="hero-text">
                        <h4>
                            Linus Kigai
                        </h4>
                        <h1>Bringing Concept to Life</h1>
                        <p>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Ad aliquid animi deserunt voluptas
                            eius ducimus ea adipisci. Quae iure quas omnis cum aliquam, quibusdam laborum
                            quidem, perferendis necessitatibus
                            vero iste placeat tempora tenetur,
                            accusamus amet?</p>
                    </div>

                </div>
            </div>
        );
     
    }

    else if (variant === "blog") {
        return (
            <div className="HeroContainer">
            <div className="blog-hero-box">
                <div className="blog-hero-image">
                </div>
                <div className="blog-hero-text">
                        <h4>Urban Planning </h4>
                        <div className="blog-hero-text-bottom">
                    <h5>Lörem ipsum europlande krohiskap
                        panstik, förväntis.  </h5>
                    <p>Lörem ipsum europlande krohiskap panstik, förväntis. Klicktivism plada. Ekrofiling hedår, medan al, monoktig härgjord. Supranylingar kask. Geologi byligt dikapobelt. </p>
                            <button>Read More</button>
                            </div>
                    </div>
                    </div>
            </div>

        )
        }

};

export default Header;