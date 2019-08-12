export const GET_PAGE_BY_SLUG_REQUEST = 'GET_PAGE_BY_SLUG_REQUEST'
export const GET_PAGE_BY_SLUG_SUCCESS = 'GET_PAGE_BY_SLUG_SUCCESS'
export const GET_PAGE_BY_SLUG_FAILURE = 'GET_PAGE_BY_SLUG_FAILURE'

export const getPageBySlugRequest = (payload) => ({
  type: GET_PAGE_BY_SLUG_REQUEST,
  payload,
})

export const getPageBySlugSuccess = (payload) => ({
  type: GET_PAGE_BY_SLUG_SUCCESS,
  payload,
})

export const getPageBySlugFailure = (payload) => ({
  type: GET_PAGE_BY_SLUG_FAILURE,
  payload,
})