import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.shop.eduwork.cn/api',
    timeout: 5000
})

// get all hero
export const getHeroList = () => {
    instance.get('https://autumnfish.cn/api/lol/search')
}

// search hero
export const searchHero = (name: string) => {
    instance.get(`https://autumnfish.cn/api/hero/simple?name=${name}`)
}

// hero detail
export const heroDetail = (id: string) => {
    instance.get(`https://autumnfish.cn/api/lol/info?id=${id}`)
}