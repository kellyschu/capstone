import "./EpisodeCard.scss";
import DisplayComments from "../DisplayComments/DisplayComments";
import AddComments from "../AddComments/AddComments";
import AddLikes from "../AddLikes/AddLikes";

function EpisodeCard() {
    return (
        <div className="EpisodeCard">
            <img src="https://via.placeholder.com/150" alt="Episode Thumbnail" />
            <h3>Episode Title</h3>
            <p>Episode Channel</p>
            <p>Episode Description</p>
            <iframe src="https://open.spotify.com/embed/episode/2YXy9XZQs0QMBX1XVXZ6XH" width="100%" height="232" frameBorder="0" allowtransparency="true" title="jsx" allow="encrypted-media"></iframe>
            <AddLikes />
            <AddComments />
            <DisplayComments />
        </div>
    );
}
export default EpisodeCard;