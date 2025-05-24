import SocialMedia from './socialMedia';

const Footer = () => {
    return (
        <div className='Footer'>

            <div className="social-media-bar">
                <SocialMedia
                    image = "/src/assets/linkedin.png"
                />
                <SocialMedia
                    image="/src/assets/layer 2.png"
                />
                <SocialMedia
                    image="/src/assets/group 3.png"
                />

            </div>
        
        </div>
)
};
export default Footer;