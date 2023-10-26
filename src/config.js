export const BASE_URL = 'https://api.escuelajs.co/api/v1/'
export const ALL_PRODUCTS = BASE_URL + 'products'
export const ALL_CATEGORIES = BASE_URL + 'categories'
export const categoriesById = id => BASE_URL + 'categories/' + id + '/products'
export const singleProductById = id => BASE_URL + 'products/' + id
