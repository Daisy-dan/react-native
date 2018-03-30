

import React, { Component } from 'react';
import { Text, View ,Image} from 'react-native';
import PropTypes from 'prop-types'


export default class RefTest extends Component{

    state={
        size:90
    }
    constructor(props){
        super(props)
        //初始化state

        // this.state={
        //     size:80
        // }
    }
    getSize(){
        return this.state.size
    }
    render() {
        return(
            <View>
                {/*<Text style={{fontSize:20,backgroundColor:'red'}}>state.{this.state.size}</Text>*/}
                <Text
                    style={{fontSize:20,backgroundColor:'blue'}}
                    onPress={()=>{
                        this.setState({
                            size:this.state.size +10
                        })
                    }}
                >
                    吹,吹,吹
                </Text>
                <Text
                    style={{fontSize:20,backgroundColor:'blue'}}
                    onPress={()=>{
                        this.setState({
                            size:this.state.size -10
                        })
                    }}
                >
                    放放放
                </Text>
                <Image
                    style={{width:this.state.size,height:this.state.size}}
                    source={require('./buble.jpg')}
                />
            </View>

        )
    }
}

