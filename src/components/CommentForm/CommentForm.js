import './CommentForm.scss';
import { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ episodeId, userId }) => {
    const [comment, setComment] = useState('');
    console.log(episodeId, "episode id comment forms");
    console.log(userId, "user id comment form");
    console.log(comment, "comment form");

    const handleSubmit = async (e) => {

    const newComment = {
        user_id: userId,
        content: comment,
        };

        try {
        const response = await axios.post(`http://localhost:8002/api/episodes/${episodeId}/comments`, newComment);

        if (response.status === 201) {
            console.log('Comment submitted successfully');
            setComment('');
        } else {
            console.error('Failed to submit comment');
        }
        } catch (error) {
        console.error('Error:', error);
        }
    };

    return (
        <div className="comment-form">
        <form onSubmit={handleSubmit}>
            <label>
            <input
                type="text"
                name="comment"
                placeholder="Write a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
    );
    };

export default CommentForm;
