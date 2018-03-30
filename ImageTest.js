

import React, { Component } from 'react';
import { Text, View ,Image} from 'react-native';


export default class ImageTest extends Component{
    render(){
        return(
        <View>
            {/*用本地img*/}
            <Image
                style={{width:40,height:60,borderWidth:1}}
                source={require('./buble.jpg')}
                resizeMode={'cover'}   //stretch contain  repeat(ios) center
            />
            {/*用网络img*/}
            <Image
                style={{width:100,height:60,borderWidth:1}}
                source={{uri:'https://www.yimei180.com/images/layout/head/logo2.png?v=6aeec38050'}}
            />
            {/*用原生img*/}
            <Image
                style={{width:50,height:50}} //着色tintColor:'red'
                source={{uri:'demo'}}
            />
        </View>
        )
    }

}

