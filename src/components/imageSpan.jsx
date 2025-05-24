import '/src/styles/imageSpan.css';


function ImageSpan({ image, title }) {
    return (
        <div className="image-body">
            <img src={image} alt="description" className="display-image"/>
                <h1 className="image-text"> {title}</h1>
            </div>
    );
};
export default ImageSpan;