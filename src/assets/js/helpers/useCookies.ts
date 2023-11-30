class UseCookies {
  static decodeCookies(cookies: string) {
    if (cookies) {
      return cookies.split(';').reduce((allCookies: {[key: string]: any}, cookie) => {
        const splitCookies = cookie.split('=')

        allCookies[decodeURIComponent(splitCookies[0].trim())] = decodeURIComponent(splitCookies[1].trim())

        return allCookies
      }, {})
    } else {
      return {}
    }
  }
}

export default UseCookies