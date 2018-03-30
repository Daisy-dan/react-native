/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import HelloWorld, {name, age, sum} from './HelloWorld';
import PropsTest from './PropsTest';
import StateTest from './StateTest';
import FlexTest from './FlexTest';
import RefTest from './RefTest';
import Student from './Student';
import StudentExtend from './StudentExtend';
import TouchableTest from './TouchableTest';
import ImageTest from './ImageTest';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Demo extends Component<{}> {
    constructor(props){
        super(props);
        this.state=({
            remove:false,
            result:'',
            size:0
        })
        //student类实例化
        this.stu=new Student('小红','女',18)
        this.stuEx=new StudentExtend()
    }
    render() {
        const view = this.state.remove?null:<HelloWorld/>;
        const text = this.state.remove?'复活':'消失';
        const params = {name:'张三',age:19,sex:'男'}
        const {name,sex}=params
        return (
            <View style={styles.container}>

                <Text
                    style={styles.welcome}
                    onPress={()=>{
                        this.setState({
                            remove:!this.state.remove
                        })
                    }}
                >
                    Welcome {name},I am {age}!{text}
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
                <Text
                    onPress={()=>{
                        const result = sum(2,3);
                        this.setState({
                            result : result
                        })
                    }}
                >
                    2+3={this.state.result}
                </Text>

                <PropsTest
                    //{...params}
                    //解构赋值
                    name={name}
                    sex={sex}
                />

                {/*<StateTest/>*/}
                {view}


                {/*<FlexTest/>*/}

                <Text
                    onPress={()=>{
                        // const size = this.refs.reftest.getSize()
                        // const size = this.reftest.getSize()
                        const size = this.refs['reftest'].getSize()
                        this.setState({
                            size:size
                        })
                    }}
                >获取气球大小:{this.state.size}</Text>
                <RefTest
                    ref="reftest"
                    // ref={reftest=>this.reftest=reftest}
                />

                <Text>
                    {this.stu.getDescription()}
                </Text>
                <Text>
                    {this.stuEx.getDescription()}
                </Text>

                <TouchableTest/>


                <ImageTest/>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
