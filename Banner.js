import React, { Component } from 'react';
import { Text, View ,Image, ScrollView, AppRegistry, Dimensions, StyleSheet} from 'react-native';

import BannerJson from './banner.json'
import TimerMixin from 'react-timer-mixin';

var windowwidth=Dimensions.get('window').width

export default class Banner extends Component{


    constructor(props){
        super(props)
        this.state={
            currcount: 0,
            title:'',
        }
    }

    render(){
        return(
            <View>

                {/*<Text>slider</Text>*/}
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={(e)=>{this.onPageEnd(e)}}
                >
                    {this.creatitems()}
                </ScrollView>

                <View style={styles.viewstyle}>
                    {this.creatdot()}
                    {/*<Text style={[{textAlign:'right',flex:1,marginRight:10,color:'red'}]}>{title}</Text>*/}
                </View>
            </View>
        )
    }


    //page当前的页数
    onPageEnd(e){
        var contentOffSet = e.nativeEvent.contentOffset.x
        var page = contentOffSet / windowwidth

        // console.log('page',page)
        this.setState({
            currcount : page,
            title : BannerJson[page].title,
            dotbg :'red'
        })

    }
    creatitems(){
        const items = []
        for(let i=0;i<BannerJson.length;i++){
            const itemdata=BannerJson[i]
            items.push(
                <Image key={i} style={styles.imagestyle} source={{uri:itemdata.imgUri}}/>
            )
            // console.log('imgUri',itemdata.imgUri)
        }
        return items
    }

    //定时器
    mixins:[TimerMixin]
    componentDidMount(){
        const scrollView = this.refs.scrollView

        TimerMixin.setInterval(() => {
            this.state.currcount+=1
            if(this.state.currcount>=BannerJson.length){
                this.state.currcount = 0
            }

            const l=this.state.currcount*windowwidth
            scrollView.scrollResponderScrollTo({x:l,y:0,animated:true})
            this.setState({
                currcount:this.state.currcount,
                title:BannerJson[this.state.currcount].title
            })
        },2000)
    }

    creatdot(){
        var dots=[]
        for(var i=0;i<BannerJson.length;i++){
            var dotbg=this.state.currcount==i ? 'white' : 'red'
            dots.push(
                <Text key={i} style={[styles.textstyle,{backgroundColor:dotbg}]}></Text>
            )
        }
        return dots
    }
}



const styles = StyleSheet.create({
    container: {
        width:windowwidth,
        height:200,
    },
    imagestyle:{
        width:windowwidth,
        height:200,
    },
    viewstyle:{
        width:windowwidth,
        height:25,
        backgroundColor:'rgba(255,255,255,0.5)',
        flexDirection:'row',
        alignItems:'center',
        position:'absolute',
        bottom:0,
        left:0
    },

    textstyle:{
        width:5,
        height:5,
        borderRadius:5,
        marginLeft:8
    }


});