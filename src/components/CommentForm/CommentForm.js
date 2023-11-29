import './CommentForm.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CommentForm = ({ episodeId, userId, userName }) => {
    const [comment, setComment] = useState('');
    const [user, setUser] = useState({});

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

    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get(`http://localhost:8002/api/users/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        getUser();
        }, [userId]);
        
    return (
        <div className="comment-form">
            <h4> <b> Share Your Thoughts</b> <i style={{ color: '#C5F687' }} >{userName}!</i> </h4>

            <form className='comment-form' onSubmit={handleSubmit}>
                <label htmlFor='comment'>
                    <textarea
                        className='comment-form__input'
                        name="comment"
                        placeholder="Leave a comment on this episode..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </label>
                <input className='comment-form__submit' type="submit" value="Post Comment"/>
            </form>
        </div>
    );
    };

export default CommentForm;
