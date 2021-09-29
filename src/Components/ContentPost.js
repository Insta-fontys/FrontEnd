function ContentPost(props, link){
    return (
        <div>
            <div>
                <label className='username'>{props.text}</label>
            </div>
            <div>
                <img src='https://picsum.photos/200' alt='https://picsum.photos/200'/>
            </div>
            <div className='actions'>
                <button>like</button>
                <button>dislike</button>
            </div>
        </div>
    );
}

export default ContentPost;