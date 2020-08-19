const appid = '가입하고 얻는 appid';

// 절대 온도 -> 섭씨 온도 변환 함수 만들 것

// 좌표로부터 날씨 정보 가져옴
function getWeatherFromRegion(region) {
    var result = "";
    $.ajax({
        url: `강의 밑 API 문서 참고하여 채워넣을 것`,
        type: "GET",
        async: false, // 동기로 바꿔주면서 리턴값 얻음
        success: function (data) {
            if (data) {
                result = data;
            } else {
                alert("불러오기 실패");
            }
        }
    });
    return result;
};

weather = getWeatherFromRegion('seoul,kr');

// 변수 temp, humidity 에 html 태그 가져올 것

// 변수 temp, humidity 이용해 온도, 습도로 html 값 변경