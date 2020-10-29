# Logo
![0262logo](https://user-images.githubusercontent.com/43535460/97553875-548d8f00-1a19-11eb-9752-ee46de197f91.PNG)

## 팀소개 및 프로젝트 설명 동영상
![Slide2](https://user-images.githubusercontent.com/43535460/97554274-de3d5c80-1a19-11eb-9774-73771b4b75de.jpg)

## 기능 설계
 -  카카오 오븐을 이용한 목업 설계 이미지입니다.
### 시작페이지(인기순위 top6 표시)
![Home](https://user-images.githubusercontent.com/72017937/97103865-aae58f80-16f2-11eb-9d52-98424e06ece6.JPG)
### 사이드바
![sidebar2](https://user-images.githubusercontent.com/72017937/97103869-ade08000-16f2-11eb-90ad-fe010f827deb.JPG)
### 혜택카드
![adminLog](https://user-images.githubusercontent.com/72017937/97103877-b769e800-16f2-11eb-8bdb-f5870b0495a0.JPG)
### 혜택카드 추가 페이지(추가할 수 있는 권한이 있는 사람(ex.관리자, 기업 이벤트 담당자)만 가능)
![addBef](https://user-images.githubusercontent.com/72017937/97103879-b89b1500-16f2-11eb-99ec-71841219a72e.JPG)

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
* ECMAScript 6 지원 브라우저 사용
* 권장: Google Chrome

## 기술 스택 (Technique Used) 
### Server(back-end)
 - node.js v12.19.0
 - 프레임워크 : express.js v4.17.1
 - DB : MySQL v2.2.5
 
### front-end
 - 프레임워크 : vue.js v2.6.12
 - UI framework : bootstrap-vue v2.18.1

### App
 - react-native v0.63.3
 - react-native-cli v2.0.1
 - native-base v2.13.14

## 설치 안내 (Installation Process)(개발 테스트용)
```bash
$ git clone https://github.com/osamhack2020/WEB_AmongUs_0262
$ cd ./frontend
$ npm run serve
터미널 하나 더 킨 후
$ cd ./backend
$ yarn install
$ yarn start
```

## 프로젝트 사용법 (Getting Started)
AWS나 Azure같은 클라우드 웹 서비스를 사용하지 않아 BE 실행 시 데이터 테스트 케이스 추가가 필요합니다.  
그러나 본 프로젝트에서는 FE와 BE가 연동되지 않고, FE 자체의 테스트 데이터를 사용하기 때문에 심사하실 때 BE를 실행할 필요가 없습니다.  

### 테스트 데이터베이스 추가하기(vs codespace(Ubuntu) 기준, windows 사용자라면 다른 방식으로 Mysql 설치 권장)
```bash
$ sudo apt-get install mysql-server
$ sudo service mysql start
$ mysql -uroot -p
```
초기 비밀번호 없음. 만약 Permission denying 뜰 경우 sudo 붙여서 실행  

이후 ./backend/test/createDatabase.sql 에 있는 명령어 실행하면 데이터베이스와 그에 접속할 수 있는 사용자 추가  
mysql 접속을 끊고 다시 접속  
```bash
$ mysql -u0262user -p goondb
$ password: 0262fighting!
```
0262user로 접속 후 ./backend/test/tables.sql에 있는 쿼리로 테이블 생성  
이후 ./backend/test/insertUser.sql 과 ./backend/test/insertBenefit.sql에 있는 테스트 케이스를 추가  

 
## 팀 정보 (Team Information)
- 팀장, FE : Kim Min Chul (kminchul95@naver.com), Github Id: nyan101
- BE : Kim Jae Min (msyh0207@naver.com), Github Id: zzamny1013
- FE : Kim Seung Un (seung1457@naver.com), Github Id: ku1457
- App : Lee Joong Hoon (doublehoon99@gmail.com), Github Id: DoubleHoon

## 저작권 및 사용권 정보 (Copyleft / End User License)
 * [MIT](https://github.com/osamhack2020/WEB_AmongUs_0262/blob/master/license.md)
