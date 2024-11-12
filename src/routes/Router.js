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
import OneStopWrite from 'components/oneStop/oneStopWrite/oneStopWrite';
import OneStopDetail from 'components/oneStop/oneStopDetail/oneStopDetail';
import MypageInteriorMain from 'components/mypage/interior/mypageInteriorMain/MypageInteriorMain';
import MypageInteriorModify from 'components/mypage/interior/mypageInteriorModify/MypageInteriorModify';
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

      {/* Onestop */}
      <Route path="/oneStopWrite" element={<OneStopWrite />} />
      <Route path="/oneStopDetail" element={<OneStopDetail />} />

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
      <Route path="/mypageInterior" element={<MypageInteriorMain />} />
      <Route path="/mypageInteriorModify" element={<MypageInteriorModify />} />

      {/* Profile */}
      <Route path="/profilePerson" element={<ProfilePerson />} />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Router;
