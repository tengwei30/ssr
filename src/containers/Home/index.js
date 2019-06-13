import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'

/**
 * 同构： 一套React代码，在服务器端执行一次，在浏览器端在执行一下
 * 解决的问题： 为了解决SSR渲染出来的页面事件失效问题
 * 
 * 同构运用时 服务器端渲染只发生在你访问的第一个页面
 */

class Home extends Component {
    getList() {
        const { list } = this.props
        return list.map(item => <div key={item.id}>{ item.title }</div>)
    }
    render() {
        return (
            <>
                <div>I am {this.props.name}</div>
                { this.getList() }
                <button onClick={ () => { alert('aaaa') } }>click</button>
            </>
        )
    }
    componentDidMount() {
        this.props.getHomelist()
    }
}

Home.loadData = () => {
    // 这个函数， 负责在服务器渲染之前
}

const  mapStatetToProps = state => ({
    list: state.home.newLists,
    name: state.home.name
})

const mapDispatchToProps = dispatch => ({
    getHomelist() {
        dispatch(getHomeList())
    }
})

export default connect(mapStatetToProps, mapDispatchToProps)(Home)