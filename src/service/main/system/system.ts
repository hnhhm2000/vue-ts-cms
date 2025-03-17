import hyRequest from '@/service'

/** 用户的网络请求 */
export function postUsersListData(queryInfo: any) {
  return hyRequest.post({
    url: '/users/list',
    data: queryInfo
  })
}

export function deleteUserById(id: number) {
  return hyRequest.delete({
    url: `/users/${id}`
  })
}

export function newUserData(userInfo: number) {
  return hyRequest.post({
    url: '/users',
    data: userInfo
  })
}

export function editUserData(id: number, userInfo: any) {
  return hyRequest.patch({
    url: `/users/${id}`,
    data: userInfo
  })
}

// 针对页面的网络请求，增删改查

// 这里会用到多个页面，所以不写死
export function postPageListData(pageName: string, queryInfo: any) {
  return hyRequest.post({
    url: `/${pageName}/list`,
    data: queryInfo
  })
}

export function deletePageById(pageName: string, id: number) {
  return hyRequest.post({
    url: `/${pageName}/${id}`
  })
}

export function NewPageData(pageName: string, PageInfo: any) {
  return hyRequest.post({
    url: `/${pageName}`,
    data: PageInfo
  })
}
export function editPageData(pageName: string, id: number, PageInfo: any) {
  return hyRequest.patch({
    url: `/${pageName}/${id}`,
    data: PageInfo
  })
}
