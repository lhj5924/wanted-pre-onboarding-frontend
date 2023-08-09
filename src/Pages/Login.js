import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../Components/Common/PageContainer';
import { postUserData } from '../API/api';
import Redirect from '../Components/Common/Redirect';

export function Login() {
  Redirect();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [emailErrMsg, setEmailErrMsg] = useState('');
  const [pwErrMsg, setPwErrMsg] = useState('');
  // 이메일, 비밀번호가 모두 유효한 경우 로그인 버튼의 disabled 속성을 false 로 주기
  const btnAbled = emailIsValid && passwordIsValid;
  const navigate = useNavigate();

  const textInput = (event) => {
    const eType = event.target.type;
    const eValue = event.target.value;

    if (eType === 'email') {
      setEmail(eValue);
      // 1자 이상 입력 후 @ 없는 경우 (맨 처음에 에러메세지를 안띄우려면?)
      if (!eValue.includes('@') && eValue) {
        setEmailIsValid(false);
        setEmailErrMsg('메일 주소에 @ 를 포함해 주세요');
      } else {
        // 유효성 검사 통과
        console.log('mail ok');
        setEmailIsValid(true);
        setEmailErrMsg('');
      }
    }
    if (eType === 'password') {
      setPassword(eValue);
      if (eValue.length < 8 && eValue) {
        // pw가 0자 이상 8자 이하일때
        setPasswordIsValid(false);
        setPwErrMsg('비밀번호를 8글자 이상 입력해 주세요');
      } else {
        // 유효성 검사 통과
        console.log('pw ok');
        setPasswordIsValid(true);
        setPwErrMsg('');
      }
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const payload = {
      email,
      password,
    };
    postUserData(payload, '/auth/signin')
      .then((res) => {
        alert('투두 페이지로 이동합니다.');
        navigate('/todo');
        // JWT 를 localstorage 에 저장하기
        localStorage.setItem('AccessToken', res.data.access_token);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <PageContainer>
        <form onSubmit={onSubmitHandler}>
          <label 이메일></label>
          <input
            data-testid="email-input"
            type="email"
            required
            value={email}
            onChange={(e) => textInput(e)}
          />

          <p>{emailErrMsg}</p>
          <label 비밀번호></label>
          <input
            data-testid="password-input"
            type="password"
            required
            value={password}
            onChange={(e) => textInput(e)}
          />
          <p>{pwErrMsg}</p>
          <button
            data-testid="signin-button"
            type="submit"
            disabled={!btnAbled}
          >
            로그인
          </button>
        </form>
      </PageContainer>
    </>
  );
}
