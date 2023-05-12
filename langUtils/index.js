import { useSetRecoilState, useRecoilValue , atom } from 'recoil';

const LANGUAGES = ['EN', 'RU', 'TM'];

const currentLanguage = atom({
    key: 'currentLanguage',
    default: 0,
});

export {
    LANGUAGES,
    currentLanguage,
}