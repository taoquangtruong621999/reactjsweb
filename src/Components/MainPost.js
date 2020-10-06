import React from 'react';
import  '../index.css';
function MainPost(props){
    console.log(props.title);
    return(
        
    <div className="bottom-right">
    
        
        <div className="post">
            <img src={props.image}></img>
            <div className="post-noidung">
            <div className="tieude-post">
                <h2>{props.title}</h2>
            </div>
            <div className="author-post">
                <h2>{props.author}</h2>
            </div>
            <div className="author-post">
                <h2>{props.namepost}</h2>
            </div>
            <div className="noidung-post">
                <h2>{props.content}</h2>
            </div>   
                <button id="read">READ MORE</button>
    
        </div>
        
        </div>
        <div className="post">
        <img src="../image/product1.jpg"></img>
        <div className="post-noidung">
        <div className="tieude-post">
            <h2>HƯỚNG DẪN HỌC REACT JS</h2>
        </div>
        <div className="author-post">
            <h2>Posted by Pen Pao | Th5 7 2020 | Javascript.</h2>
        </div>
        <div className="author-post">
            <h2>Posted by Pen Pao | Th5 7 2020 | Javascript.</h2>
        </div>
        <div className="noidung-post">
            <h2>Sau một thời gian tìm hiểu và áp dụng rất hiểu quả,hôm nay mình chia sẻ với các bạn cấu trúc thư...</h2>
        </div>   
            <button id="read">READ MORE</button>
        </div>
        
        </div>
        <div className="post">
        <img src="../image/product1.jpg"></img>
        <div className="post-noidung">
        <div className="tieude-post">
            <h2>HƯỚNG DẪN HỌC REACT JS</h2>
        </div>
        <div className="author-post">
            <h2>Posted by Pen Pao | Th5 7 2020 | Javascript.</h2>
        </div>
        <div className="author-post">
            <h2>Posted by Pen Pao | Th5 7 2020 | Javascript.</h2>
        </div>
        <div className="noidung-post">
            <h2>Sau một thời gian tìm hiểu và áp dụng rất hiểu quả,hôm nay mình chia sẻ với các bạn cấu trúc thư...</h2>
        </div>   
            <button id="read">READ MORE</button>
        </div>
        
        </div>
        <div className="post">
        <img src="../image/product1.jpg"></img>
        <div className="post-noidung">
        <div className="tieude-post">
            <h2>HƯỚNG DẪN HỌC REACT JS</h2>
        </div>
        <div className="author-post">
            <h2>Posted by Pen Pao | Th5 7 2020 | Javascript.</h2>
        </div>
        <div className="author-post">
            <h2>Posted by Pen Pao | Th5 7 2020 | Javascript.</h2>
        </div>
        <div className="noidung-post">
            <h2>Sau một thời gian tìm hiểu và áp dụng rất hiểu quả,hôm nay mình chia sẻ với các bạn cấu trúc thư...</h2>
        </div>   
            <button id="read">READ MORE</button>
        </div>
        
        </div>
    </div>);
}
export default MainPost;