import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { postUserData } from '../API/api';
import { PageContainer, Redirect } from '../Components/Common';

export function Signup() {
  Redirect();
  //   Assignment 1
  // 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [emailErrMsg, setEmailErrMsg] = useState('');
  const [pwErrMsg, setPwErrMsg] = useState('');
  // 이메일, 비밀번호가 모두 유효한 경우 회원가입 버튼의 disabled 속성을 false 로 주기
  const btnAbled = emailIsValid && passwordIsValid;

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

  // Assignment 2
  // 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동해주세요
  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('회원가입 요청');
    const payload = {
      email,
      password,
    };
    postUserData(payload, '/auth/signup')
      .then((res) => {
        console.log(res);
        alert('로그인 페이지로 이동합니다.');
        navigate('/signin');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <PageContainer className="PageContainer">
        <FormContainer className="FormContainer">
          <form onSubmit={onSubmitHandler}>
            <div>
              <label>이메일</label>
              <input
                data-testid="email-input"
                type="email"
                placeholder="메일 주소를 입력해 주세요"
                required
                value={email}
                onChange={(e) => {
                  textInput(e);
                }}
              />
              <p>{emailErrMsg}</p>
            </div>
            <div>
              <label>비밀번호</label>
              <input
                data-testid="password-input"
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                required
                value={password}
                onChange={(e) => textInput(e)}
              />
              <p>{pwErrMsg}</p>
            </div>
            <button
              data-testid="signup-button"
              type="submit"
              disabled={!btnAbled}
            >
              회원가입
            </button>
          </form>
        </FormContainer>
      </PageContainer>
    </>
  );
}

const FormContainer = styled.section`
  background-color: bisque;
  & > form {
    background-color: aliceblue;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
