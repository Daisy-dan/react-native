import React, { Component } from 'react';
import { Text, View ,Image, ScrollView, AppRegistry, Dimensions, StyleSheet} from 'react-native';

import Swiper from 'react-native-swiper';

var windowwidth=Dimensions.get('window').width

const images=[
    'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',
    'http://ac-c6scxa78.clouddn.com/91ead58b0bb213b6.jpg',
    'http://ac-c6scxa78.clouddn.com/d67316858f6c71f3.jpg',
    'http://ac-c6scxa78.clouddn.com/c81c5b7be1838a1e.jpg',
    'http://ac-c6scxa78.clouddn.com/54fe022399902788.jpg',
];
export default class SwiperEx extends Component{

    constructor(props){
        super(props)
    }
    render() {
        return (

            <Swiper height={200}
            >
                {this.renderImg()}
            </Swiper>

        );
    }
    renderImg(){
        var imageViews=[];
        for(var i=0;i<images.length;i++){
            imageViews.push(
                <Image
                    key={i}
                    style={{flex:1,width:750,height:600}}
                    source={{uri:images[i]}}
                />
            );
            // console.log(imageViews)
        }
        return imageViews;
    }
}

