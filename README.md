# 캠핑투게더 어플 프로젝트

# 전체 기능 목록

- 스플래시 화면
- 온보딩 화면
- 로그인 화면 (swagger API - 이메일 기반 로그인)
- 회원가입 화면
- 홈 화면
    - 공공데이터 API 호출
    - 온라인 홈페이지 이동 기능
    - 전화하기 버튼 기능
- 아티클 화면
    - swagger API 아티클 호출
    - 아티클 Sort 할 수 있는 select 기능
    - 아티클 상세 화면
- 커뮤니티 화면
    - 커뮤니티 불러오기 API, 댓글 작성 API 호출
    - 댓글 작성하기 기능
- 프로필 화면
    - 내 정보 불러오기 API 호출
    - 내 정보 수정 API 호출
    - 닉네임, 이름, 소개글 수정 기능
- 글 쓰기 화면
    - 커뮤니티 작성 API 호출

# 프로젝트 설명

## 프로젝트 목표

이번 프로젝트에서는 공공데이터 API와 swagger API를 활용해서 프로젝트를 해야겠다는 목표를 세웠다.

API 호출하는 과정에서 오랜 시간도 걸렸지만, 그 덕분에 react native에서 어떻게 API를 잘 호출할 수 있는 지를 알게 되는 프로젝트였다. 기능 관련해서는 API 사용이 주 목적이었기 때문에 기본적인 기능에 충실하게 임했다.

---

## 라이브러리 및 프레임워크 사용 이유

| 이름 | 사용 이유 |
| --- | --- |
| react-async-storage | API를 호출할 때 유저 정보가 담긴 token을 지니고 있어야 호출이 되는 경우를 위해서 RN에 있는 async storage로 token 정보를 저장했다. |
| axios | API를 연결할 때 fetch 보다 axios 방식이 좀 더 직관적이고 편리한 방법이기 때문에 사용했다 |
| react-native-dotenv | 공공 API를 설정해줄 때, API 호출 키, API url 등 외부로 굳이 알려지지 않아도 되는 것을 환경변수로 만들기 위해 사용해주었다 |
| react-native-dropdown-picker | 아티클의 정렬 부분에서 각각의 값을 선택해야 할 때 select 형식으로 작업을 할 수 있게 도와준 라이브러리이다. |
| react-native-onboarding-swiper | 온보딩 화면을 좀 더 쉽게 만들 수 있었던 라이브러리이다.  |

## 폴더 구조

```
📦src
 ┣ 📂Apis
 ┃ ┗ 📂api
 ┃ ┃ ┣ 📜article.js
 ┃ ┃ ┣ 📜campingdata.js
 ┃ ┃ ┣ 📜community.js
 ┃ ┃ ┣ 📜post.js
 ┃ ┃ ┗ 📜user.js
 ┣ 📂Common
 ┃ ┣ 📂Sign
 ┃ ┃ ┗ 📜InputError.tsx
 ┃ ┣ 📜CommonButton.tsx
 ┃ ┣ 📜CommonHeader.tsx
 ┃ ┗ 📜CommonInput.tsx
 ┣ 📂Components
 ┃ ┣ 📂Article
 ┃ ┃ ┗ 📜ArticleDetail.tsx
 ┃ ┣ 📂Card
 ┃ ┃ ┣ 📜CardItem.tsx
 ┃ ┃ ┗ 📜CardList.tsx
 ┃ ┣ 📂Community
 ┃ ┃ ┗ 📜CommunityDetail.tsx
 ┃ ┣ 📂Home
 ┃ ┃ ┗ 📜CampingDetail.tsx
 ┃ ┗ 📂Sign
 ┃ ┃ ┣ 📜SignInput.tsx
 ┃ ┃ ┗ 📜SocialLogin.tsx
 ┣ 📂Pages
 ┃ ┣ 📂BottomTab
 ┃ ┃ ┣ 📜Article.tsx
 ┃ ┃ ┣ 📜Community.tsx
 ┃ ┃ ┣ 📜Home.tsx
 ┃ ┃ ┣ 📜Post.tsx
 ┃ ┃ ┗ 📜Setting.tsx
 ┃ ┣ 📂Onboarding
 ┃ ┃ ┗ 📜OnBoarding.tsx
 ┃ ┗ 📂Sign
 ┃ ┃ ┣ 📜Login.tsx
 ┃ ┃ ┗ 📜SignUp.tsx
 ┣ 📂assets
 ┃ ┗ 📂images
 ┃ ┃ ┣ 📂Article
 ┃ ┃ ┣ 📂Post
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┣ 📂onboarding
 ┃ ┃ ┣ 📂setting
 ┃ ┃ ┣ 📂sign
 ┣ 📂utils
 ┃ ┣ 📜axios.js
 ┃ ┣ 📜datefilter.tsx
 ┃ ┣ 📜storages.tsx
 ┃ ┣ 📜validate.tsx
 ┃ ┗ 📜validatecheck.tsx
 ┣ 📜Splash.tsx
 ┗ 📜router.tsx
```

# Sign 화면
<div align="left">
  <div style="display: flex;">
    <img width="314" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-04-20_16 07 14" src="https://github.com/murramge/camping_app_project/assets/60298173/9b3e07b1-7622-4159-8a27-69fc6e9b2b35">
    <img width="314" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-04-20_16 07 40" src="https://github.com/murramge/camping_app_project/assets/60298173/3d8b82bf-2e1b-4ec7-b196-ebb4694df6dd">
  </div>
</div>


로그인 / 회원가입 페이지

유효성 검사도 진행해주어서, 이메일을 올바르게 입력하지 않았을 때는 잘못된 이메일 입력중이라고 표시가 되도록 만들어주었다.

로그인 회원가입은 input과 버튼 부분 레이아웃이 매우 유사하기 때문에 굳이 로그인 form 회원가입 form을 따로 분리하지 않고 동일한 form 으로 만들어주었다.

또한 이후에 사용할 페이지들에서, input과 button 부분도 동일한 디자인으로 되어있어서 다른 페이지들에서도 재사용할 수 있는 디자인을 만들어주었다.

# Home
<div align="left" style="width:100%">
  <div style="display: grid; grid-template-rows: repeat(3, minmax(0, 1fr));">
     <img width="349" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-04-20_16 14 01" src="https://github.com/murramge/camping_app_project/assets/60298173/62d7a0ad-d1ad-4ccf-b95f-a8c4ac5f7702">
      <img width="350" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-04-20_16 14 21" src="https://github.com/murramge/camping_app_project/assets/60298173/54506b62-cd07-4c0d-9b99-b13f0447d7bd">
      <img width="352" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-04-20_16 14 50" src="https://github.com/murramge/camping_app_project/assets/60298173/f967ebed-c0c0-4809-b454-ffec2f52513c">
  </div>
</div>




gocamping 이라는 공공 API를 불러와서 작업해주었다. 온라인실시간예약 버튼을 누르면 공공API 상에서 제공하는 홈페이지로 들어가게 된다.

카드를 선택하면, 상세 정보가 나오고 전화하기를 누르면 tel 링크를 통해서 전화도 가능하게 만들었다.

(하지만, 시뮬레이터로는 전화에 접근할 수 없는 구조여서 직접 아이폰을 연결했을 때는 구동이 된다.)

코드 이야기를 좀 해보자면,

레이아웃을 살펴보니, 홈 / 아티클 / 커뮤니티 부분이 카드 형태로 아래로 나열되는 형태로 보여졌다.

어차피 중복되는 스타일의 레이아웃이라면 카드리스트를 만들어서 한 곳에 모아 주어야겠다고 생각했다.

```jsx
const CardList = ({datas, type}: CampingCardListProps) => {
  const CardItem = ({item}) => {
    switch (type) {
      case 'CampingItem':
        return <CampingCardItem item={item}></CampingCardItem>;
      case 'ArticleItem':
        return <ArticleCardItem item={item}></ArticleCardItem>;
      default:
        return <CommunityCardItem item={item}></CommunityCardItem>;
    }
  };

  return (
    <SafeAreaView style={{padding: 10}}>
      {<FlatList data={datas} renderItem={CardItem}></FlatList>}
    </SafeAreaView>
  );
};
```

이렇게 타입에 따라 카드 아이템을 분리해서 불러오도록 만들어 주었다.

- 더 좋은 코드
    
    ```jsx
    각 경우(case)마다 다른 속성(prop)들이 필요하다면 
    이 패턴은 관리와 확장성 측면에서 비효율적일 수 있습니다. 
    'camping', 'article', 'community'와 같이 각기 다른 성격을 가진 아이템들을 처리해야 할 때.
    
    공통 인터페이스 정의:
    각 아이템이 공통적으로 가져야 할 메소드와 프로퍼티를 정의한 인터페이스를 만듭니다. 이를 통해 다형성을 활용할 수 있습니다.
    
    각 타입에 맞는 컴포넌트 생성:
    Camping, Article, Community 각각에 대한 컴포넌트를 만들고, 각 컴포넌트는 앞서 정의한 공통 인터페이스를 구현하거나 확장합니다.
    
    컴포넌트 렌더링 로직:
    최상위 컴포넌트에서는 타입에 따라 적절한 컴포넌트를 렌더링하기만 하면 됩니다. 이때, 컴포넌트 팩토리 패턴을 사용하거나 간단한 매핑 객체를 통해 구현할 수 있습니다.
    ```
    
    ```jsx
    // 각 컴포넌트의 예시
    const Camping = ({ location, facilities }) => (
      <div>
        <h1>Camping Spot</h1>
        <p>Location: {location}</p>
        <ul>
          {facilities.map(facility => <li key={facility}>{facility}</li>)}
        </ul>
      </div>
    );
    
    const Article = ({ title, content }) => (
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
    
    const Community = ({ members, events }) => (
      <div>
        <h1>Community Members</h1>
        {members.map(member => <div key={member}>{member}</div>)}
        <h2>Upcoming Events</h2>
        {events.map(event => <div key={event}>{event}</div>)}
      </div>
    );
    
    // 타입에 따라 적절한 컴포넌트를 렌더링하는 로직
    const ContentRenderer = ({ type, props }) => {
      const components = {
        camping: Camping,
        article: Article,
        community: Community,
      };
    
      const SpecificComponent = components[type];
      return <SpecificComponent {...props} />;
    };
    ```
    

# Article

<div align="left">
  <div style="display: flex;">
    <img width="356" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-04-20_16 21 05" src="https://github.com/murramge/camping_app_project/assets/60298173/69998638-3c3a-4592-8f53-1eb6a6322335">
    <img width="359" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-04-20_16 21 30" src="https://github.com/murramge/camping_app_project/assets/60298173/8a54f001-71a4-4de9-9b08-3aad214d1264">
    <img width="356" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-04-20_16 23 40" src="https://github.com/murramge/camping_app_project/assets/60298173/35edaf18-b01a-4596-837c-45aff0e8b0ba">
  </div>
</div>

swagger API로 아티클을 보여줄 수 있게 만들었다. 즐겨찾기순, 최신순 기능으로 정렬해주었다. 그 과정에서 아까 상세한 라이브러리인 *react-native-dropdown-picker* 를 사용했다.

이미지도 불러오고 싶었는데, API에서 가져오려니 “파일에 엑세스할 수 없음” 이라고 계속 떠서 구글링을 해보니, 확실하지는 않지만 [file:///](file:///) 형식으로 된 로컬파일인 경우에는 파일에 엑세스가 불가능하다 라는 정보를 얻고 일단 어쩔 수 없이 같은 이미지로만 구현했다.

아티클 메인 부분에서 상세 content의 2줄만 보여주고 싶었기 때문에 numberOfLines={2} 을 해주었다. 

날짜를 보기 좋게 바꾸어야 했기 때문에, utils 폴더에 datefilter 파일을 만들어서 

2024년 4월 20일 16:42 이런 형태로 될 수 있도록 바꾸어 주었다. 보면, createDate가 아티클 메인에서도 있고, 상세에서도 사용이 되었기 때문에 utils에 만들어 주어야겠다고 생각했다.

# Community

<div align="left">
  <div style="display: flex;">
    <img width="353" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-04-20_16 44 52" src="https://github.com/murramge/camping_app_project/assets/60298173/fa8b30db-88f5-4a3f-bb5c-2387158066b9">
    <img width="358" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-04-20_16 45 45" src="https://github.com/murramge/camping_app_project/assets/60298173/56cc8a37-c846-4ee1-9af8-e40f4eb57c28">
    <img width="345" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-04-20_16 46 02" src="https://github.com/murramge/camping_app_project/assets/60298173/50e18825-5b72-4eee-ac65-9c24bc079003">
  </div>
</div>

커뮤니티에 들어가면 작성되어있는 글을 볼 수 있다. 커뮤니티 조회 API와 커뮤니티 상세 API, 댓글 달기 API를 호출했다.

댓글은 리스트 형식으로 볼 수 있게 만들었고, 입력하면 댓글이 달리게도 만들었다.

# Profile

<div align="left">
  <div style="display: flex;">
    <img width="351" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-04-20_16 48 29" src="https://github.com/murramge/camping_app_project/assets/60298173/5ef68fba-d75e-4eed-9064-fe8fdd825332">
    <img width="353" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-04-20_16 49 00" src="https://github.com/murramge/camping_app_project/assets/60298173/c3d6b085-3494-46af-a6b6-b198bf588472">
    <img width="357" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-04-20_16 49 17" src="https://github.com/murramge/camping_app_project/assets/60298173/f752d9d4-3ff3-485b-8500-114f337f2d92">
    <img width="349" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-04-20_16 49 45" src="https://github.com/murramge/camping_app_project/assets/60298173/a37d34a3-4f56-4497-a751-d076c0923bd0">

  </div>
</div>

내정보 조회 API를 호출해서 내가쓴 글, 즐겨찾기, 이름, 소개글 등을 가져올 수 있게 했다.

그 후 연필 버튼으로 프로필을 수정할 수 있는 페이지를 만들고, 닉네임 이름 소개글을 작성하고 수정하면 올바르게 수정이 된다.

# Post
<div align="left">
  <div style="display: flex;">
 <img width="357" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-04-20_16 49 17" src="https://github.com/murramge/camping_app_project/assets/60298173/f752d9d4-3ff3-485b-8500-114f337f2d92">
  <img width="357" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-04-20_16 49 17" src="https://github.com/murramge/camping_app_project/assets/60298173/d2e0c4e1-6dd0-45a8-b6ff-e60984fdb4d6">
  </div>
</div>


커뮤니티 생성 API를 호출해서 제목, 내용을 작성하고 저장하도록 했다.

작성 완료를 클릭하면, 커뮤니티에 글 쓴 내용을 볼 수 있도록 페이지 이동을 해주었다.

# trouble shoot 🎯

1. 지옥에서 온 API 연결…🫠
    
    다들 API 연결에 헤메고 있는 것 같았다. 나 역시 API 연결이 쉽지 않았다. 우선 나는 mac 으로 작업을 하기 때문에 너무 자연스럽게 ios로 진행하고 있었는데 슬랙도 열심히 살펴보고 이것저것 해봐도 500 오류가 나는 현상이 발생했다. 결국 3시간동안 계속 찾아봐도 해결방법이 없고 log에는 딸랑 500 오류입니다. 라고 하고 자세한 오류 설명이 없어서 혼자 cors 오류인가..? 하면서 삽질하다가 결국 멘토님에게 도움을 요청했다.
    
    info.Plist 에서 설정을 http 연결을 true로 설정을 해주어야 했었다.

    ![Untitled](https://github.com/murramge/camping_app_project/assets/60298173/f9ca5a99-c8a7-4714-89b0-5ef1069bbfb4)

    
     info.Plist에서 이렇게 작성 후 > 앱 서버 다시 빌드 
    
    이 방식으로 하니까 API 연결을 할 수 있었다.
    

---

