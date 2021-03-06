// doAjou.js
// 회원가입(signUp.js)을 제외한 모든 라우팅

// 필요한 모듈
const express = require ('express');
const router = express.Router();
var mongoose = require('mongoose');

// 데이터베이스
const ClientInfo = require('../database/clientInfoModel'); // 고객정보 데이터베이스
const SugangInfo = require('../database/sugangInfoModel'); // 과목정보 데이터베이스
const SugangListbyUserModel = require('../database/sugangListbyUserModel'); // 사용자리스트 계정 데이터베이스
const SugangListbyUserModel2 =  require('../database/sugangListbyUserModel');
const TimeTableForUser = require('../database/timeTableForUser'); // 시간표 배열 데이터베이스

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', function(err) {
  console.log("error: " + err);
});

db.on('connected', function() {
  console.log("Connected successfully to server");
});

// // 데이터베이스 초기화 (제거)
// ClientInfo.remove({}, function(err) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('ClientInfo 삭제 완료');
//     }
//   }
// );
// SugangListbyUserModel.remove({}, function(err) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('SugangAssitList 삭제 완료');
//     }
//   }
// );
// SugangInfo.remove({}, function(err) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('SugangInfo 삭제 완료');
//     }
//   }
// );
// TimeTableForUser.remove({}, function(err) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('TimeTableForUser 삭제 완료');
//     }
//   }
// );


// // 데이터베이스 초기화 (생성)
// // 소프트웨어및컴퓨터공학전공(과)
// new SugangInfo({subjectType: '전공과목',major: '소프트웨어및컴퓨터공학전공(과)', subjectTime: '화D 목C', time: 3, subjectName: '알고리즘',
//   professorName: '손경아', credit: 3, subjectNumber: 'X123'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '전공과목',major: '소프트웨어및컴퓨터공학전공(과)', subjectTime: '월A 목A', time: 3, subjectName: '데이터마이닝',
//   professorName: '손경아', credit: 3, subjectNumber: 'X124'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '전공과목',major: '소프트웨어및컴퓨터공학전공(과)', subjectTime: '화C 금C', time: 3, subjectName: '웹시스템설계',
//   professorName: '오상윤', credit: 3, subjectNumber: 'X126'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '공학기초',major: '소프트웨어및컴퓨터공학전공(과)', subjectTime: '화A 금F', time: 3, subjectName: '선형대수1',
//   professorName: '김응기', credit: 3, subjectNumber: 'X128'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '공학기초',major: '소프트웨어및컴퓨터공학전공(과)', subjectTime: '수D 금D', time: 3, subjectName: '확률및통계1',
//   professorName: '조영종', credit: 3, subjectNumber: 'X129'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '공학기초',major: '소프트웨어및컴퓨터공학전공(과)', subjectTime: '화F 목F', time: 3, subjectName: '확률및통계2',
//   professorName: '김수진', credit: 3, subjectNumber: 'X130'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '공학기초',major: '소프트웨어및컴퓨터공학전공(과)', subjectTime: '수A 목D', time: 3, subjectName: '수학2',
//   professorName: '김응기', credit: 3, subjectNumber: 'X131'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '공학인증교양',major: '소프트웨어및컴퓨터공학전공(과)', subjectTime: '월B 목B', time: 3, subjectName: '과학기술과법',
//   professorName: '오승한', credit: 3, subjectNumber: 'X132'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
//
// // 전자공학전공(과)
// new SugangInfo({subjectType: '전공과목',major: '전자공학전공(과)', subjectTime: '화C 금C', time: 3, subjectName: '전자회로1',
//   professorName: '이기근', credit: 3, subjectNumber: 'J123'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '전공과목',major: '전자공학전공(과)', subjectTime: '월C 목A', time: 3, subjectName: '전자장론',
//   professorName: '김상인', credit: 3, subjectNumber: 'J124'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '공학기초',major: '전자공학전공(과)', subjectTime: '월4 수3', time: 3, subjectName: '공업수학1',
//   professorName: '김공업', credit: 3, subjectNumber: 'J125'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '공학기초',major: '전자공학전공(과)', subjectTime: '화E 수D', time: 3, subjectName: '공업수학2',
//   professorName: '박공업', credit: 3, subjectNumber: 'J126'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '공학인증교양',major: '전자공학전공(과)', subjectTime: '월B 목B', time: 3, subjectName: '전자란무엇인가',
//   professorName: '김전자', credit: 3, subjectNumber: 'J127'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
//
//
// // 화학공학전공(과)
// new SugangInfo({subjectType: '전공과목',major: '화학공학전공(과)', subjectTime: '수D 금D', time: 3, subjectName: '화학1',
//   professorName: '김화학', credit: 3, subjectNumber: 'H123'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '전공과목',major: '화학공학전공(과)', subjectTime: '화C 수E', time: 3, subjectName: '화학2',
//   professorName: '김학화', credit: 3, subjectNumber: 'H124'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '공학기초',major: '화학공학전공(과)', subjectTime: '월B 수B', time: 3, subjectName: '화학실험',
//   professorName: '박분자', credit: 3, subjectNumber: 'H125'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '공학인증교양',major: '화학공학전공(과)', subjectTime: '월B 목B', time: 3, subjectName: '분자란무엇인가',
//   professorName: '김분자', credit: 3, subjectNumber: 'H126'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
//
// // 미디어콘텐츠전공(과)
// new SugangInfo({subjectType: '전공과목',major: '미디어콘텐츠전공(과)', subjectTime: '월2 수2', time: 3, subjectName: '게임디자인',
//   professorName: '오규환', credit: 3, subjectNumber: 'M123'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '전공과목',major: '미디어콘텐츠전공(과)', subjectTime: '월D 금D', time: 3, subjectName: '게임프로그래밍',
//   professorName: '김게임', credit: 3, subjectNumber: 'M124'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '공학기초',major: '미디어콘텐츠전공(과)', subjectTime: '월B 목C', time: 3, subjectName: '게임수학',
//   professorName: '김미디', credit: 3, subjectNumber: 'M125'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
//
//
// // 경영학전공(과)
// new SugangInfo({subjectType: '전공과목',major: '경영학전공(과)', subjectTime: '월4 목4', time: 3, subjectName: '경영학개론',
//   professorName: '김경영', credit: 3, subjectNumber: 'T123'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '전공과목',major: '경영학전공(과)', subjectTime: '월D 금D', time: 3, subjectName: '경영학1',
//   professorName: '최영경', credit: 3, subjectNumber: 'T124'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '공학기초',major: '경영학전공(과)', subjectTime: '수B 목C', time: 3, subjectName: '기초경영',
//   professorName: '김경경', credit: 3, subjectNumber: 'T125'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
//
//
// // 교양과목
// new SugangInfo({subjectType: '교양과목',major: '', subjectTime: '월4 화3', time: 3, subjectName: '과학과철학',
//   professorName: '이진희', credit: 3, subjectNumber: 'G123'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
//
// new SugangInfo({subjectType: '교양과목',major: '', subjectTime: '월E 화E', time: 3, subjectName: '신화와철학',
//   professorName: '김신화', credit: 3, subjectNumber: 'G125'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '교양과목',major: '', subjectTime: '수F 목F', time: 3, subjectName: '정치와철학',
//   professorName: '최정치', credit: 3, subjectNumber: 'G126'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
//
// // 기초과목
// new SugangInfo({subjectType: '기초과목',major: '', subjectTime: '목2 금2', time: 3, subjectName: '물리학',
//   professorName: '김물리', credit: 3, subjectNumber: 'K123'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '기초과목',major: '', subjectTime: '수D 목D', time: 3, subjectName: '생명과학',
//   professorName: '최생명', credit: 3, subjectNumber: 'K124'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '기초과목',major: '', subjectTime: '월D 목D', time: 3, subjectName: '지구과학',
//   professorName: '고지구', credit: 3, subjectNumber: 'K125'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });
// new SugangInfo({subjectType: '기초과목',major: '', subjectTime: '화A 목A', time: 3, subjectName: '생명과학2',
//   professorName: '이생명', credit: 3, subjectNumber: 'K126'}).save(function(err,document) {
//   if (err)
//     return console.error(err);
//   console.log('강의 생성');
// });


// // 데이터베이스 조회
// ClientInfo.find(function (err,info) {
//   if (err) {
//     return console.log("err " + err);
//   } else {
//     console.log('현재 ClientInfo 저장되어있는 Data: '+info);
//   }
// });
// SugangListbyUserModel.find(function (err,info) {
//   if (err) {
//     return console.log("err " + err);
//   } else {
//     console.log('현재 SugangListbyUserModel 저장되어있는 Data: '+info);
//   }
// });
// SugangInfo.find(function (err,info) {
//   if (err) {
//     return console.log("err " + err);
//   } else {
//     console.log('현재 SugangInfo 저장되어있는 Data: '+info);
//   }
// });
// TimeTableForUser.find(function (err,info) {
//   if (err) {
//     return console.log("err " + err);
//   } else {
//     console.log('현재 TimeTableForUser 저장되어있는 Data: '+info);
//   }
// });


/* Session Check -------------------------------------------------------------------
* 페이지를 로딩시키는 동시에 실행한다. -> app.component.ts의 ngOnInit에서 실행됨.
* session에 사용자의 user_ID가 있으면 새로운 창을 띄우거나 새로고침을 눌러도 session에 들어있는 사용자의 정보를 유지할 수 있다.
*/
router.get('/sessionCheck',function (req,res) {
  // session이 존재할 경우 req.session에 사용자 id가 저장된다.
  // 현재 session에 저장되어있는 user_ID로 DB의 ClientInfo에 일치하는 정보가 있는지 확인한다.
  ClientInfo.findOne({userID: req.session.user_ID}, function (err, info){
    if (err) {
      return console.log("err " + err);
    }
    // 현재 session에 user_ID 정보가 DB의 ClientInfo와 일치하지 않는 경우 (로그인 되어있지 않은 경우, session이 파괴된 경우)
    if(!info){
      res.send({userName: '', boolean: false, page: 1});
    }
    // 현재 session에 user_ID 정보가 DB의 ClientInfo 와 일치하는 경우
    // 사용자의 이름과 현재 페이지(수강신청 페이지=1 or 시간표 페이지=2)를 돌려준다.
    else {
      res.send({userName: info.userName, boolean: true, page: sess.page});
    }
  })
});
/* Session Page -------------------------------------------------------------------
* 현재 페이지를 session에 저장한다.
* 사용자가 새로운 창을 띄우거나 새로고침을 했을 때 전에 보고 있던 페이지를 유지할 수 있다.
*/
router.post('/sessionPage',function (req,res) {
  // sess.page에 수강신청 페이지인지 시간표 페이지인지 받아서 저장한다.
  sess.page = req.body.page; // session에 페이지 저장
  res.send({});
});
/* Login -------------------------------------------------------------------
* 로그인되면 req로 받은 userID를 session에 저장해서 새로운 창을 띄우거나 새로고침했을 경우에도 session 유지가 되도록 해준다.
* 위에 Session Check를 통해 session이 유지 될 수 있다.
*/
router.post('/login',function(req,res){
  // sess (=req.session) 생성
  sess = req.session;

  // req로 받은 사용자의 정보를 통해 ClientInfo에 일치하는 정보가 있는지 확인한다.
  ClientInfo.findOne({userID: req.body.id, userPassword: req.body.pw}, function (err, info) {
    if (err) {
      return console.log("err " + err);
    }
    //로그인 정보가 틀렸을 경우
    if(!info){
      const cliInfo= {userName: '', boolean: false};
      res.send(cliInfo);
    }
    // 로그인 정보가 맞는 경우
    else {
      // session에 로그인한 사용자의 ID를 저장한다.
      sess.user_ID = info.userID;
      console.log('로그인한 사용자의 이름: '+info.userName);
      console.log('세션 사용자의 이름: '+sess.user_ID);
      const cliInfo = {userName: info.userName, boolean: true} ;
      res.send(cliInfo);
    }
  })
});
/* Logout-------------------------------------------------------------------
* 사용자가 로그아웃을 하게 되면 session을 유지를 해제하기 위해 req의 session을 파괴한다.
*/
router.get('/logout',function (req,res) {
  req.session.destroy(); //session 파괴
  res.send({});
});
/* getAllSubjects-------------------------------------------------------------------
* 사용자의 정보를 session으로 접근해 sugangListbyUserModel 데이터베이스에서 해당하는 사용자의 과목들을 돌려준다.
*/
router.get('/getAllSubjects',function (req,res) {
  // session에 담긴 사용자의 ID로 사용자의 과목들을 찾는다.
  SugangListbyUserModel.findOne({userID: req.session.user_ID},function (err,infoList) {
    if (err) {
      return console.log("err " + err);
    }
    // SugangListbyUserModel에 내 정보가 없을 경우
    // 사용자 리스트에 새로운 계정 생성
    if(!infoList){
      var newUser = new SugangListbyUserModel({userID: req.session.user_ID})
      newUser.save(function (err,document) {
        if (err)
          return console.error(err);
        console.log('리스트계정 생성: '+document);
      })
      var allSubject = newUser.subjectInfo;
      res.send(allSubject); //
    }
    // SugangListbyUserModel에 사용자의 정보가 있을 경우
    // 사용자 계정에 담긴 과목들을 돌려준다.
    else {
      var allSubject = infoList.subjectInfo;
      console.log(allSubject);
      res.send(allSubject);
    }
  })
});
// 첫번째 페이지
router.get('/getAllSubjects_F',function (req,res) {
  SugangListbyUserModel.findOne({userID: req.session.user_ID},function (err,infoList) {
    if (err) {
      return console.log("err " + err);
    }
    if(!infoList){
      var newUser = new SugangListbyUserModel({userID: req.session.user_ID})
      newUser.save(function (err,document) {
        if (err)
          return console.error(err);
      })
      var allSubject = newUser.subjectInfo2;
      res.send(allSubject);
    } else {
      var allSubject = infoList.subjectInfo2; //
      res.send(allSubject);
    }
  });
});
/* addSubject-------------------------------------------------------------------
* 사용자가 과목추가 버튼을 누르면 해당 과목을 수강신청 페이지와 시간표 페이지를 구분해서 데이터베이스에 저장한다.
*/
router.post('/addSubject', function (req,res) {
  // timetable을 5*24 배열로 구성하여, 각각의 칸마다 과목이 들어있으면 +1을 하면서 시간표 중복을 체크한다.
  var timetable = new Array(new Array(24), new Array(24), new Array(24), new Array(24), new Array(24) );
  for(var i = 0; i < timetable.length; i++) {
    for(var j = 0; j < timetable[i].length; j++) {
      timetable[i][j] = 0;
    }
  }
  // time은 '수C' or '금1'과 같은 형식으로 넘어온다. 해당 값을 파싱하여 timetable에 표시한다.
  function markTime(time) {
    var day;
    switch(time[0]) {
      case '월':
        day = 0;
        break;
      case '화':
        day = 1;
        break;
      case '수':
        day = 2;
        break;
      case '목':
        day = 3;
        break;
      case '금':
        day = 4;
        break;
    }
    switch(time[1]) {
      case 'A':
        timetable[day][0] += 1;
        timetable[day][1] += 1;
        timetable[day][2] += 1;
        break;
      case 'B':
        timetable[day][3] += 1;
        timetable[day][4] += 1;
        timetable[day][5] += 1;
        break;
      case 'C':
        timetable[day][6] += 1;
        timetable[day][7] += 1;
        timetable[day][8] += 1;
        break;
      case 'D':
        timetable[day][9] += 1;
        timetable[day][10] += 1;
        timetable[day][11] += 1;
        break;
      case 'E':
        timetable[day][12] += 1;
        timetable[day][13] += 1;
        timetable[day][14] += 1;
        break;
      case 'F':
        timetable[day][15] += 1;
        timetable[day][16] += 1;
        timetable[day][17] += 1;
        break;
      case 'G':
        timetable[day][18] += 1;
        timetable[day][19] += 1;
        timetable[day][20] += 1;
        break;
      case 'H':
        timetable[day][21] += 1;
        timetable[day][22] += 1;
        timetable[day][23] += 1;
        break;
      default:
        timetable[day][time[1]*2 - 2] += 1;
        timetable[day][time[1]*2 - 1] += 1;
    }
  }
  // session으로 사용자 리스트에 사용자의 계정이 있는지 확인한다.
  SugangListbyUserModel.findOne({userID: req.session.user_ID}, function (err, infoList){
    if (err) {
      return console.log("err " + err);
    }
    // 첫 페이지에서 올 경우 (isNickname => boolean , Nickname은 사용자 편의를 위한 과목명 ex) 확률과통계 -> 확통,ㅎㅌ)
    if(req.body.isNickname == true){
      // 과목코드로 과목 존재 확인
      SugangInfo.findOne({subjectNumber: req.body.subjectNumber},function (err, courseInfo) {
        if (err) {
          return console.log("err " + err);
        }
        // 잘못된 입력 값 (과목코드)
        if(!courseInfo){
          var isAddSuccess = 'wrong';
          // 과목코드가 틀렸다는 메세지를 보낸다.
          res.send({msg: isAddSuccess});
        }
        // 올바른 입력 값 (과목코드)
        else {
          var isAddSuccess = 'success';
          courseInfo.subjectName = req.body.subjectName; // 계정 List에 과목 저장 (계정 List의 subjectName을 nickname으로 변경)  ex) 도메인분석과설계 -> 도분설
          // 첫 번째 페이지 데이터베이스에만 저장
          infoList.subjectInfo2.push(courseInfo);

          // 데이터베이스에 저장되어있는 수강정보의 시간을 가지고 Timatable에 마킹한다.
          for(var i=0; i < infoList.subjectInfo2.length; i++) {
            var timeString = infoList.subjectInfo2[i].subjectTime;
            for(var j=0; j < timeString.length / 2 - 1; j++) {
              var time = timeString[j * 3] + timeString[j * 3 + 1];
              markTime(time);
            }
          }

          // 중복인 경우를 체크한다.
          for(var i = 0; i < timetable.length; i++) {
            for(var j = 0; j < timetable[i].length; j++) {
              if(timetable[i][j] > 1) {
                var isAddSuccess = 'duplicate'; // 시간이 중복일 경우 중복 표시한다.
              }
            }
          }

          // 최종적으로 성공일 경우
          if(isAddSuccess === 'success') {
            // 첫 번째 페이지 데이터베이스에만 저장
            infoList.save(function(err,document) {
              if (err)
                return console.error(err);
            });
          }
          res.send({msg: isAddSuccess, courseInfo: courseInfo});
        }
      })
    } else { // 두번째 페이지에서 올 경우
      SugangInfo.findOne({subjectNumber: req.body.subjectNumber},function (err, courseInfo) {
        if (err) {
          return console.log("err " + err);
        }
        // 잘못된 입력 값 (과목코드)
        if(!courseInfo){
          var isAddSuccess = false;
          res.send(isAddSuccess); // 클라이언트 쪽에서 alert 호출 요망
        }
        // 올바른 입력 값 (과목코드)
        else {
          var isAddSuccess = true;
          courseInfo.subjectName = req.body.subjectName; // 계정 List에 과목 저장 (계정 List의 subjectName을 nickname으로 변경)

          // 첫번째 페이지와 두번째 페이지 둘 다 저장한다.
          infoList.subjectInfo.push(courseInfo);
          infoList.subjectInfo2.push(courseInfo);
          infoList.save(function(err,document) {
            if (err)
              return console.error(err);
          });
          infoList.save(function(err,document) {
            if (err)
              return console.error(err);
          });
          res.send(isAddSuccess);
        }
      })
    }
  })
})
/* deleteSubject-------------------------------------------------------------------
* 사용자가 과목삭제 버튼을 누르면 해당 과목을 수강신청 페이지와 시간표 페이지를 구분해 데이터베이스에서 삭제한다.
* req에 들어있는 과목코드로 사용자리스트 계정의 해당 과목을 삭제한다.
*/
router.post('/deleteSubject',function (req,res) {
  // session으로 사용자 리스트에 사용자의 계정이 있는지 확인한다.
  SugangListbyUserModel.findOne({userID: req.session.user_ID},function (err,infoList) {
    if (err) {
      return console.log("err " + err);
    }
    // 두번째 페이지 디비에서 찾고, 지운다.
    SugangListbyUserModel.findOneAndUpdate({userID: req.session.user_ID},{$pull: { subjectInfo: {subjectNumber: req.body.subjectNumber}}}, function (err, infoList){
      if (err) {
        return console.log("err " + err);
      }
    });
    // 첫번째 페이지에서 과목코드로 찾고, 지운다.
    SugangListbyUserModel.findOneAndUpdate({userID: req.session.user_ID},{$pull: { subjectInfo2: {subjectNumber: req.body.subjectNumber}}}, function (err, infoList){
      if (err) {
        res.send({});
        return console.log("err " + err);
      }
    });
    res.send({});
  });
});

// 첫번째 페이지에서 지우는 거는 그냥 마음대로 지우면 된다.
router.post('/deleteSubject_F',function (req,res) {
  // 첫번째 페이지에서 과목코드로 찾고, 지운다.
  SugangListbyUserModel.findOneAndUpdate({userID: req.session.user_ID},{$pull: { subjectInfo2: {subjectNumber: req.body.subjectNumber}}}, function (err, infoList){
    if (err) {
      return console.log("err " + err);
    }

    SugangInfo.findOne({subjectNumber: req.body.subjectNumber},function (err,courseInfo) {
      if (err) {
        return console.log("err " + err);
      }
      res.send({CourseInfo: courseInfo});
    })
  })
})
/* searchSubject-------------------------------------------------------------------
* 사용자가 시간표 페이지에서 조회 버튼을 누르면 req에 담긴 조건에 맞는 정보들을 조회한다.
*/
router.post('/searchSubject',function (req,res) {

  var ar = new Array();
  const js = new Object();
  ar[0] = req.body.subjectType_2B;
  ar[1] = req.body.major_2B;
  ar[2] = req.body.day_2B;
  ar[3] = req.body.time_2B;
  ar[4] = req.body.subjectName_2B;
  ar[5] = req.body.professorName_2B;
  for(var i=0;i<6;i++) {
    if (ar[i] == undefined || ar[i]=="undefined") {// js JSON에 해당 조건을 추가한다.
      ar[i] = "";
    }
    else {
      switch (i) {
        case 0:
          js.subjectType = ar[0];
          break;
        case 1:
          js.major = ar[1];
          break;
        case 4:
          js.subjectName = new RegExp(ar[4]);  // 과목이름을 전부 안쓰고 일부만 써도 조회가 되도록 해놨다.
          break;
        case 5:
          js.professorName = new RegExp(ar[5]);  // 교수명도 전부 안쓰고 일부만 써도 조회가 되도록 해놨다.
      }
    }
  }
  js.subjectTime = new RegExp(ar[2]+ar[3]);// 시간은 월 이면 월요일에 해당하는 모든 과목 , 월C면 월요일C에 해당하는 모든 과목을 불러오도록 하였다.
  SugangInfo.find(js,function (err, courseInfo){ //위의 조건 (js)로 해당하는 과목을 찾는다.
    if (err) {
      return console.log("err " + err);
    }
    res.send(courseInfo); // 찾은 과목을 돌려준다.
  });
})
/* getUserTimeTable-------------------------------------------------------------------
* 사용자가 시간표 페이지에서 자신의 과목들을 시간표로 볼수 있도록 서버에 요청한다.
* 서버는 요일마다 과목들이 담긴 배열들을 돌려줘서 사용자가 시간표 상에서 볼 수 있도록 해준다.
*/
router.get('/getUserTimeTable',function (req,res) {
  TimeTableForUser.findOne({userID: req.session.user_ID},function (err, timetableInfo) {
    if (err) {
      return console.log("err " + err);
    }
    if(timetableInfo === null){
      Mon = new Array();
      Tue = new Array();
      Wed = new Array();
      Thur = new Array();
      Fri = new Array();
      numbering = new Array();
      // 각 요일 배열이 48칸인 이유
      // 한 칸당 15분(쉬는 시간 고려)
      // 아침 9시부터(A교시) 저녁 9시(H교시)까지 생각
      // 15(1칸) * 4(1시간) * 12(9am ~ 9pm) = 48칸이 필요
      for (var i = 0; i < 48; i++) {
        Mon.push({numbering: 0, isFirst: false, itemName: ''});
        Tue.push({numbering: 0, isFirst: false, itemName: ''});
        Wed.push({numbering: 0, isFirst: false, itemName: ''});
        Thur.push({numbering: 0, isFirst: false, itemName: ''});
        Fri.push({numbering: 0, isFirst: false, itemName: ''});
      }
      for( var j=0; j<8; j++){
        numbering.push(false);
      }
      var newUser = new TimeTableForUser();
      newUser.userID = req.session.user_ID;
      newUser.monday =  Mon;
      newUser.tuesday = Tue;
      newUser.wednesday = Wed;
      newUser.thursday = Thur;
      newUser.friday = Fri;
      newUser.numberingArray = numbering;
      newUser.save(function (err) { // 계정이 없는 경우 자동으로 생성해서 데이터베이스에 새로 저장해준다.
        if (err) return console.error(err);
        console.log('계정 추가');
      });
      res.send(newUser);
    }
    else{
      var userTimeTable = {
        monday: timetableInfo.monday,
        tuesday: timetableInfo.tuesday,
        wednesday: timetableInfo.wednesday,
        thursday: timetableInfo.thursday,
        friday: timetableInfo.friday,
        numberingArray: timetableInfo.numberingArray
      };
      res.send(userTimeTable);
    }

  });
});
/* createTimeTable-------------------------------------------------------------------
*  timeTableForUser 데이터베이스에 새로운 계정을 생성한다.
*/
router.post('/createTimeTable', function (req,res) {
  var userTimeTable = new TimeTableForUser();
  userTimeTable.userID = req.session.user_ID;
  userTimeTable.monday =  req.body.Monday_R;
  userTimeTable.tuesday = req.body.Tuesday_R;
  userTimeTable.wednesday = req.body.Wednesday_R;
  userTimeTable.thursday = req.body.Thursday_R;
  userTimeTable.friday = req.body.Friday_R;
  userTimeTable.numberingArray = req.body.numberingArray;
  userTimeTable.save(function (err) {
    if (err) return console.error(err);
  });
  res.send({});
});
/* updateUserTimeTable-------------------------------------------------------------------
*  시간표 페이지에서 과목의 업데이트가 필요할때 사용자가 서버에게 요청한다.
*/
router.post('/updateUserTimeTable',function (req,res) {
  // 기존의 과목이 있고 업데이트가 필요할경우 업데이트해준다.
  TimeTableForUser.findOneAndUpdate({userID: req.session.user_ID},
    {monday: req.body.Monday_R, tuesday: req.body.Tuesday_R, wednesday : req.body.Wednesday_R,
      thursday : req.body.Thursday_R, friday: req.body.Friday_R,
      numberingArray : req.body.numberingArray}
    ,function (err) {
      if (err) return console.log("err " + err);
      res.send({});
    });
});
module.exports = router;
