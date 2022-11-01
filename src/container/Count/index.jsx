import CountUI from '../../component/Count'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/aciton'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return { count: state }
}
const mapDispatchToProps = (dispatch) => {
    return {
        jia:number=> dispatch(createIncrementAction(number)),
        jian:number=> dispatch(createDecrementAction(number)),
        async:(number,time)=> dispatch(createIncrementAsyncAction(number,time)),
    }
}
//使用connect创建并暴露一个count容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
