import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.png';
import styles from './Header.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotificationButton from 'components/layout/notification/NotificationButton';

const Header = () => {
  const [write, setWrite] = useState(false);
  const navigate = useNavigate();

  return (
    <header className={styles.Container}>
      <Link to={'/'}>
        <img src={logo} alt="헤더로고" />
      </Link>
      <nav className={styles.navWrapper}>
        <ul>
          <li>
            <Link to={'/estate'}>매물검색</Link>
          </li>
          <li>
            <Link to={'/house'}>집꾸하기</Link>
          </li>
          <li>
            <Link to={'/interior'}>방꾸하기</Link>
          </li>
          <li>
            <Link to={'/oneStop'}>한번에꾸하기</Link>
          </li>
          <li>
            <Link to={'/community'}>집들이</Link>
          </li>
        </ul>
      </nav>
      {/* 알림 버튼 추가 위치 옮겨야 함*/}
      <NotificationButton />

      <button onClick={() => navigate('/Login')} className={styles.btn}>
        로그인 | 회원가입
      </button>

      {/* 글쓰기 버튼 */}
      {/* <button className={styles.btn} onClick={() => setWrite(!write)}>글쓰기</button>
      {write && 
        <ul className={styles.writeWrapper}>
          <li><Link to={"/"}>집꾸 신청하기</Link></li>
          <li><Link to={"/"}>방꾸 신청하기</Link></li>
          <li><Link to={"/"}>한번에 꾸하기 신청하기</Link></li>
          <li><Link to={"/"}>집들이 글쓰기</Link></li>
          <li><Link to={"/"}>인테리어 후기 작성하기</Link></li>
        </ul>
      } */}
    </header>
  );
};

export default Header;
