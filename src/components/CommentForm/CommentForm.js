import "./CommentForm.scss";

function CommentForm() {
    return (
        <div className="comment-form">
            <form>
                <label>
                    <input type="text" name="comment" placeholder="Write a comment..." />
                </label>
                    <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default CommentForm;