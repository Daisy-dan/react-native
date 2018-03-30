

import React, { Component } from 'react';
import { Text, View , Navigator, TouchableOpacity} from 'react-native';
import RefTest from './RefTest'
import Banner from './Banner'

const name = '小米';
const age = 33;
export {name,age}

export function sum(a,b) {
    return a+b;
}

export default class HelloWorld extends Component{
    constructor(props){
        super(props);
        console.log('---------constructor--------');
        this.state={
            count:0
        }
    }

    componentWillMount(){
        console.log('---------componentWillMount--------');

    }
    componentDidMount(){
        console.log('---------componentDidMount--------');

    }
    componentWillReceiveProps(nextProps){
        console.log('---------componentWillReceiveProps--------');

    }
    shouldComponentUpdate(nextProps, nextState){
        return true;
        console.log('---------shouldComponentUpdate--------');

    }
    componentWillUpdate(nextProps, nextState){
        console.log('---------componentWillUpdate--------');

    }
    componentDidUpdate(prevProps, prevState){
        console.log('---------componentDidUpdate--------');

    }
    componentWillUnmount(){
        console.log('---------componentWillUnmount--------');

    }

    render() {
        console.log('---------render--------');
        return (
            <View>
                <Banner/>
                <Text
                    onPress={()=>{
                        this.setState({
                            count:this.state.count + 1,
                        })
                    }}
                >
                    hello world
                </Text>
                <Text style={{color:'red'}}>{this.state.count}</Text>
                <Text
                    style={{color:'red',fontSize:20}}
                    onPress={()=> this.toNextPage('s')}
                >next page</Text>

            </View>
        );
    }

    toNextPage(detail){
        this.props.navigator.push({
            title:'details',
            component:RefTest,
            passProps:{detail}
        })
    }
}

