import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faThumbsUp, 
  faThumbsDown, 
  faComment,
  faUser,
  faBookmark,
  faHistory,
  faTimes,
  faImage
} from "@fortawesome/free-solid-svg-icons";
import MainLayout from "./layouts/MainLayout";
import "../styles/Forums.css";

export default function Forums() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [newComment, setNewComment] = useState("");

  // Sample data - replace with actual data from your backend
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Juan dela Cruz",
      avatar: "/avatar1.png",
      time: "2 hours ago",
      title: "Early Blight Detection Tips",
      content: "I've been using this system for a month now and noticed early blight on my crops. The AI detected it before I could see visible symptoms! Here's what I learned...",
      upvotes: 24,
      downvotes: 2,
      comments: [
        { id: 1, author: "Maria Santos", content: "Thanks for sharing! Very helpful.", time: "1 hour ago" },
        { id: 2, author: "Pedro Reyes", content: "What treatment did you use?", time: "30 mins ago" }
      ]
    },
    {
      id: 2,
      author: "Maria Santos",
      avatar: "/avatar2.png",
      time: "5 hours ago",
      title: "Best Fertilizer for Tomato Plants",
      content: "After years of farming, I've found that organic fertilizers work best for preventing diseases. What do you all use?",
      upvotes: 18,
      downvotes: 1,
      comments: []
    }
  ]);

  const blogs = [
    { id: 1, title: "10 Ways to Prevent Tomato Diseases", author: "Admin" },
    { id: 2, title: "Understanding Late Blight", author: "Dr. Garcia" },
    { id: 3, title: "Organic Farming Best Practices", author: "Admin" },
    { id: 4, title: "Seasonal Care Guide", author: "Expert Team" }
  ];

  const handleCreatePost = () => {
    if (newPost.title && newPost.content) {
      const post = {
        id: posts.length + 1,
        author: "Current User",
        avatar: "/avatar-default.png",
        time: "Just now",
        title: newPost.title,
        content: newPost.content,
        upvotes: 0,
        downvotes: 0,
        comments: []
      };
      setPosts([post, ...posts]);
      setNewPost({ title: "", content: "" });
      setShowCreateModal(false);
    }
  };

  const handleAddComment = () => {
    if (newComment && selectedPost) {
      const updatedPosts = posts.map(post => {
        if (post.id === selectedPost.id) {
          return {
            ...post,
            comments: [
              ...post.comments,
              {
                id: post.comments.length + 1,
                author: "Current User",
                content: newComment,
                time: "Just now"
              }
            ]
          };
        }
        return post;
      });
      setPosts(updatedPosts);
      setNewComment("");
    }
  };

  const handleVote = (postId, type) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          upvotes: type === 'up' ? post.upvotes + 1 : post.upvotes,
          downvotes: type === 'down' ? post.downvotes + 1 : post.downvotes
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <MainLayout>
      <div className="forums-wrapper">
        {/* Left Container - User Navigation */}
        <div className="left-container">
          <div className="nav-section">
            <h3>My Activity</h3>
            <div className="nav-item">
              <FontAwesomeIcon icon={faUser} />
              <span>My Posts</span>
            </div>
            <div className="nav-item">
              <FontAwesomeIcon icon={faComment} />
              <span>My Comments</span>
            </div>
            <div className="nav-item">
              <FontAwesomeIcon icon={faBookmark} />
              <span>Saved Posts</span>
            </div>
            <div className="nav-item">
              <FontAwesomeIcon icon={faHistory} />
              <span>History</span>
            </div>
          </div>
        </div>

        {/* Center Container - Main Feed */}
        <div className="center-container">
          {/* Create Post Section */}
          <div className="create-post-card" onClick={() => setShowCreateModal(true)}>
            <div className="create-post-avatar">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="create-post-input">
              What's on your mind about tomato farming?
            </div>
          </div>

          {/* Posts Feed */}
          <div className="posts-feed">
            {posts.map(post => (
              <div key={post.id} className="post-card">
                <div className="post-header">
                  <div className="post-author-info">
                    <div className="post-avatar">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div>
                      <h4>{post.author}</h4>
                      <span className="post-time">{post.time}</span>
                    </div>
                  </div>
                </div>
                <div className="post-content">
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                </div>
                <div className="post-actions">
                  <button 
                    className="action-btn upvote"
                    onClick={() => handleVote(post.id, 'up')}
                  >
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <span>{post.upvotes}</span>
                  </button>
                  <button 
                    className="action-btn downvote"
                    onClick={() => handleVote(post.id, 'down')}
                  >
                    <FontAwesomeIcon icon={faThumbsDown} />
                    <span>{post.downvotes}</span>
                  </button>
                  <button 
                    className="action-btn comment"
                    onClick={() => {
                      setSelectedPost(post);
                      setShowCommentsModal(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faComment} />
                    <span>{post.comments.length} Comments</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Container - Blogs */}
        <div className="right-container">
          <div className="blogs-section">
            <h3>Featured Blogs</h3>
            {blogs.map(blog => (
              <div key={blog.id} className="blog-item">
                <h4>{blog.title}</h4>
                <span className="blog-author">by {blog.author}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Create Post Modal */}
        {showCreateModal && (
          <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Create Post</h2>
                <button 
                  className="close-btn"
                  onClick={() => setShowCreateModal(false)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  placeholder="Post Title"
                  className="post-title-input"
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                />
                <textarea
                  placeholder="What's on your mind?"
                  className="post-content-input"
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                />
              </div>
              <div className="modal-footer">
                <button className="post-btn" onClick={handleCreatePost}>
                  Post
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Comments Modal */}
        {showCommentsModal && selectedPost && (
          <div className="modal-overlay" onClick={() => setShowCommentsModal(false)}>
            <div className="modal-content comments-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Comments</h2>
                <button 
                  className="close-btn"
                  onClick={() => setShowCommentsModal(false)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <div className="modal-body">
                <div className="comments-list">
                  {selectedPost.comments.length === 0 ? (
                    <p className="no-comments">No comments yet. Be the first to comment!</p>
                  ) : (
                    selectedPost.comments.map(comment => (
                      <div key={comment.id} className="comment-item">
                        <div className="comment-avatar">
                          <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="comment-content">
                          <h4>{comment.author}</h4>
                          <p>{comment.content}</p>
                          <span className="comment-time">{comment.time}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="add-comment">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
                  />
                  <button onClick={handleAddComment}>Send</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}