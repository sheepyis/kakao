export const getRedirectURI = () => {
    const hostname = window.location.hostname;

    if (hostname === 'localhost') {
        return 'http://localhost:5173/login/auth';
    } else if (hostname === 'hansung-kakao-login.netlify.app') {
        return 'https://hansung-kakao-login.netlify.app/login/auth';
    } else if (hostname === 'main--hansung-kakao-login.netlify.app') {
        return 'https://main--hansung-kakao-login.netlify.app/login/auth';
    } else {
        throw new Error('Error: ', error);
    }
};