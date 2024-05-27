export const ShareKakao = () => {
    if (!window.Kakao) {
        console.error("Kakao SDK is not loaded");
        return;
    }

    const kakao = window.Kakao;
    const kakaoToken = import.meta.env.VITE_KAKAO_API;
    console.log(kakaoToken);

    if (!kakao.isInitialized()) {
        kakao.init(kakaoToken);
    }

    if (!kakao.Link) {
        console.error("Kakao Link module is not available");
        return;
    }

    kakao.Link.sendDefault({
        objectType: "feed",
        content: {
            title: "movie",
            description: "#UMC #6기 #한성대 #Web #10주차",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-ei3HfkIzsdcQqamoePEOS48-kG0CGesM3Mjv6yxxg&s",
            link: {
                mobileWebUrl: "https://hansung-kakao.netlify.app/",
                webUrl: "https://hansung-kakao.netlify.app/",
            },
        },
        buttons: [
            {
                title: "영화 찾아보러 가기",
                link: {
                    mobileWebUrl: "https://hansung-kakao.netlify.app/",
                    webUrl: "https://hansung-kakao.netlify.app/",
                },
            },
        ],
    });
};
