

import React, { Component } from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import PropTypes from 'prop-types'

import SwiperEx from './SwiperEx'

export default class PropsTest extends Component{

    //定义默认属性
    static defaultProps={
        name : 'lucy',
        age : 14
    }
    //属性类型检查
    static propsTypes={
        name:PropTypes.string,
        age:PropTypes.number,
        sex:PropTypes.string.isRequired,
    }
    render() {
        return(

            <View>
                <SwiperEx/>
                <Text style={{fontSize:20,backgroundColor:'red'}}>Hello.{this.props.name}</Text>
                <Text style={{fontSize:20,backgroundColor:'red'}}>age.{this.props.age}</Text>
                <Text style={{fontSize:20,backgroundColor:'red'}}>sex.{this.props.sex}</Text>
            </View>

        )
    }
}

