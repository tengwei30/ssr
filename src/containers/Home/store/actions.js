import axios from 'axios'
import { CHANGE_LIST } from './contants'

const changeList = payload => ({
    type: CHANGE_LIST,
    list: payload
})

export const getHomeList = () => {
    return dispatch => {
        axios.get(`http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE`)
            .then(res => {
                const list = res.data.data
                dispatch(changeList(list))
            }).catch(err => {
                console.error('error ---> ', err)
            })
    }
}