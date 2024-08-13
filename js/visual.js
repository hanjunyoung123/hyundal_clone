window.addEventListener("load",function(){
    
    // 비디오 항목 체크한다 (vedio태그로 파악)
    // 모든 비디오 태그를 변수에 저장
    let videos = this.document.querySelectorAll(".swVisual video")
    // console.log(videos);
    //비디오시간체크
    let videoTimeArr = [] //비디오재생시간을 보관할 배열을 생성
    //비디오 재생시간을 배열에 저장하는 반복문
    videos.forEach((video,index)=>{
        // console.log(videos,index);
        // console.log(videos);
        // console.log(videos[0]);
        // console.log(videos[0].duration);
        // console.log(videos[1].duration);

        //Math.ceil()비디오 재생시간을 올림하여 가장 가까운 정수로 변환
        videoTimeArr[index] = Math.ceil(video.duration)
    })
    // console.log(videoTimeArr);
    // 첫번째 비디오 자동 실행
    let videoIndex = 0
    videos[videoIndex].play()
    // 비주얼 슬라이드
    //슬라이드 초기화
    const swVisual = new Swiper(".swVisual",{
        Loop:true,
    })
    //슬라이드 변경 이벤트 처리
    swVisual.on("slideChange",function(){
        // console.log("슬라이드 교체");
        // 진행중인 비디오 정지
        videos[videoIndex].pause()
        //다음 화면에 보이는 swiper슬라이드 번호
        // console.log(swVisual.activeIndex);
        // console.log(swVisual.realIndex);
        videoIndex = swVisual.realIndex
        // console.log(videoIndex);
        
    })
})