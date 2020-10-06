import React from 'react';
import  '../index.css';
function NewPost(props){
    return(
        <div className="left-bottom">
          <div className="Title">
              <h2>BÀI VIẾT MỚI</h2>
          </div>
          <div className="noidung">
            <div className="post">
                <img src={props.Newimage}></img>
              <div className="post-noidung">
              <div className="tieude-newpost">
                <h1>{props.Newtitle}</h1>
              </div>
              <div className="noidung-newpost">
                    <h2>{props.Newcontent}</h2>
              </div>
                
                
                
              </div>
              
            </div>
            <div className="post">
                <img src="../image/product1.jpg"></img>
              <div className="post-noidung">
              <div className="tieude-newpost">
                <h1>Hãy sẵn sàng với serverriess</h1>
              </div>
              <div className="noidung-newpost">
                <h2>Th11 28 2020 | Công nghệ.Hệ điều hành.Máy chú web.Môi trường phát triển</h2>
              </div>               
              </div>             
            </div>
            
          </div>
        </div>
    );
}
export default NewPost;