import axios from "axios";
import xml2js from "xml2js"

// 시세 정보 호출
function getSise(isuCd) {

    if(isuCd == null) {
        isuCd = '035720'
    };

    axios({
        method : 'GET',
        url : 'http://asp1.krx.co.kr/servlet/krx.asp.XMLSise',
        param : {
            code : this.isuCd
        }
    })
    .then(function(res) {
        console.log(res);

        // xml 파싱
        xml2js.parseString(res, function(err, result) {
            console.log(result)
            console.log(JSON.stringify(result));
        });

    })
    .catch(function(err) {
        console.log(err)
    })
}

// 재무 정보 호출
function getJemu(isuCd) {

    if(isuCd == null) {
        isuCd = '035720'
    };

    axios({
        method : 'GET',
        url : 'http://asp1.krx.co.kr/servlet/krx.asp.XMLJemu',
        param : {
            code : this.isuCd
        }
    })
    .then(function(res) {
        console.log(res);

        // xml 파싱
        xml2js.parseString(res, function(err, result) {
            console.log(result)
            console.log(JSON.stringify(result));
        });

    })
    .catch(function(err) {
        console.log(err)
    })
}



export { getSise, getJemu };