import React from 'react';
function App() {
    const title= 'Blog Post';
    const body = 'This is my blog post'
    const comments=[
        {id:1, text :'Comment one'},
        {id:2, text :'Comment two'},
        {id:3, text :'Comment three'}
    ]
    const loading=false;
    const showComments=false;
    if(loading){ return <h1>Loading...</h1>}
    return (
        <div className="App">
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
           {/*// {Math.random()*5+5}*/}
            {showComments ? 'yes': 'non'}
            <div>
                <h3> comments ({comments.length})</h3>
                <ul>
                    i
                    {comments.map((comment, index) => (
                        <li key={index}> {comment.text}</li>

                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App;
