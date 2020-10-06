import React from 'react';
import  '../index.css';
function FormUser(){
    return(
        <div className="left-top">
          <h2 className="tieude">ĐĂNG KÝ NHẬN BÀI VIẾT MỚI</h2>
          <h3>Công nghệ đang thay đổi nhanh chóng hãy cùng vươn ra thế giới với những bài viết chất lượng</h3>
          <div className="user">
            <input type="text" placeholder="TÊN CỦA BẠN"></input>
          </div>
          
          <div className="password"> 
          <input placeholder="EMAIL CỦA BẠN"></input>
          </div>
          <div >
              <input type="checkbox" ></input>
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <div>
            <button>ĐĂNG KÝ</button>
          </div>
          <h3>Bạn sẽ nhận được email thông báo khi có bài viết mới,mình không spam vì mình cũng rất ghét :)</h3>
          
        </div>
    );
}
export default FormUser