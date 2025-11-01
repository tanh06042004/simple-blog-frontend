import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null); // Khởi tạo là null

  useEffect(() => {
    const fetchData = async () => {
      try {
        // QUAN TRỌNG: Đổi URL để gọi backend local
        const response = await fetch("http://localhost:8080/api/post/" + slug);
        const result = await response.json();
        setPost(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); // Sửa lỗi cú pháp ở đây [cite: 933]
  }, [slug]); // Thêm slug vào dependency array

  // Xử lý khi post đang loading
  if (!post) {
    return <p>Loading post...</p>;
  }

  // Sửa lỗi cú pháp, gán title/desc sau khi có post [cite: 935, 941]
  const { title, description } = post; 

  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}