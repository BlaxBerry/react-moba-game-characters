import axios from 'axios'
import instance from './request'

// get all hero
export const getHeroList = () => {
    return instance.get('/search')
}

// search hero
export const searchHero = (name: string) => {
    return instance.get(`search?q=${name}`)
}

// hero detail
export const heroDetail = (id: string) => {
    return instance.get(`info?id=${id}`)
}

// get all weapon 
export const getWeaponList = () => {
    return instance.get(`weapon`)
}


// random background image
export const getRandomImg = () => {
    return axios.get(`https://autumnfish.cn/api/cover/random`)
}

// text to voice
export const textToVoice = (text: string) => {
    return axios.get(`http://www.liulongbin.top:3006/api/synthesize?text=${text}`)
}