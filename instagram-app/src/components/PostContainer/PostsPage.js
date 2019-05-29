import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            filteredPosts: []
        };
        this.init()
    }


    componentDidMount() {
        this.setState({ posts: dummyData });
    }

    debug() {
        console.log(this.state.posts);
    }

    getUser() {
        let curUser = localStorage.getItem('user')
        return curUser;
    }

    logout() {
        localStorage.setItem('user', '');
        window.location.reload();
    }

    scrolled = (e) => {
        // let mainDiv = window.document;
        // if (mainDiv.scrollTop != 0) {
        //     console.log(mainDiv.classList);
        // }

        console.log(e.target.body);

    }
    init() {
        window.addEventListener('scroll', this.scrolled);
    }



    searchPostsHandler = e => {
        const posts = this.state.posts.filter(p => {
            if (p.username.includes(e.target.value)) {
                return p;
            }
        });


        this.setState({ filteredPosts: posts });
    }
    render() {
        return (
            <div className="App">

                <SearchBar
                    searchTerm={this.state.searchTerm}
                    searchPosts={this.searchPostsHandler}
                    logout={this.logout}
                />
                <PostContainer posts={
                    this.state.filteredPosts.length > 0
                        ? this.state.filteredPosts
                        : this.state.posts

                }
                />
                {/* <Test str={'EricHendrix'}/> */}
            </div>
        );
    }
}

export default PostsPage;