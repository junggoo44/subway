
let timer = setInterval("slde()", 5000);
let aa=1;
let pos;


function top_func() {
    $("html, body").animate({"scrollTop":0}, 500);
};

window.onload=function() {
    $("html, body").animate({"scrollTop":0},500);


    // 메인화면 서브웨이 메뉴 이동
    main2_1.onclick=function() {
        $(".main2").css("color","#292929");
        this.style.color="#009223";
        $(".menu_img").hide();
        menu1.style.display="block";
    };
    main2_2.onclick=function() {
        $(".main2").css("color","#292929");
        this.style.color="#009223";
        $(".menu_img").hide();
        menu2.style.display="block";
    };
    main2_3.onclick=function() {
        $(".main2").css("color","#292929");
        this.style.color="#009223";
        $(".menu_img").hide();
        menu3.style.display="block";
    };
    main2_4.onclick=function() {
        $(".main2").css("color","#292929");
        this.style.color="#009223";
        $(".menu_img").hide();
        menu4.style.display="block";
    };

    // 메뉴소개 > 샌드위치(아티클1) > 상세메뉴2 이동
    ati1_box2.style.display="none";
    ati1_box3.style.display="none";

    at1_bt2_1.onclick=function() {
        $(".at1_bt2").css("color","#666666");
        this.style.color="#009223";
        $(".ati1_box").hide();
        ati1_box1.style.display="block";
    };
    at1_bt2_2.onclick=function() {
        $(".at1_bt2").css("color","#666666");
        this.style.color="#009223";
        $(".ati1_box").hide();
        ati1_box2.style.display="block";
    };
    at1_bt2_3.onclick=function() {
        $(".at1_bt2").css("color","#666666");
        this.style.color="#009223";
        $(".ati1_box").hide();
        ati1_box3.style.display="block";
    };
    
    // 메뉴소개 > 랩. 기타(아티클2) > 상세메뉴2 이동
    ati2_box2.style.display="none";
    ati2_box3.style.display="none";
    ati2_box4.style.display="none";

    at2_bt2_1.onclick=function() {
        $(".at2_bt2").css("color","#666666");
        this.style.color="#009223";
        $(".ati2_box").hide();
        ati2_box1.style.display="block";
    };
    at2_bt2_2.onclick=function() {
        $(".at2_bt2").css("color","#666666");
        this.style.color="#009223";
        $(".ati2_box").hide();
        ati2_box2.style.display="block";
    };
    at2_bt2_3.onclick=function() {
        $(".at2_bt2").css("color","#666666");
        this.style.color="#009223";
        $(".ati2_box").hide();
        ati2_box3.style.display="block";
    };
    at2_bt2_4.onclick=function() {
        $(".at2_bt2").css("color","#666666");
        this.style.color="#009223";
        $(".ati2_box").hide();
        ati2_box4.style.display="block";
    };

    // 메뉴소개 > 찹샐러드(아티클3) > 상세메뉴2 이동
    ati3_box2.style.display="none";
    ati3_box3.style.display="none";

    at3_bt2_1.onclick=function() {
        $(".at3_bt2").css("color","#666666");
        this.style.color="#009223";
        $(".ati3_box").hide();
        ati3_box1.style.display="block";
    };
    at3_bt2_2.onclick=function() {
        $(".at3_bt2").css("color","#666666");
        this.style.color="#009223";
        $(".ati3_box").hide();
        ati3_box2.style.display="block";
    };
    at3_bt2_3.onclick=function() {
        $(".at3_bt2").css("color","#666666");
        this.style.color="#009223";
        $(".ati3_box").hide();
        ati3_box3.style.display="block";
    };

    // 메뉴소개 > 아침메뉴(아티클4) > 상세메뉴2 이동
    ati4_box2.style.display="none";
    ati4_box3.style.display="none";
    ati4_box4.style.display="none";

    at4_bt2_1.onclick=function() {
        $(".at4_bt2").css("color","#666666");
        this.style.color="#009223";
        $(".ati4_box").hide();
        ati4_box1.style.display="block";
    };
    at4_bt2_2.onclick=function() {
        $(".at4_bt2").css("color","#666666");
        this.style.color="#009223";
        $(".ati4_box").hide();
        ati4_box2.style.display="block";
    };
    at4_bt2_3.onclick=function() {
        $(".at4_bt2").css("color","#666666");
        this.style.color="#009223";
        $(".ati4_box").hide();
        ati4_box3.style.display="block";
    };
    at4_bt2_4.onclick=function() {
        $(".at4_bt2").css("color","#666666");
        this.style.color="#009223";
        $(".ati4_box").hide();
        ati4_box4.style.display="block";
    };

    // 이용방법 > 써브웨이 이용방법(아티클5) > 상세메뉴2 이동
    ati5_box2.style.display="none";

    at5_bt2_1.onclick=function() {
        this.style.color="white";
        this.style.background="#009223";
        at5_bt2_2.style.color="#666666";
        at5_bt2_2.style.background="white";
        ati5_box1.style.display="block";
        ati5_box2.style.display="none";
    };
    at5_bt2_2.onclick=function() {        
        this.style.color="white";
        this.style.background="#009223";
        at5_bt2_1.style.color="#666666";
        at5_bt2_1.style.background="white";
        ati5_box1.style.display="none";
        ati5_box2.style.display="block";
    };

    // 이용방법 > 써브웨이 이용방법(아티클5) > step 버튼 이동
    at5_order2.style.display="none";
    at5_order3.style.display="none";
    at5_order4.style.display="none";
    at5_order5.style.display="none";

    at5_step1.onclick=function() {
        $(".at5_step").css("background","#ddd");
        this.style.background="#009223";
        $(".at5_order").hide();
        at5_order1.style.display="block";
        $(".at5_bt").css("color","white");
    };
    at5_step2.onclick=function() {
        $(".at5_step").css("background","#ddd");
        at5_step1.style.background="#009223";
        this.style.background="#009223";
        $(".at5_order").hide();
        at5_order2.style.display="block";
        $(".at5_bt").css("color","white");
        at5_bt1.style.color="#009223";
    };
    at5_step3.onclick=function() {
        $(".at5_step").css("background","#ddd");
        at5_step1.style.background="#009223";
        at5_step2.style.background="#009223";
        this.style.background="#009223";
        $(".at5_order").hide();
        at5_order3.style.display="block";
        $(".at5_bt").css("color","white");
        at5_bt1.style.color="#009223";
        at5_bt2.style.color="#009223";
    };
    at5_step4.onclick=function() {
        $(".at5_step").css("background","#ddd");
        at5_step1.style.background="#009223";
        at5_step2.style.background="#009223";
        at5_step3.style.background="#009223";
        this.style.background="#009223";
        $(".at5_order").hide();
        at5_order4.style.display="block";
        $(".at5_bt").css("color","white");
        at5_bt1.style.color="#009223";
        at5_bt2.style.color="#009223";
        at5_bt3.style.color="#009223";
    };
    at5_step5.onclick=function() {
        $(".at5_step").css("background","#009223");
        $(".at5_order").hide();
        at5_order5.style.display="block";
        $(".at5_bt").css("color","#009223");
    };

    // 이용방법 > App 이용방법(아티클5) > step 버튼 이동
    at5_order02.style.display="none";
    at5_order03.style.display="none";
    at5_order04.style.display="none";
    at5_order05.style.display="none";

    at5_step01.onclick=function() {
        $(".at5_step0").css("background","#ddd");
        this.style.background="#009223";
        $(".at5_order0").hide();
        at5_order01.style.display="block";
        $(".at5_bt0").css("color","white");
    };
    at5_step02.onclick=function() {
        $(".at5_step0").css("background","#ddd");
        at5_step01.style.background="#009223";
        this.style.background="#009223";
        $(".at5_order0").hide();
        at5_order02.style.display="block";
        $(".at5_bt0").css("color","white");
        at5_bt01.style.color="#009223";
    };
    at5_step03.onclick=function() {
        $(".at5_step0").css("background","#ddd");
        at5_step01.style.background="#009223";
        at5_step02.style.background="#009223";
        this.style.background="#009223";
        $(".at5_order0").hide();
        at5_order03.style.display="block";
        $(".at5_bt0").css("color","white");
        at5_bt01.style.color="#009223";
        at5_bt02.style.color="#009223";
    };
    at5_step04.onclick=function() {
        $(".at5_step0").css("background","#ddd");
        at5_step01.style.background="#009223";
        at5_step02.style.background="#009223";
        at5_step03.style.background="#009223";
        this.style.background="#009223";
        $(".at5_order0").hide();
        at5_order04.style.display="block";
        $(".at5_bt0").css("color","white");
        at5_bt01.style.color="#009223";
        at5_bt02.style.color="#009223";
        at5_bt03.style.color="#009223";
    };
    at5_step05.onclick=function() {
        $(".at5_step0").css("background","#009223");
        $(".at5_order0").hide();
        at5_order05.style.display="block";
        $(".at5_bt0").css("color","#009223");
    };

    // 이용방법 > 신선한 재료소개(아티클6) > 상세메뉴2 이동
    ati6_box2.style.display="none";
    ati6_box3.style.display="none";
    ati6_box4.style.display="none";

    at6_bt2_1.onclick=function() {
        $(".at6_bt2").css("color","#666666");
        this.style.color="#009223";
        ati6_submenu2.style.height="900px";
        $(".ati6_box").hide();
        ati6_box1.style.display="block";
    };
    at6_bt2_2.onclick=function() {
        $(".at6_bt2").css("color","#666666");
        this.style.color="#009223";
        ati6_submenu2.style.height="1280px";
        $(".ati6_box").hide();
        ati6_box2.style.display="block";
    };
    at6_bt2_3.onclick=function() {
        $(".at6_bt2").css("color","#666666");
        this.style.color="#009223";
        ati6_submenu2.style.height="500px";
        $(".ati6_box").hide();
        ati6_box3.style.display="block";
    };
    at6_bt2_4.onclick=function() {
        $(".at6_bt2").css("color","#666666");
        this.style.color="#009223";
        ati6_submenu2.style.height="1280px";
        $(".ati6_box").hide();
        ati6_box4.style.display="block";
    };

    
    // 새소식 > 이벤트.프로모션(아티클7) > 작은이미지 클릭시 큰이미지 노출
    at7_big2.style.display="none";
    at7_big3.style.display="none";

    at7_click1.onclick=function() {
        $(".at7_big").hide();
        at7_big1.style.display="block";
        at7_bg.style.height="2630px";
        top_func();
    };
    at7_click2.onclick=function() {
        $(".at7_big").hide();
        at7_big2.style.display="block";
        at7_bg.style.height="1450px";
        top_func();
    };
    at7_click3.onclick=function() {
        $(".at7_big").hide();
        at7_big3.style.display="block";
        at7_bg.style.height="2410px";
        top_func();
    };
    at7_click4.onclick=function() {
        $(".at7_big").hide();
        at7_big4.style.display="block";
        at7_bg.style.height="3730px";
        top_func();
    };
};

function top_func() {
    $("html, body").animate({"scrollTop":0}, 500);
};
    



//  ============= 제이쿼리 시작  =================

// 메인화면 큰 이미지 버튼 
function slde() {
    if(aa<=2)
        aa++;
    else
        aa=1;
    $(".big_img_btn li").css({"background":"white", "width":"15px", "borderRadius":"100%"});
    $(".big_img_btn"+aa).css({"background":"#ffce32", "width":"30px", "borderRadius":"10px"});

    $(".big_img_3").stop().animate({"left":"-=100%"}, 1000, function() {
        $(".big_img_3 > li:first").appendTo(".big_img_3");
        $(".big_img_3").css("left", "+=100%");
    });
};


$(function() {

    // 탑 버튼 (공통)
    $(".top").on("click",function() {
        $("html, body").animate({"scrollTop":0}, 500);
    });

    // 아티클 1~4번 서브메뉴1 클릭시 이동
    $(".at1_submenu1 ul li").on("click", function() {
        click=$(this).index()+1;
        $(".at").hide();
        $(".at"+click).show();
        top_func();
    });
    $(".at2_submenu1 ul li").on("click", function() {
        click=$(this).index()+1;
        $(".at").hide();
        $(".at"+click).show();
        top_func();
    });
    $(".at3_submenu1 ul li").on("click", function() {
        click=$(this).index()+1;
        $(".at").hide();
        $(".at"+click).show();
        top_func();
    });
    $(".at4_submenu1 ul li").on("click", function() {
        click=$(this).index()+1;
        $(".at").hide();
        $(".at"+click).show();
        top_func();
    });

    // 아티클 5~6번 서브메뉴1 클릭시 이동
    $(".at5_submenu1 ul li").on("click", function() {      
        click2=$(this).index()+1;
        click2 +=4;
        $(".at").hide();
        $(".at"+click2).show();
        top_func();
    });

    $(".at6_submenu1 ul li").on("click", function() {    
        click2=$(this).index()+1;
        click2 +=4;
        $(".at").hide();
        $(".at"+click2).show();
        top_func();
    });

    // 아티클 7~8번 서브메뉴1 클릭시 이동
    $(".at7_submenu1 ul li").on("click", function() {      
        click3=$(this).index()+1;
        click3 +=6;
        $(".at").hide();
        $(".at"+click3).show();
        top_func();
    });

    $(".at8_submenu1 ul li").on("click", function() {    
        click3=$(this).index()+1;
        click3 +=6;
        $(".at").hide();
        $(".at"+click3).show();
        top_func();
    });

    // 아티클 9~11번 서브메뉴 클릭시 이동
    $(".at9_submenu div ul li").on("click", function() {      
        click3=$(this).index()+1;
        click3 +=8;
        $(".at").hide();
        $(".at"+click3).show();
        top_func();
    });

    $(".at10_submenu1 ul li").on("click", function() {    
        click3=$(this).index()+1;
        click3 +=8;
        $(".at").hide();
        $(".at"+click3).show();
        top_func();
    });


    // 메인화면 큰 이미지 - 버튼 클릭시 이미지 변경 및 버튼 디자인 변경
    let at0_pos = 500, at0_count = 0, at0_no = 0;
    $(".big_img_btn li").css({"background":"white"});
    $(".big_img_btn li:nth-child(1)").css({"background":"#ffce32", "width":"30px", "borderRadius":"10px"});
    
    $(".big_img_btn li").on("click", function() {
        at0_no=$(this).index();
        at0_count=at0_no;
        at0_pos=1920*at0_no;

        $(".big_img_3").stop().animate({"left": -at0_pos+"px"},500);
        
        $(".big_img_btn li").css({"background":"white", "width":"15px", "borderRadius":"100%"});
        $(this).css({"background":"#ffce32", "width":"30px", "borderRadius":"10px"});
    });

    // 메인화면 큰이미지(3개) 클릭시 해당 화면으로 이동
    $(".main_big1").on("click", function() {
        $("#main_1").hide();
        $("#main_2").hide();
        $("#main_3").hide();
        $("#ati7").show();
        $("#at7_big1").show();
        $("#at7_bg").css("height","2630px")
        $("#at7_big2").hide();
        $("#at7_big3").hide();
        $("#at7_big4").hide();
    });
    $(".main_big2").on("click", function() {
        $("#main_1").hide();
        $("#main_2").hide();
        $("#main_3").hide();
        $("#ati7").show();
        $("#at7_big2").show();
        $("#at7_bg").css("height","1450px")
        $("#at7_big1").hide();
        $("#at7_big3").hide();
        $("#at7_big4").hide();
    });
    $(".main_big3").on("click", function() {
        $("#main_1").hide();
        $("#main_2").hide();
        $("#main_3").hide();
        $("#ati7").show();
        $("#at7_big4").show();
        $("#at7_bg").css("height","3730px")
        $("#at7_big1").hide();
        $("#at7_big2").hide();
        $("#at7_big3").hide();
    });


    // 메인화면 서브웨이메뉴 상세보기 클릭시 해당 메뉴화면으로 이동
    $(".on_cli1").on("click",function(){
        $("#main_1, #main_2, #main_3").hide();
        $(".at1").show();
        top_func();
    });
    $(".on_cli2").on("click",function(){
        $("#main_1, #main_2, #main_3").hide();
        $(".at1").show();
        $(".ati1_box").hide();
        $("#ati1_box2").show();
        $(".at1_bt2").css("color","#666666");
        $("#at1_bt2_2").css("color","#009223");
        top_func();
    });
    $(".on_cli3").on("click",function(){
        $("#main_1, #main_2, #main_3").hide();
        $(".at1").show();
        $(".ati1_box").hide();
        $("#ati1_box3").show();
        $(".at1_bt2").css("color","#666666");
        $("#at1_bt2_3").css("color","#009223");
        top_func();
    });
    $(".on_cli4").on("click",function(){
        $("#main_1, #main_2, #main_3").hide();
        $(".at4").show();
        top_func();
    });

    // 메인화면 하단 블록메뉴 - 이용방법 클릭시 화면으로 이동
    $(".submenu1 li:eq(2)").on("click",function() {
        $("#main_1").hide();
        $("#main_2").hide();
        $("#main_3").hide();
        $("#ati5").show();
        top_func();
    });

    // 메인화면 하단 블록메뉴 - 공지사항 클릭시 화면으로 이동
    $(".submenu2 li:eq(2)").on("click",function() {
        $("#main_1").hide();
        $("#main_2").hide();
        $("#main_3").hide();
        $("#ati9").show();
        top_func();
    });

    // 메인화면 하단 블록메뉴 - 공지사항 클릭시 화면으로 이동
    $(".at0_btn").on("click",function() {
        no=$(this).index()-1;
        $("#main_1").hide();
        $("#main_2").hide();
        $("#main_3").hide();
        $(".at8_bm1").hide();
        $(".at8_bm2").hide();
        $(".at8_bm_bm").hide();
        $(".at8_bigimg").hide();
        $(".at8_control").hide();
        $(".at8_arrow_btn").hide();
        $("#ati8").show();
        $(".at8_bm_bm"+no).show();
        $(".at8_arrow_btn"+no).show();
        $(".at8_turn_btn1").show();
        top_func();
    });
    $(".at0_btn4").on("click",function() {
        $("#main_1").hide();
        $("#main_2").hide();
        $("#main_3").hide();
        $(".at8_bm2").hide();
        $(".at8_bm_bm").hide();
        $(".at8_arrow_btn").hide();
        $("#ati8").show();
        $(".at8_bigimg").show();
        $(".at8_control").show();
        $(".at8_bm1").show();
        top_func();
    });


    // at5 써브웨이 이용방법 버튼 클릭시 해당 화면으로 이동
    $(".at5_cli1").on("click",function() {
        $(".at").hide();
        $(".at1").show();
        top_func();
    });
    $(".at5_cli2").on("click",function() {
        $(".at").hide();
        $(".at3").show();
        top_func();
    });
    $(".at5_cli3").on("click",function() {
        $(".at").hide();
        $(".at6").show();
        top_func();
    });
    $(".at5_cli4").on("click",function() {
        $(".at").hide();
        $(".at6").show();
        $(".ati6_box").hide();
        $("#ati6_box2").show();
        $("#ati6_submenu2").css("height","1280px")
        $(".at6_bt2").css("color","#666666");
        $("#at6_bt2_2").css("color","#009223");
        top_func();
    });
    $(".at5_cli5").on("click",function() {
        $(".at").hide();
        $(".at6").show();
        $(".ati6_box").hide();
        $("#ati6_box4").show();
        $("#ati6_submenu2").css("height","1280px")
        $(".at6_bt2").css("color","#666666");
        $("#at6_bt2_4").css("color","#009223");
        top_func();
    });


    // at8 뉴스. 공지사항 < > 숫자 버튼 클릭시 해당 화면으로 이동
    $(".at8_right_btn").on("click",function() {
        $(".at8_bm1").hide();
        $(".at8_bm2").show();
        $(".at8_control_1").css("color","#ccc");
        $(".at8_control_2").css("color","#009223");
    });
    $(".at8_left_btn").on("click",function() {
        $(".at8_bm2").hide();
        $(".at8_bm1").show();
        $(".at8_control_2").css("color","#ccc");
        $(".at8_control_1").css("color","#009223");
    });
    $(".at8_control_1").on("click",function() {
        $(".at8_bm2").hide();
        $(".at8_bm1").show();
        $(".at8_control_2").css("color","#ccc");
        $(".at8_control_1").css("color","#009223");
    });
    $(".at8_control_2").on("click",function() {
        $(".at8_bm1").hide();
        $(".at8_bm2").show();
        $(".at8_control_1").css("color","#ccc");
        $(".at8_control_2").css("color","#009223");
    });
    // at8 게시물 클릭시 해당 게시물 상세보기 화면으로 이동
    $(".at8_bm1 div ul").on("click",function() {
        no=$(this).index()+1;
        $(".at8_bm1").hide();
        $(".at8_bm2").hide();
        $(".at8_bigimg").hide();
        $(".at8_control").hide();
        $(".at8_bm_bm"+no).show();
        $(".at8_arrow_btn").show();
        $(".at8_turn_btn1").show();
        aa();
        top_func();
    });
    $(".at8_bm2 div ul").on("click",function() {
        no=$(this).index()+8;
        $(".at8_bm1").hide();
        $(".at8_bm2").hide();
        $(".at8_bigimg").hide();
        $(".at8_control").hide();
        $(".at8_bm_bm"+no).show();
        $(".at8_arrow_btn").show();
        $(".at8_turn_btn2").show();
        top_func();
    });
    // at8 게시물 상세 화면에서 목록으로 버튼 클릭시 리스트 화면으로 이동
    $(".at8_turn_btn1").on("click",function() {
        $(this).hide();
        $(".at8_bm_bm").hide();
        $(".at8_bigimg").show();
        $(".at8_bm1").show();
        $(".at8_control").show();
        $(".at8_control_2").css("color","#ccc");
        $(".at8_control_1").css("color","#009223");
        top_func();
    });
    $(".at8_turn_btn2").on("click",function() {
        $(this).hide();
        $(".at8_bm_bm").hide();
        $(".at8_bigimg").show();
        $(".at8_bm2").show();
        $(".at8_control").show();
        $(".at8_control_1").css("color","#ccc");
        $(".at8_control_2").css("color","#009223");
        top_func();
    });
    // at8 게시물 상세 화면에서 이전/다음 버튼 클릭시 해당 게시물로 이동
    $(".change_1").on("click",function() {
        $(".at8_bm_bm").hide();
        $(".at8_bm_bm2").show();
        $(".at8_turn_btn1").show();
        $(".at8_arrow_btn2").show();
        top_func();
    });
    $(".change_2").on("click",function() {
        $(".at8_bm_bm").hide();
        $(".at8_bm_bm1").show();
        $(".at8_turn_btn1").show();
        $(".at8_arrow_btn1").show();
        top_func();
    });
    $(".change_3").on("click",function() {
        $(".at8_bm_bm").hide();
        $(".at8_bm_bm3").show();
        $(".at8_turn_btn1").show();
        $(".at8_arrow_btn3").show();
        top_func();
    });
    $(".change_4").on("click",function() {
        $(".at8_bm_bm").hide();
        $(".at8_bm_bm4").show();
        $(".at8_turn_btn1").show();
        $(".at8_arrow_btn4").show();
        top_func();
    });
    $(".change_5").on("click",function() {
        $(".at8_bm_bm").hide();
        $(".at8_bm_bm5").show();
        $(".at8_turn_btn1").show();
        $(".at8_arrow_btn5").show();
        top_func();
    });
    $(".change_6").on("click",function() {
        $(".at8_bm_bm").hide();
        $(".at8_bm_bm6").show();
        $(".at8_turn_btn1").show();
        $(".at8_arrow_btn6").show();
        top_func();
    });
    $(".change_7").on("click",function() {
        $(".at8_bm_bm").hide();
        $(".at8_bm_bm7").show();
        $(".at8_turn_btn1").show();
        $(".at8_arrow_btn7").show();
        top_func();
    });
    $(".change_8").on("click",function() {
        $(".at8_bm_bm").hide();
        $(".at8_bm_bm8").show();
        $(".at8_turn_btn1").show();
        $(".at8_arrow_btn8").show();
        top_func();
    });
    $(".change_9").on("click",function() {
        $(".at8_bm_bm").hide();
        $(".at8_bm_bm9").show();
        $(".at8_turn_btn1").show();
        $(".at8_arrow_btn9").show();
        top_func();
    });
    $(".change_10").on("click",function() {
        $(".at8_bm_bm").hide();
        $(".at8_bm_bm10").show();
        $(".at8_turn_btn1").show();
        $(".at8_arrow_btn10").show();
        top_func();
    });
    $(".change_11").on("click",function() {
        $(".at8_bm_bm").hide();
        $(".at8_bm_bm11").show();
        $(".at8_turn_btn1").show();
        $(".at8_arrow_btn11").show();
        top_func();
    });
    $(".change_12").on("click",function() {
        $(".at8_bm_bm").hide();
        $(".at8_bm_bm12").show();
        $(".at8_turn_btn1").show();
        $(".at8_arrow_btn12").show();
        top_func();
    });
    $(".change_13").on("click",function() {
        $(".at8_bm_bm").hide();
        $(".at8_bm_bm13").show();
        $(".at8_turn_btn1").show();
        $(".at8_arrow_btn13").show();
        top_func();
    });
    $(".change_14").on("click",function() {
        $(".at8_bm_bm").hide();
        $(".at8_bm_bm14").show();
        $(".at8_turn_btn1").show();
        $(".at8_arrow_btn14").show();
        top_func();
    });


    // at9 이미지 애니메이션
    $(window).scroll(function(){
        pos=$(window).scrollTop();
        scr_ani(); 
    })

    function scr_ani() {
        // 보라색
        if(pos>1) {
            $(".at9_img3").stop().animate({"left":"62%","opacity":"1"},400,function(){
            }); 
        }
        else {
            $(".at9_img3").stop().animate({"left":"65%","opacity":"0"},400,function(){
            }); 
        }; 

        // 보라색 - 문구
        if(pos>50) {
            $(".at9_text2").stop().animate({"left":"34%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text2").stop().animate({"left":"37%","opacity":"0"},500,function(){
            }); 
        }; 
        if(pos>200) {
            $(".at9_text3").stop().animate({"left":"64%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text3").stop().animate({"left":"67%","opacity":"0"},500,function(){
            }); 
        };


        // 하늘색
        if(pos>500) {
            $(".at9_img6").stop().animate({"top":"-150px","opacity":"1"},700,function(){
            }); 
        }
        else {
            $(".at9_img6").stop().animate({"top":"-180px","opacity":"0"},700,function(){
            }); 
        }; 

        if(pos>1000) {
            $(".at9_img7").stop().animate({"left":"72%","opacity":"1"},700,function(){
            }); 
        }
        else {
            $(".at9_img7").stop().animate({"left":"75%","opacity":"0"},700,function(){
            }); 
        }; 
        
        if(pos>1500) {
            $(".at9_img8").stop().animate({"left":"17%","opacity":"1"},700,function(){
            }); 
        }
        else {
            $(".at9_img8").stop().animate({"left":"14%","opacity":"0"},700,function(){
            }); 
        }; 

        if(pos>1800) {
            $(".at9_img9").stop().animate({"top":"1140px","opacity":"1"},700,function(){
            }); 
        }
        else {
            $(".at9_img9").stop().animate({"top":"1440px","opacity":"0"},700,function(){
            }); 
        }; 
        // 하늘색 - 문구
        if(pos>700) {
            $(".at9_text4").stop().animate({"left":"27%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text4").stop().animate({"left":"24%","opacity":"0"},500,function(){
            }); 
        }; 

        if(pos>800) {
            $(".at9_text5").stop().animate({"left":"51%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text5").stop().animate({"left":"48%","opacity":"0"},500,function(){
            }); 
        }; 

        if(pos>1300) {
            $(".at9_text6").stop().animate({"left":"58.5%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text6").stop().animate({"left":"60.5%","opacity":"0"},500,function(){
            }); 
        }; 

        if(pos>1000) {
            $(".at9_text7").stop().animate({"left":"33.3%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text7").stop().animate({"left":"35.3%","opacity":"0"},500,function(){
            }); 
        };

        if(pos>1600) {
            $(".at9_text8").stop().animate({"left":"48.6%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text8").stop().animate({"left":"45.8%","opacity":"0"},500,function(){
            }); 
        };

        if(pos>1750) {
            $(".at9_text9").stop().animate({"left":"26%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text9").stop().animate({"left":"24%","opacity":"0"},500,function(){
            }); 
        };
        
        // 주황색
        if(pos>2400) {
            $(".at9_img16").stop().animate({"top":"290px","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_img16").stop().animate({"top":"260px","opacity":"0"},500,function(){
            }); 
        };

        if(pos>2100) {
            $(".at9_img17").stop().animate({"left":"73.5%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_img17").stop().animate({"left":"76%","opacity":"0"},500,function(){
            }); 
        };
        // 주황색 - 문구
        if(pos>2000) {
            $(".at9_text10").stop().animate({"left":"31.5%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text10").stop().animate({"left":"32.5%","opacity":"0"},500,function(){
            }); 
        }; 

        if(pos>2500) {
            $(".at9_text11").stop().animate({"left":"64%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text11").stop().animate({"left":"66%","opacity":"0"},500,function(){
            }); 
        }; 

        if(pos>2800) {
            $(".at9_text12").stop().animate({"left":"52%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text12").stop().animate({"left":"49%","opacity":"0"},500,function(){
            }); 
        }; 

        if(pos>2990) {
            $(".at9_text13").stop().animate({"left":"42%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text13").stop().animate({"left":"45%","opacity":"0"},500,function(){
            }); 
        };

        // 초록색
        if(pos>3600) {
            $(".at9_img22").stop().animate({"left":"70%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_img22").stop().animate({"left":"72%","opacity":"0"},500,function(){
            }); 
        };

        if(pos>4300) {
            $(".at9_img23").stop().animate({"left":"10%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_img23").stop().animate({"left":"8%","opacity":"0"},500,function(){
            }); 
        };
        // 초록색 - 문구
        if(pos>3600) {
            $(".at9_text14").stop().animate({"left":"33%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text14").stop().animate({"left":"36%","opacity":"0"},500,function(){
            }); 
        }; 
        if(pos>3900) {
            $(".at9_text15").stop().animate({"left":"62.5%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text15").stop().animate({"left":"65.5%","opacity":"0"},500,function(){
            }); 
        }; 
        if(pos>4100) {
            $(".at9_text16").stop().animate({"left":"29%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text16").stop().animate({"left":"26%","opacity":"0"},500,function(){
            }); 
        }; 
        if(pos>4100) {
            $(".at9_text17").stop().animate({"left":"58.5%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text17").stop().animate({"left":"55.5%","opacity":"0"},500,function(){
            }); 
        }; 
        if(pos>4500) {
            $(".at9_text18").stop().animate({"left":"36.5%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text18").stop().animate({"left":"38.5%","opacity":"0"},500,function(){
            }); 
        }; 
        if(pos>4500) {
            $(".at9_text19").stop().animate({"left":"58.5%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text19").stop().animate({"left":"60.5%","opacity":"0"},500,function(){
            }); 
        }; 
        if(pos>4800) {
            $(".at9_text20").stop().animate({"left":"17.5%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text20").stop().animate({"left":"15.5%","opacity":"0"},500,function(){
            }); 
        }; 
        if(pos>4900) {
            $(".at9_text21").stop().animate({"left":"49.5%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text21").stop().animate({"left":"47.5%","opacity":"0"},500,function(){
            }); 
        }; 
        if(pos>5000) {
            $(".at9_text22").stop().animate({"left":"32.5%","opacity":"1"},500,function(){
            }); 
        }
        else {
            $(".at9_text22").stop().animate({"left":"35.5%","opacity":"0"},500,function(){
            }); 
        }; 
    };

    $(".at11_btn").on("click",function() {
        $(".at11").hide();
        $(".at12").show();
        top_func();
    })

    // 회원가입 아티클12
    $(".at12_btn1").on("click",function() {
        $(".at12_bm_1").hide();
        $(".at12_bm_3").hide();
        $(".at12_title1").hide();
        $(".at12_title3").hide();
        $(".at12_title2").show();
        $(".at12_bm_2").show();
        $(".at12_bm").css("height","640px");
        $(".at12_icon1").css({"border":"5px solid #ccc", "color":"#ccc"});
        $(".at12_icon2").css("color","#ccc");
        $(".at12_icon3").css({"border":"5px solid #ffce32", "color":"#009223"});
        $(".at12_icon4").css("color","#ffce32");
        top_func();
    });
    $(".at12_btn2").on("click",function() {
        $(".at12_bm_1").hide();
        $(".at12_bm_2").hide();
        $(".at12_title1").hide();
        $(".at12_title2").hide();
        $(".at12_title3").show();
        $(".at12_bm_3").show();
        $(".at12_bm").css("height","500px");
        $(".at12_icon1").css({"border":"5px solid #ccc", "color":"#ccc"});
        $(".at12_icon2").css("color","#ccc");
        $(".at12_icon3").css({"border":"5px solid #ccc", "color":"#ccc"});
        $(".at12_icon4").css("color","#ccc");
        $(".at12_icon5").css({"border":"5px solid #ffce32", "color":"#009223"});
        top_func();
    });
    $(".at12_btn3").on("click",function() {
        $(".at12").hide();
        $(".at11").show();
        top_func();
    });
});


// 메인화면 네비게이션 onclick
function func(js) {
    // 네비게이션 각 아티클 이동
    for(i=1; i<=3; i++)
        this["main_"+i].style.display="none";
    for(i=1; i<=12; i++)
        this["ati"+i].style.display="none";
        this["ati"+js].style.display="block";
    top_func();

    $(".at8_turn_btn1").hide();
    $(".at8_bm_bm").hide();
    $(".at8_bigimg").show();
    $(".at8_bm1").show();
    $(".at8_control").show();
    $(".at8_control_2").css("color","#ccc");
    $(".at8_control_1").css("color","#009223");
    top_func();
};

// 상단 로고 클릭시 메인화면으로 이동
function main_func() {
    for(i=1; i<=3; i++)
        this["main_"+i].style.display="block";
    for(i=1; i<=12; i++)
        this["ati"+i].style.display="none";
    top_func();
};

