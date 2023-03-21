
function findIndex(str, char){
    return str.search(char);
}

var userElementNodes =  document.querySelectorAll('*[id^="user"]');

var userElementArr = Array.from(userElementNodes);


userElementArr.shift();
userElementArr.shift();

var userInformations = [];
for (var i=0;i<userElementArr.length;i++){
    var userName = userElementArr[i].querySelector('.user-name .rating').innerText;
    var userPoint = userElementArr[i].querySelector('.user-points').innerText;
    var index = findIndex(userPoint,"\n");
    var point = userPoint.slice(0,index);
    var userInfor = {
        name : userName,
        numberComplete : Math.round(parseInt(point)/10),
    }
    userInformations.push(userInfor);
}


var data = "Lê_Hồng_Anh_02_01	KieuAnh_2909	thaihung0110	tranthianhnguyen_26	tran_mai_thi_1412	phamhoangtri2306	truongnhat1703	phuc_26022000	ngoquanganh_22112004	Pham_Quang_Hao_15	lehohoanglong_772004	Son_1406	KHANHLY_20042003	Bui_Hoang_Tung_16012004	hoangquyen04	Lưu Trinh	duongquocvinh9029	Y_Jop_Kdoh_07	DO_VIET_HUNG_23_10_2004	quynhgiang0408	huyuneti123	Nguyen_minh_truong_30_12_2004	do_thi_thanh_loan_27012004	nguyen_danh_duoc_22012004	hieunguyen2107	nhatPTsv	nguyenchien21	vosytien	hongocvinh1112	Luong_The_Truong3.	thanh_nhu2004	Le_Trong_Bach_15092007	Truong_Duc_Hoang_15092004	giahunghuynh456	truong0407	Phuong_10	Vo_khac_Kiet	Trinh_Trong_Vinh	ngdinhkhoi	nva2004gl81	loipro	NguyenMinhDung1327	nghiadaucau1	buihongngoc257@gmail.com	dathuynh034	NguyenCongSInh0506	Tuananha2k57pb	"
var userArr  = data.split("	");
for (var i=0;i<userArr.length;i++){
    for (var j=0;j<userInformations.length;j++){
        if (userArr[i] === userInformations[j].name){
            console.log(userInformations[j].point);
        }
    }
}


	