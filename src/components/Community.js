import React, { useState } from 'react';
import { name } from './Auth';
import { Link } from 'react-router-dom';
import './Community.css';

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "I Need Some Advice",
      content: "Hey everyone, I'm going through a tough time right now and could use some advice on how to manage stress. Any suggestions?",
      author: "Jane",
      date: "May 1, 2023",
      comments: [
        { id: 1, author: "John", content: "Have you tried practicing mindfulness meditation? It can be really helpful in reducing stress levels." },
        { id: 2, author: "Sarah", content: "I recommend going for a walk in nature. It can help clear your mind and provide a sense of calm." },
      ]
    },
    {
      id: 3,
      title: "Dealing with Work-related Stress",
      content: "Work has been really stressful lately, and I'm struggling to find a balance. How do you manage work-related stress?",
      author: "Sarah",
      date: "May 5, 2023",
      comments: [
        { id: 1, author: "John", content: "One strategy that has helped me is setting boundaries. I prioritize tasks, delegate when possible, and make sure to take breaks to recharge." },
        { id: 2, author: "Emily", content: "I find practicing mindfulness during work hours helps me stay focused and manage stress. Taking short mindful breaks can make a big difference." },
        { id: 3, author: "Michael", content: "Have you considered talking to your supervisor or HR department about the workload? They might be able to provide support or suggest solutions." },
      ]
    },
    {
      id: 4,
      title: "Tips for Managing Stress in College",
      content: "College life can be overwhelming, especially during exams. What are some effective stress management techniques for students?",
      author: "Emma",
      date: "May 7, 2023",
      comments: [
        { id: 1, author: "Sarah", content: "I find creating a study schedule and breaking tasks into smaller, manageable chunks helps reduce stress and improve productivity." },
        { id: 2, author: "John", content: "Exercise is a great stress reliever. Going for a run or engaging in other physical activities can clear your mind and boost your mood." },
        { id: 3, author: "David", content: "Don't forget to take breaks and practice self-care. Get enough sleep, eat well, and make time for activities you enjoy to help reduce stress levels." },
      ]
    },
    {
      id: 5,
      title: "Managing Stress at Home",
      content: "With the current situation, spending more time at home can bring its own set of stressors. How do you manage stress while being at home?",
      author: "John",
      date: "May 9, 2023",
      comments: [
        { id: 1, author: "Emma", content: "I've found establishing a routine and creating a dedicated workspace helps separate work and personal life, reducing stress." },
        { id: 2, author: "Michael", content: "Engaging in hobbies and activities that I enjoy has been helpful in managing stress at home. It provides a sense of fulfillment and relaxation." },
        { id: 3, author: "Sarah", content: "Connecting with loved ones virtually and seeking emotional support from family and friends can help alleviate stress during these challenging times." },
      ]
    },
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "", author: "" });
  const [newComment, setNewComment] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleCommentInputChange = (event, postId) => {
    const { value } = event.target;
    setNewComment({ ...newComment, [postId]: value });
  };

  const addPost = (event) => {
    event.preventDefault();
    const postId = posts.length + 1;
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    const post = {
      id: postId,
      title: newPost.title,
      content: newPost.content,
      author: name,
      date: currentDate,
      comments: [],
    };
    setPosts([...posts, post]);
    setNewPost({ title: "", content: "", author: "" });
  };

  const addComment = (event, postId) => {
    event.preventDefault();
    const commentId = posts[postId - 1].comments.length + 1;
    const comment = {
      id: commentId,
      author: name,
      content: newComment[postId],
    };
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, comment],
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    setNewComment({ ...newComment, [postId]: '' });
  };
  return (
    <>
    <div className="navbar">
    <Link to="/" className="navbar-logo">Serenova</Link>
        <div className="navbar-links">
            <Link to="/" className="navbar-link">Home</Link>
            
            <Link to ="/MoodTracker" className="navbar-link">Mood Tracker</Link>
            <Link to ="/StressManagement" className="navbar-link">Stress Management</Link>
            <Link to ="/Resources" className="navbar-link">Resources</Link>
            <Link to ="/Assessments" className="navbar-link">Assessments</Link>
        </div>
    </div>
    <div className="community">
      <h2>Community</h2>

      <div className="post-form">
        <h3>Add a New Post</h3>
        <form onSubmit={addPost}>
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            placeholder="Title"
            required
          />
          <textarea
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
            placeholder="Content"
            required
          ></textarea>
          <button class="submit-button" type="submit">Submit</button>
        </form>
      </div>

      <div className="post-list">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-content">{post.content}</p>
            <div className="post-info">
              <p className="post-author">Posted by {post.author}</p>
              <p className="post-date">{post.date}</p>
            </div>
            <div className="comments">
              {post.comments.map((comment) => (
                <div className="comment" key={comment.id}>
                  <p className="comment-author">{comment.author}</p>
                  <p>{comment.content}</p>
                </div>
              ))}
            </div>
            <br/>
            <div className="post-form">
                <form onSubmit={(event) => addComment(event, post.id)}>
                  <textarea
                    name="content"
                    value={newComment[post.id] || ''}
                    onChange={(event) => handleCommentInputChange(event, post.id)}
                    placeholder="Your Comment"
                    required
                  ></textarea>
                  <button class="submit-button" type="submit">Comment</button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Community;
