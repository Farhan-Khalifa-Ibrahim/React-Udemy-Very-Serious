import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className=" ui conitainer comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="I love it" avatar={faker.image.image()} />
            <CommentDetail author="Alex" timeAgo="Today at 2:45PM" content="WTF!" avatar={faker.image.image()} />
            <CommentDetail author="Jane" timeAgo="Yesterday at 2:00PM" content="Hell yeah" avatar={faker.image.image()} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));