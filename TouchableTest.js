

import React, { Component } from 'react';
import { Text, View ,Image, TouchableWithoutFeedback, StyleSheet, Alert,TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types'



export default class TouchableTest extends Component{
    constructor(props){
        super(props);
        this.state=({
            count:0,
            countLong:0,
            text:'',
            text2:'',
            startTime:'',
        })
    }
    render() {
        return(
        <View>
            <TouchableWithoutFeedback
                onPress={()=> {
                    this.setState({count: this.state.count+1,text:'login...',disabled:true})
                    setTimeout(()=>{
                        this.setState({count: this.state.count+1,text:'网络不流畅',disabled:false})
                    },2000)
                }}
                onLongPress={()=>{
                    this.setState({countLong: this.state.countLong+1})
                    Alert.alert(
                        '提示',
                        '确定要删除吗?',
                        [
                            {text:'取消',onPress:() => console.log('Cancel Pressed'), style:'cancel'},
                            {text:'确定',onPress:() => console.log('Ok Pressed')}
                        ]
                    )
                }}
                onPressIn={()=> {
                    this.setState({text2:'触摸开始',startTime:new Date().getTime()})
                }}
                onPressOut={()=>{
                    this.setState({text2:'触摸结束,持续时间:'+(new Date().getTime()-this.state.startTime)+'毫秒'})
                }}


            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        我是TouchableWithoutFeedback,单击我
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableHighlight
                activeOpacity={0.7}
                underlayColor='green'
                onHideUnderlay={()=>{
                    this.setState({text:'衬底被隐藏'})
                }}
                onShowUnderlay={()=>{
                    this.setState({text:'衬底显示'})
                }}
                onPress={()=>{

                }}
            >
                <View>
                    <Text>
                        TouchableHighlight
                    </Text>
                </View>
            </TouchableHighlight>
            <Text style={styles.text}>您单击了:{this.state.count}次</Text>
            <Text style={styles.text}>您countLong了:{this.state.countLong}次</Text>
            <Text style={styles.text}>{this.state.text}</Text>
            <Text style={styles.text}>{this.state.text2}</Text>
        </View>

        )
    }
}


const styles = StyleSheet.create({
    text: {
        color:'green',
    },
    button:{
       backgroundColor:'green'
    },
    buttonText:{
        color:'white'
    }
})

