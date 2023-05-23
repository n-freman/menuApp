import { atom } from "recoil";

const discount = atom({
    key: 'discount',
    default: 0
})

export { discount };