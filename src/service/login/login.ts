import hyRequest from '..'
import type { IAccount } from '@/types'
import { LOGIN_TOKEN } from '@/global/constants'

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserInfoById(id: number) {
  return hyRequest.get({
    url: `/users/${id}`
    // 在传数据的时候要验证token，这样写太麻烦所以放进拦截器里
    // headers: {
    //   Authorization: 'Bearer' + localCache.getCache(LOGIN_TOKEN)
    // }
  })
}

export function getUserMenusByRoleId(id: number) {
  return hyRequest.get({
    url: `/role/${id}/menu`
  })
}
