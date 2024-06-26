# :cookie: cookiewalk
<p align="center">
  <img src="/cookiewalk/public/logo/logo.jpg" width="40%" height="30%" title="px(픽셀) 크기 설정"     alt="logo"></img>
</p>

## :fire: 쿠키워크 프로젝트 ##
> 디지털스마트 부산 아카데미 웹개발 훈력과정 프로젝트<br>
> 개발기간: 2024.04 ~ 2024.06.20

## :car: 배포 주소 ##
> 프론트엔드 서버: https://cookiewalk.netlify.app <br>
> 백엔드 서버(reverseGeocoding API) : https://blonde-bobolink-smartbusan-a2d9f8e5.koyeb.app

## 시작 가이드 ## 


## :family: 팀원 소개 ##
<table>
  <tr>
    <td><div align="center"><b>권아진</div></td>
    <td><div align="center"><b>임민형</div></td>
    <td><div align="center"><b>송동현</div></td>
    <td><div align="center"><b>변진석</div></td>
    <td><div align="center"><b>임현욱</div></td>
  </tr>
  <tr>
    <td><img src="/cookiewalk/public/images/권아진.png"></td>
    <td><img src="/cookiewalk/public/images/임민형.png"></td>
    <td><img src="/cookiewalk/public/images/송동현.png"></td>
    <td><img src="/cookiewalk/public/images/변진석.png"></td>
    <td><img src="/cookiewalk/public/images/임현욱.png"></td>
  </tr>
  <tr>
    <td><div align="center">프론트엔드</div></td>
    <td><div align="center">프론트엔드</div></td>
    <td><div align="center">백엔드</div></td>
    <td><div align="center">백엔드</div></td>
    <td><div align="center">백엔드</div></td>
  </tr>
</table>





## :loudspeaker: 프로젝트 소개 ##
#### 개발배경 ####  
좌식위주 생활, 비만율의 증가에 따른 신체활동 부족은 심혈관계질환, 당뇨병, 일부 암 같은 비감염성질환의 주요 위험 요인입니다. 걷기는 이런 신체활동 부족 문제를 개선할 수 있는 아주 쉽고 편한 방법입니다. 저희는 지도에 사용자가 직접 그림을 그린 후 그린 그림을 직접 따라 걸어가며 그림을 완성할 수 있도록 함으로써 사용자가 걷기를 좀 더 즐겁게 할 수 있도록 도와주는 서비스를 만들자느 취지에서 이번 쿠키워크 프로젝트를 기획하게 되었습니다.



## :wrench: 기술스택 ##
#### Environment ####
<div>
  <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
</div>

#### Config ####
<div>
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
</div>

#### Development ####
<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
  <img src="https://img.shields.io/badge/node.js-5FA04E?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white">
</div>


## :mag_right: 화면 구성 및 주요 기능 ##
### 로그인 페이지 ### 
<p align="center">
  <img src="/readme_images/로그인페이지.jpg" width="25%" height="25%" title="px(픽셀) 크기 설정"     alt="logo"></img>
</p>

* supabase Auth 기능을 활용하여 일반 로그인과 구글, 카카오 소셜 로그인 기능을 구현했습니다.
* 회원가입 시에는 이메일과 비밀번호를 입력 후 중복을 확인하고 중복이 아닐 시 메일로 인증링크가 전송됩니다. 인증링크를 클릭하게 되면 회원가입이 완료되고 로그인할 수 있습니다.
* 로그인한 사용자는 홈페에지, 지도페이지, 걷기페이지, 그룹페이지, 마이페이지를 이용할 수 있습니다.

### 홈 페이지 ###
<p align="center">
  <img src="/readme_images/홈페이지.gif" width="25%" height="25%"title="px(픽셀) 크기 설정"alt="logo"></img>
</p>

* 사용자들이 자유롭게 게시글을 올리는 커뮤니티 페이지 입니다.
* 게시글을 일반 사진 게시글과 자신이 걸은 경로 그림 게시글을 올릴 수 있습니다.
* 사용자들을 게시된 게시글에 좋아요나 댓글을 입력할 수 있고 게시글 작성자 부분을 클릭시 해당 사용자의 프로필로 이동하여 팔로우할 수 있습니다.

### 맵 페이지 ###
<p align="center">
   <img src="/readme_images/맵페이지메뉴.gif" width="25%" height="25%"title="px(픽셀) 크기 설    `정"alt="logo"></img>
  <img src="/readme_images/맵페이지.gif" width="25%" height="25%"title="px(픽셀) 크기 설정"alt="logo"></img>
</p>

* 사용자들이 따라그릴 경로 그림을 검색하거나 그릴 수 있는 페이지 입니다.
* 처음 페이지로 이동시 현재 사용자의 위치에 있는 경로 그림들이 나열되고 지역, 거리, 난이도 별로 선택하거나 특정단어 입력 후 검색시 위치나 제목 중에 입력한 단어가 들어가 있는 경로 그림을 조회할 수 있습니다.
* 오른쪽 하단에 연필 아이콘을 선택하면 경로를 직접 그리고 저장할 수 있습니다.
* 좌표를 직접 손으로 찍어가며 그림을 그릴 수 있으며 선의 색상 선택해 사용자가 원하는 색상의 그림을 그릴 수 있습니다. 



### 걷기 페이지 ###

<p align="center">
  <img src="/readme_images/걷기페이지1.gif" width="25%" height="25%"title="px(픽셀) 크기 설정"alt="logo"></img>
   <img src="/readme_images/걷기페이지2.gif" width="25%" height="25%"title="px(픽셀) 크기 설정"alt="logo"></img>
</p>

* 걷기 페이지에서는 세가지 걷기를 지원합니다.
* 경로를 따라, 이어 걷는 경우 포인트에 도착할 때마다 포인트와 전 포인트와의 폴리라인이 진해져 현재 어디까지 진행 중인지 확인 할 수 있습니다.
* 경로 그림 없이 걷기의 경우 사용자의 실시간 위치 이동에 따른 폴리라인이 생성됩니다.
* 구글 TTS API를 활용해 다음 포인트에 좌회전, 우회전, 유턴의 방향전환이 있을 시 음성으로 안내해 주어 지도를 계속 보고 있지 않고도 그림을 그릴 수 있습니다.
* 500m 걷기 시마다 1포인트의 포인트를 획득할 수 있습니다. 

#### 경로 따라 걷기 ####
* 루트 버튼을 클릭해 경로를 불러온 후 걷기 시작 버튼을 클릭해 따라 그림을 그릴 수 있습니다.

#### 미완성 경로 이어 걷기 ####
* 미완성 경로 버튼을 클릭해 미완성한 걷기 기록을 불러와 이어서 그릴 수 있습니다.

#### 경로 그림 없이 걷기 ####
* 루트나 미완성 루트 선택없이 시작할 시 백지 상태로 그림을 그릴 수 있습니다.

<br>
<br>

### 그룹 메뉴 및 만들기 페이지 ### 
#### 그룹조회 및 만들기 ####
<p align="center">
  <img src="/readme_images/그룹메뉴.jpg" width="25%" height="25%"title="px(픽셀) 크기 설정"alt="logo"></img>
  <img src="/readme_images/그룹메뉴2.jpg" width="25%" height="25%"title="px(픽셀) 크기 설정"alt="logo"></img>
</p>

* 사용자들이 그룹을 만들어 협력하여 그림을 완성할 수 있는 페이지 입니다.
* 그룹 조회를 통해 사용자가 함께하고 싶은 그룹을 선택하고 가입하기 버튼을 클릭해 가입할 수 있습니다. 
* 사용자가 경로 그림을 그려 그룹을 만들 수 있습니다.
* 최대 5명 까지의 함께 그림을 그릴 인원수를 지정하고 인원수 만큼의 서로 다른 경로를 그려 좀 혼자 걸을 때보다 좀 더 완성도 높은 그림을 그릴 수 있습니다.
* 구역 별로 원하는 색을 지정할 수 있습니다. 


#### 가입한 그룹 상세 페이지 ####
<p align="center">
  <img src="/readme_images/그룹메뉴3.jpg" width="25%" height="25%"title="px(픽셀) 크기 설정"alt="logo"></img>
</p>

* 가입한 그룹의 상세 페이지 입니다.
* 현재 그림의 진행 상황과 담당 경로를 선택할 수 있습니다.
* 구역별로 완성도가 퍼센트로 표시되고 지도에서도 걷기 진행률에 따라 투명도를 조절해 한눈에 확인할 수 있도록 하였습니다. 
* 경로 선택 후 걷기 시작 버튼을 클릭해 걷기를 시작할 수 있습니다. 

#### 걷기 완료 및 게시글 작성 ####
<p align="center">
  <img src="/readme_images/그룹4.jpg" width="25%" height="25%"title="px(픽셀) 크기 설정"alt="logo"></img>
  <img src="/readme_images/그룹5.jpg" width="25%" height="25%"title="px(픽셀) 크기 설정"alt="logo"></img>
</p>

* 그룹 모두 걷기를 완료하면 걷기 시작버튼이 걷기 완료 버튼으로 바뀌고 클릭시 그룹 경로 게시글을 작성 할 수 있습니다.

<br>


### 마이페이지 ### 
<p align="center">
  <img src="/readme_images/마이페이지.gif" width="25%" height="25%"title="px(픽셀) 크기 설정"alt="logo"></img>
  <img src="/readme_images/상점.gif" width="25%" height="25%"title="px(픽셀) 크기 설정"alt="logo"></img>
</p

* 사용자의 정보를 확인할 수 있는 페이지 입니다.
* 사진, 닉네임, 이름 등 프로필 정보를 변경할 수 있고 완성한 경로를 확인할 수 있습니다.
* 그래프를 통해 주, 월, 년 별로 사용자의 걸은 거리를 확인 할 수 있습니다.
* 우측 상단의 나의 포인트를 클릭해 상점으로 이동할 수 있고 아바타나 커피 같은 상품을 구매할 수 있습니다.

### :movie_camera: 시연동영상 
[![Video Label](/readme_images/시연영상스크린샷.png)](https://youtu.be/prmDZ0I3IAY)


## :pushpin: 기여도와 역할 ##
저는 이번 프로젝트에서 백엔드를 맡았습니다. 그중에서도 
* 데이터베이스 설계
* supabase Auth 기능을 활용한 로그인(일반, 구글, 카카오)
* Naver Web Dynamic Map API, react-naver-map API를 활용한 지도 호출,
* Naver ReverseGeocoding API, Nodejs를 이용한 좌표 주소 변환
* 경로 및 기록 데이터 관리 및 처리
* Geolocation API를 이용한 산책기능 구현
* 백터의 내적과 외적을 활용한 경로 분석 및 Googel TTS API 를 이용한 음성안내 기능 구현
의 역할을 수행하였습니다.

저희는 supabase라는 백엔드 플랫폼을 사용해서 프로젝트를 진행하였습니다. supabase는 database, auth, storage, realTime 같은 백엔드를 위한 다양한 기능들이 있으며 서버리스 환경을 제공합니다. 하지만 리버스지오코딩 API는 서버프로그래밍이서만 사용이 가능하기 때문에 리버스지오코딩 API을 제외한 모든 백엔드 기능들은 react에서 구현하였습니다. 

## 개선하고 싶은 점 ##

### 그린 경로의 불확실성 ###
그린 경로가 실제로 걷을 수 있는 

 하지만 이 경우에 길이 맞는지 아닌지의 여부를 판단할  수 없어 걷는 도중 길이 아닌 경우 이어 걸을 수 없는 경우가 생깁니다. 

### 


## :trophy: 결과 및 성과 ## 
<p align="center">
  <img src="/readme_images/상장회전.jpg"  width="90%" height="90%"title="px(픽셀) 크기 설정"alt="logo"></img>
</p>

쿠키워크 프로젝트는 디지털스마트부산 아카데미에서 운영하는 제 4기 SW전문인재양성 교육과정에서 진행하였습니다. 모두가 열심히 프로젝트를 수행한 결과 2등인 우수상을 수상할 수 있었습니다.


## :pencil: 소감 및 느낀점 ##
저를 포함한 팀원들 모두 비전공자이고 개발관련 프로젝트 경험이 부족하다보니 프로젝트 주제 선정, 구현 기능 정의 및 구현 방법 등 애플리케이션 구현을 위해 결정해야 하는 것들을 결정하는 것들 부터 프로젝트를 진행하면서 생기는 예상치 못한 오류들 까지 많은 어려움을 겪었습니다. 하지만 모두 함께 고민하고 소통하면서 문제들을 해결해 나갔고 프로젝트를 진행하여 좋은 결과를 얻으면서 저의 첫 번째 프로젝트를 마무리 할 수 있었습니다. <br>
개발자가 되고 싶은 마음과 나의 열정을 확인할 수 있었던 시간이었고 아직 부족한 것이 많은 만큼 더 열심히 공부해 개발자로써 필요한 능력을 쌓아 좋은 개발자가 되도록 노력할 것입니다. 

#### :sparkles: 수료식 롤링 페이퍼
<p align="center">
  <img src="/readme_images/롤링1.jpg"  width="30%" height="30%"title="px(픽셀) 크기 설정"alt="logo"></img>
  <img src="/readme_images/롤링2.jpg"  width="30%" height="30%"title="px(픽셀) 크기 설정"alt="logo"></img>
  <img src="/readme_images/롤링3.jpg"  width="30%" height="30%"title="px(픽셀) 크기 설정"alt="logo"></img>
</p>
<p align="center">
  <img src="/readme_images/롤링4.jpg"  width="30%" height="30%"title="px(픽셀) 크기 설정"alt="logo"></img>
  <img src="/readme_images/롤링5.jpg"  width="30%" height="30%"title="px(픽셀) 크기 설정"alt="logo"></img>
  <img src="/readme_images/롤링6.jpg"  width="30%" height="30%"title="px(픽셀) 크기 설정"alt="logo"></img>
</p>
<p align="center">
  <img src="/readme_images/롤링7.jpg"  width="30%" height="30%"title="px(픽셀) 크기 설정"alt="logo"></img>
</p>

## 작성한 서류들 ##



