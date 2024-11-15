import { Route, Routes } from 'react-router';
import Footer from 'components/layout/footer/Footer';
import Header from 'components/layout/header/Header';
import Main from 'components/main/Main';
import EstateSearch from 'components/estate/estateSearch/EstateSearch';
import InteriorMain from 'components/interior/interiorMain/Main';
import CommunityMain from 'components/community/communityMain/CommunityMain';
import CommunityBoardWrite from 'components/community/communityWrite/CommunityBoardWrite';
import CommunityBoardDetail from 'components/community/communityBoardDetail/CommunityBoardDetail';
import CommunityList from 'components/community/communityMain/CommunityList';
import CompanyList from 'components/interior/companyList/Main';
import ProfilePerson from 'components/profile/person/ProfilePerson';
import EstateWrite from 'components/estate/estateWrite/EstateWrite';
import HouseMain from 'components/house/HouseMain';
import HouseWrite from 'components/house/houseWrite/HouseWrite';
import HouseDetail from 'components/house/houseDetail/HouseDetail';
import OnestopMain from 'components/oneStop/OnestopMain';
import OnestopWrite from 'components/oneStop/oneStopWrite/OneStopWrite';
import OnestopDetail from 'components/oneStop/oneStopDetail/OneStopDetail';
import ReqInteriorMain from 'components/reqinterior/ReqInteriorMain';
import ReqInteriorWrite from 'components/reqinterior/reqInteriorWrite/ReqInteriorWrite';
import ReqInteriorDetail from 'components/reqinterior/reqInteriordetail/ReqInteriorDetail';
import MypageInteriorMain from 'components/mypage/interior/mypageInteriorMain/MypageInteriorMain';
import MypageInteriorModify from 'components/mypage/interior/mypageInteriorModify/MypageInteriorModify';
import Register from 'components/interior/companyRegister/Register';
import MypagePersonMain from 'components/mypage/person/MypagePersonMain';
import MypagePersonInterior from 'components/mypage/person/interior/MypagePersonInterior';
import MypageLayout from 'components/layout/mypage/MypageLayout';
import MypagePerson from 'components/mypage/person/MypagePersonMain';
import MypagePersonReview from 'components/mypage/person/interior/MypagePersonReview';
import MypagePersonOnestop from 'components/mypage/person/onestop/MypagePersonOnestop';
import BookmarkHouse from 'components/mypage/person/bookmark/house/BookmarkHouse';
import BookmarkInterior from 'components/mypage/person/bookmark/interior/BookmarkInterior';
import BookmarkCommunity from 'components/mypage/person/bookmark/community/BookmarkCommunity';
import MypagePersonCommunity from 'components/mypage/person/community/MypagePersonCommunity';
import PersonInfo from 'components/mypage/info/PersonInfo';
import CompanyInfo from 'components/mypage/info/CompanyInfo';
import Login from 'components/login/Login';
import SearchId from 'components/login/SearchId';
import JoinPerson from 'components/join/JoinPerson';
import JoinCompany from 'components/join/JoinCompany';
import JoinInterior from 'components/join/JoinInterior';
import SearchPwd from 'components/login/SearchPwd';
import SearchPwdResult from 'components/login/SearchPwdResult';
import MypageEstate from 'components/mypage/estate/mypageEstateMain/MypageEstate';

const Router = () => {
  return (
    <Routes>
      {/* Estate */}
      <Route path="/" element={<Main />} />
      <Route path="/estate" element={<EstateSearch />} />
      <Route path="/estateWrite" element={<EstateWrite />} />
      {/* House */}
      <Route path="/house" element={<HouseMain />} />
      <Route path="/houseWrite" element={<HouseWrite />} />
      <Route path="/houseDetail/:num" element={<HouseDetail />} />
      {/* Interior */}
      <Route path="/interior" element={<InteriorMain />} />
      <Route path="/companyList" element={<CompanyList />} />
      <Route path="/companyRegister" element={<Register />} />
      {/* Onestop */}
      <Route path="/oneStop" element={<OnestopMain />} />
      <Route path="/oneStopWrite" element={<OnestopWrite />} />
      <Route path="/oneStopDetail/:num" element={<OnestopDetail />} />
      {/* RequestInterior */}
      <Route path="/requestInterior" element={<ReqInteriorMain />} />
      <Route path="/requestInteriorWrite" element={<ReqInteriorWrite />} />
      <Route
        path="/requestInteriorDetail/:num"
        element={<ReqInteriorDetail />}
      />
      {/* Communnity */}
      <Route path="/community" element={<CommunityMain />} />
      <Route path="/communityBoardWrite" element={<CommunityBoardWrite />} />
      <Route path="/communityBoardDetail" element={<CommunityBoardDetail />} />
      {/* MyPage */}
      <Route path="/mypageUser/*" element={<MypageLayout />}>
        <Route index element={<MypagePersonMain />} />
        <Route path="interior" element={<MypagePersonInterior />} />
        <Route path="interiorReview" element={<MypagePersonReview />} />
        <Route path="onestop" element={<MypagePersonOnestop />} />
        <Route path="bookmark" element={<BookmarkHouse />} />
        <Route path="bookmarkInterior" element={<BookmarkInterior />} />
        <Route path="bookmarkCommunity" element={<BookmarkCommunity />} />
        <Route path="community" element={<MypagePersonCommunity />} />
      </Route>
      <Route path="/estateProfile" element={<MypageEstate />} />{' '}
      {/*임시 이름 바꿔야함*/}
      <Route path="/mypageInterior" element={<MypageInteriorMain />} />
      <Route path="/mypageInteriorModify" element={<MypageInteriorModify />} />
      <Route path="/personInfo" element={<PersonInfo />} />
      <Route path="/companyInfo" element={<CompanyInfo />} />
      {/* Login */}
      <Route path="/login" element={<Login />} />
      <Route path="/searchId" element={<SearchId />} />
      <Route path="/searchPwd" element={<SearchPwd />} />
      <Route path="/searchPwdResult" element={<SearchPwdResult />} />
      {/* Join */}
      <Route path="/joinPerson" element={<JoinPerson />} />
      <Route path="/joinCompany" element={<JoinCompany />} />
      <Route path="/joinInterior" element={<JoinInterior />} />
      {/* Profile */}
      <Route path="/profilePerson" element={<ProfilePerson />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Router;
