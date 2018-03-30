

import React, { Component } from 'react';
import { Text, View ,Image} from 'react-native';
import PropTypes from 'prop-types'


export default class FlexTest extends Component{

    render() {
        return(
            <View style={{flexDirection:'column',justifyContent:'space-around',flexWrap:'wrap',backgroundColor:'darkgray',marginTop:20}}>
                <View style={{width:40,height:40,backgroundColor:'darkcyan',margin:5}}>
                    <Text style={{fontSize:16}}>1</Text>
                </View>
                <View style={{width:40,height:40,backgroundColor:'darkcyan',margin:5}}>
                    <Text style={{fontSize:16}}>2</Text>
                </View>
                <View style={{width:40,height:40,backgroundColor:'darkcyan',margin:5}}>
                    <Text style={{fontSize:16}}>3</Text>
                </View>
                <View style={{width:40,height:40,backgroundColor:'darkcyan',margin:5}}>
                    <Text style={{fontSize:16}}>4</Text>
                </View>
            </View>

        )
    }
}

