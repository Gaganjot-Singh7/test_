import React from 'react'
import "./Post.css"
function Posts() {
  return (
    <>
    <div className="container-fluid bgblack">
        <div className="loria_post text-center">
        <div className="post_heading">Ad Graphics</div>
        {/* <img img src="/img/underline.png" alt=""  className="loria_post_underline "/> */}
        </div>
        <div className="posts">
            <div className="post_img"><img src="/detailpage/ad1.png" alt="Graphics"  /></div>
            <div className="post_img"><img src="/detailpage/ad2.png" alt="Graphics"  /></div>
            <div className="post_img"><img src="/detailpage/ad3.png" alt="Graphics"  /></div>
        </div>


        <div className="loria_post text-center">
        <div className="post_heading_social">Social media posts</div>
        {/* <img src="/img/underline.png" alt=""  className="loria_post_underline2"/> */}
        </div>
        <div className="posts">
            <div className="post_img"><img src="/detailpage/ad4.png" alt="media"  /></div>
            <div className="post_img"><img src="/detailpage/ad5.png" alt="media"  /></div>
            <div className="post_img"><img src="/detailpage/ad6.png" alt="media"  /></div>
        </div>
    </div>
    </>
  )
}

export default Posts