import ajax from './ajax'

export const requestHome = () => ajax('/api/pet_type=dog&version=358')
export const requestGoods = () => ajax('/test/goods')
export const requestSpecies = () => ajax('/item/species')
export const requestItem = (obj) => ajax('/get/',obj)
export const requestBrand = () => ajax('/brand/cities')

/**
 * 获取图片验证码
 */
export const getcaptchas = () => fetch('/v1/captchas', {}, 'POST')

/**
 * 账号密码登录
 */
export const accountLogin = (username, password, captcha_code) => fetch('/v2/login', {
  username,
  password,
  captcha_code
}, 'POST')


/*注意: 下面2个接口不可用*/

/**
 * 获取短信验证码
 */
export const mobileCode = phone => ajax('/test/sendcode', {phone})

/**
 * 手机号登录
 */
export const phoneLogin = (phone, code) => ajax('/test/login', {phone, code}, 'POST')



