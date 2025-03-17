import {
  deleteUserById,
  editUserData,
  newUserData,
  postUsersListData,
  postPageListData,
  deletePageById,
  NewPageData,
  editPageData
} from '@/service/main/system/system'
import { defineStore } from 'pinia'
import type { ISystemState } from './type' // 类型定义到单独文件方便管理

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0,

    pageList: [],
    pageTotalCount: 0
  }),
  actions: {
    // 用户的增删改查
    async postUsersListAction(queryInfo: any) {
      const usersListResult = await postUsersListData(queryInfo)
      // 解构赋值
      const { totalCount, list } = usersListResult.data
      this.usersTotalCount = totalCount
      this.usersList = list
    },
    async deleteUserByIdAction(id: number) {
      const deleteResult = await deleteUserById(id)
      console.log(deleteResult)

      // 删除后刷新
      this.postUsersListAction({ offset: 0, size: 10 })
    },
    async newUserDataAction(userInfo: any) {
      const newResult = await newUserData(userInfo)
      console.log(newResult)

      this.postUsersListAction({ offset: 0, size: 10 })
    },
    async editUserDataAction(id: number, userInfo: any) {
      const editResult = await editUserData(id, userInfo)
      console.log(editResult)

      // 删除后刷新
      this.postUsersListAction({ offset: 0, size: 10 })
    },

    // 页面的增删改查
    async postPageListAction(pageName: string, queryInfo: any) {
      const pageListResult = await postPageListData(pageName, queryInfo)
      const { totalCount, list } = pageListResult.data

      this.pageList = list
      this.pageTotalCount = totalCount
    },
    async deletePageByIdAction(pageName: string, id: number) {
      const pageListResult = await deletePageById(pageName, id)
      // 删除完再请求一次
      this.postPageListAction(pageName, { offset: 0, size: 10 })
    },
    async newPageDataAction(pageName: string, PageInfo: any) {
      const newResult = await NewPageData(pageName, PageInfo)
      this.postPageListAction(pageName, { offset: 0, size: 10 })
    },
    async editPageDataAction(pageName: string, id: number, PageInfo: any) {
      const editResult = await editPageData(pageName, id, PageInfo)
      this.postPageListAction(pageName, { offset: 0, size: 10 })
    }
  }
})

export default useSystemStore
