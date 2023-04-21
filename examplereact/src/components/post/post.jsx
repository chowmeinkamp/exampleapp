import "./post.css"

export default function Post(){
    return (
        <div className="post">
             <img className="postImage" src="/images/background.jpg" alt="no_photo" />
            <div className="PostInfo">
                <div className="postCats">
                        <span className="postCat">cat 1 cat 2</span>
                </div>
                    <span className="postTitle">title</span>
                <hr />
                <span className="postDate">
                    today
                </span>
            </div>
            <p className="postSummary">May you be trapped betwixt the hands of time and wander in the realm of eternity! Never moving, let it show within you!!</p>
        
        </div>
    )
}