import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
  <div className={s.item}>
      <img src='https://trikky.ru/wp-content/blogs.dir/1/files/2023/10/30/28e4ac42f547e6ac0f50f7cfa916ca93.jpg' />
      {props.message}
      <div>
        <span>like</span> {props.Likes}
      </div>
    </div>


  )
}

export default Post;