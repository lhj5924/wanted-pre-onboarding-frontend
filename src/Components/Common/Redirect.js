import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

//Assignment 4
// 로그인 여부에 따른 리다이렉트 처리를 구현해주세요

// 로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요
// 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 /signin 경로로 리다이렉트 시켜주세요

function Redirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = localStorage.getItem('AccessToken');
    const locPath = window.location.pathname;
    if (isLogin && locPath.includes('sign')) {
      alert('이미 로그인된 사용자입니다. 투두 페이지로 이동합니다.');
      navigate('/todo');
    }
    if (!isLogin && locPath === '/todo') {
      alert('먼저 로그인을 해주세요. 로그인 페이지로 이동합니다.');
      navigate('/signin');
    }
  }, []);
}

export { Redirect };
