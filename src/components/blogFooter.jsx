import SocialMedia from "/src/components/socialMedia";

const BlogFooter = () => {
    return (
        <>
            <div className="blog-footer-top">
                <span className="blog-bottom-text">
                <h3>daily blog</h3>
                    <p>Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen.Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. </p>
                </span>
            </div>
            <div className="social-media-bar">
                <SocialMedia
                    image="/src/assets/group 23.png"
                />
                <SocialMedia
                    image="/src/assets/group 22.png"
                />
                <SocialMedia
                    image="/src/assets/vector.png"
                />  <SocialMedia
                    image="/src/assets/group 20.png"
                />
                <SocialMedia
                    image="/src/assets/group 19.png"
                />
            </div>
            <div className="blog-footer-bottom">
                © 2023 dailyblog. All rights reserved.
                </div>
            </>
    )
};
export default BlogFooter;

