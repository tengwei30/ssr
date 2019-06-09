import React from 'react'
import { connect } from 'react-redux'

/**
 * 同构： 一套React代码，在服务器端执行一次，在浏览器端在执行一下
 * 解决的问题： 为了解决SSR渲染出来的页面事件失效问题
 * 
 * 同构运用时 服务器端渲染只发生在你访问的第一个页面
 */


const Home = (props) => {
    return (
        <>
            <div>I am {props.name}</div>
            <button onClick={ () => { alert('aaaa') } }>click</button>
        </>
    )
}

const  mapStatetToProps = state => ({
    name: state.name
})

export default connect(mapStatetToProps, null)(Home)