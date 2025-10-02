import http from 'k6/http';

/*
  ฟังก์ชันตาม path ล่าสุด => "session"
  - ส่ง GET ไปยัง URL ที่ให้มา
  - ใส่ Header Authorization และ Cookie
  - log response status + body
  - return response
*/
export function Get_history() {
  const url = 'https://agi.manageai.co.th/api/v1/bot/f2b57fa4-8ab0-485b-9848-5c42e38c3c58/session/441f4ffb-e5f0-4684-8799-c67f79361ae5';

  const params = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJib3RfbWFuYWdlX2FpIiwiZXhwIjoxNzU5NDIzNTY3LCJpYXQiOjE3NTkzODc1NjcsImlzcyI6ImJvdF9tYW5hZ2VfYWkiLCJzdWIiOiJiZDhlOWY4Yy03MjY1LTQ1NzAtYTVlNi1kY2ZhMzk5NDc5YjkifQ.Lmv3g2vIUzR7QiHzqMMt8_8vI77Cps7eLJTHBZBMRNY',
      Cookie: 'Path=/; Path=/; Path=/'
    }
  };

  const response = http.get(url, params);

  // console.log('Response status:', response.status);
  // console.log('Response body:', response.body);

  return response;
}
