import instance from './request'

// get all hero
export const getHeroList = () => {
    return instance.get('https://autumnfish.cn/api/lol/search')
}

// search hero
export const searchHero = (name: string) => {
    return instance.get(`https://autumnfish.cn/api/lol/search?q=${name}`)
}

// hero detail
export const heroDetail = (id: string) => {
    return instance.get(`https://autumnfish.cn/api/lol/info?id=${id}`)
}

// get all weapon 
export const getWeaponList = () => {
    return instance.get(`https://autumnfish.cn/api/lol/weapon`)
}


// random background image
export const getRandomImg = () => {
    return instance.get(`https://autumnfish.cn/api/cover/random`)
}

// text to voice
export const textToVoice = (text: string) => {
    return instance.get(`http://www.liulongbin.top:3006/api/synthesize?text=${text}`)
}