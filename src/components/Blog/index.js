import React from 'react';
import MediumApi from '../../apis/MediumApi';
import BlogPost from '../BlogPost';

export default class Blog extends React.Component {

    render() {
        var blogPosts = [];

        if(this.state && this.state.blogposts && this.state.blogposts.success){
            Object.values(this.state.blogposts.payload.references.Post).forEach(post => {
                blogPosts.push(
                    <BlogPost key={post.id} post={post} />
                )
            });
        }

        return (
            <div className="blog">
                <h1>Blogposts</h1>
                {blogPosts}
            </div>
        );
    }

    componentDidMount() {
        MediumApi.getCollection('/oliveohandbal').then(json => {
            this.setState({
                blogposts: json
            });
        });
    }

}