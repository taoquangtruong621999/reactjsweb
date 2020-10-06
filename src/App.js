import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPost from './Components/MainPost';
import FormUser from './Components/FormUser';
import NewPost from './Components/NewPost';

function App() {
  //const title={"HỌC REATJS","HỌC JAVASCRIPT"}
  const image="../image/product2.jpg";
  const title="HỌC JAVASCRIPT";
  const author="Posted by Pen Pao | Th5 7 2020 | Javascript.";
  const namepost="Lập trình React";
  const content="Sau một thời gian tìm hiểu và áp dụng rất hiểu quả,hôm nay mình chia sẻ với các bạn cấu trúc thư...";
  const dulieu={image,title,author,namepost,content};
  const Newimage="../image/product3.jpg";
  const Newtitle="FullStack React js";
  const Newcontent="Th11 28 2020 | Công nghệ.Hệ điều hành.Máy chú web.Môi trường phát triển";
  const dulieunewpost={Newimage,Newtitle,Newcontent};
  return (
    <div className="main">
      <div className="main-right">
        <div className="top-right">
          <h2>SERIES:REACT JS:TỪ CƠ BẢN ĐẾN NÂNG CAO</h2>
        </div>
        <MainPost title="HỌC REACTJS" {...dulieu}></MainPost>
      </div>
      <div className="main-left">
        <FormUser></FormUser>
        <NewPost {...dulieunewpost}></NewPost>
      </div>
    </div>
  );
}

export default App;
