import { atom, useRecoilValue } from 'recoil';
import { resources as tm } from '../locals/tm';
import { resources as ru } from '../locals/ru';


const LANGUAGES = ['EN', 'RU'];

const currentLanguage = atom({
    key: 'currentLanguage',
    default: 0,
});

const getTextTranslation = (text) => {
    const lang = useRecoilValue(currentLanguage);
    switch (lang) {
        case 0: // en
            return text;
        case 1: // ru
            return ru[text];
    }
    return text;
}

const getObjectTranslation = (object) => {
    const lang = useRecoilValue(currentLanguage);
    switch (lang) {
        case 0: // en
            return object?.title;
        case 1: // ru
            return object?.translations.find(({ lang }) => lang == 'ru')?.title;
    }
    return text;
}

export {
    LANGUAGES,
    currentLanguage,
    getTextTranslation,
    getObjectTranslation
}
