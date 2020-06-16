import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Button,
    Dimensions,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text,
} from 'react-native';

import styles from './styles';
import colors from '../../styles/colors';

import Dots from 'react-native-dots-pagination';

//import Swiper from 'react-native-swiper'
import Swiper from "react-native-custom-swiper";

export default class ImageSwiper extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            len: props.images.length,
            index: 0,
            imageWidth: Dimensions.get("window").width * 0.8,//props.imageWidth,
            frameWidth: Dimensions.get("window").width * 0.95,
            imageHeight: Dimensions.get("window").width * 0.8 * 0.6,//props.imageRatio,
            position: 0,
            showButtons: true,
        }
    }

    handleScroll(event) {
        var x = event.nativeEvent.contentOffset.x;
        var page = Math.round(x / this.state.imageWidth)
        //this.setState({ position: x })
        if (page >= this.state.len)
            page = this.state.len - 1;
        this.setState({ index: page })
        //console.log("bip3", x, this.state.index, page)
    }

    handleScrollEnd(event) {
        var x = event.nativeEvent.contentOffset.x;
        var page = Math.round(x / this.state.imageWidth);
        /*if (x > this.state.position)
            this.moveTo(this.state.index + 1);
        else if (x < this.state.position) {
            this.moveTo(this.state.index - 1);
        }*/
        this.setState({ index: page })
        console.log("bip2", this.state.index)
        /*if (this.state.index * this.state.imageWidth > x && this.state.index > 0) {
            this.moveTo(this.state.index - 1);
        } else if (this.state.index * this.state.imageWidth < x && this.state.index < this.state.len - 1) {
            this.moveTo(this.state.index + 1);
        } else {
            this.moveTo(this.state.index)
        }*/
    }

    handleTouchEnd(event) {
        //console.log("end", event)
        /*var x = event.nativeEvent.contentOffset.x;
        if (this.state.index * this.state.imageWidth > x && this.state.index > 0) {
            this.moveTo(this.state.index - 1);
        } else if (this.state.index * this.state.imageWidth < x && this.state.index < this.state.len - 1) {
            this.moveTo(this.state.index + 1);
        } else {
            this.moveTo(this.state.index)
        }*/
    }

    moveTo = (index) => {
        console.log("move1", this.state.index, index)
        this.refs.scroll.scrollTo({ x: index * this.state.imageWidth, animated: true })
        console.log("move2", this.state.index, index)
        console.log("from", this.state.position, "to", index * this.state.imageWidth)
        if (index >= 0 && index <= this.state.len) {
            this.setState({ index: index })
            this.setState({ position: index * this.state.imageWidth })
        }
    }

    getDots() {
        var arr = [];
        const dotSize = 8;
        //console.log(this.state.len)
        for (var i = 0; i < this.props.images.length; i++) {
            //console.log(i)
            arr.push(<View
                key={i}
                style={{
                    marginHorizontal: 8,
                    width: dotSize, height: dotSize, borderRadius: dotSize / 2,
                    backgroundColor: i === this.state.index ? colors.primaryLight : colors.whiteSmoke,
                }}
            ></View>)
        }
        return arr;
    }

    swipeTimer(current) {
        if (current === this.state.index) {
            this.moveTo(current);
        }
    }

    renderPagination(index, total, context) {
        return (
            <View>
                <Text>{index + " / " + total}</Text>
            </View>
        )
    }

    renderImageSwipeItem(item) {
        return (
            <View>
                <Image style={{ height: 300 * 0.6, width: 300, borderRadius: 20, }}
                    source={item} //resizeMode="contain"
                />
            </View>
        );
    }

    screenChange = index => {
        //console.log("index when change :=> \n", index);
        this.setState({ index: index });
    };

    render() {
        return (
            <View style={{
                width: 300,
                height: 300 * 0.6,
                alignSelf: 'center', alignItems: 'center',
                marginTop: 4,
            }}>
                <Swiper
                    style={{
                        flex: 1,
                        //backgroundColor: 'rgba(52, 52, 52, alpha)'
                    }}
                    currentSelectIndex={this.state.index}
                    swipeData={this.props.images}
                    renderSwipeItem={this.renderImageSwipeItem}
                    onScreenChange={this.screenChange}
                    //backgroundColor='rgba(52, 52, 52, alpha)'
                />
            </View>
        )
    }

    render3() {
        return (
            <View style={{
                width: this.state.frameWidth,
                height: this.state.imageHeight,
                alignSelf: 'center', alignItems: 'center',
                marginTop: 4,
            }}>
                {/*this.props.images.length > 0 &&
                    <Image source={this.props.images[this.state.index]} style={{ width: 100, height: 50 }} />
                */}

                <Swiper style={{
                    width: this.state.frameWidth,
                    height: this.state.imageHeight, alignSelf: 'center', alignItems: 'center',
                }}
                    showsButtons={true}
                    showsPagination={false}
                    //renderPagination={( (index, total, context) => {this.renderPagination(index, total, context)})}
                    onIndexChanged={(index) => { this.setState({ index: index }) }}
                    buttonWrapperStyle={styles.buttonContainer}
                    dotColor={colors.white} activeDotColor={colors.darkPrimary}
                    nextButton={<View><Text style={styles.button}>›</Text></View>}
                    prevButton={<View><Text style={styles.button}>‹</Text></View>}
                >
                    {
                        this.props.images.map((image, index) =>
                            <View key={index} style={{
                                alignSelf: 'center',
                                width: this.state.frameWidth,
                                height: this.state.imageHeight,
                                alignSelf: 'center', alignItems: 'center',
                                paddingBottom: 30,
                                //borderRadius: 20,
                            }}>
                                <Text>{index}</Text>
                                <Image source={image} style={{
                                    width: this.state.imageWidth,
                                    height: this.state.imageHeight,
                                    borderRadius: 20,
                                }} />
                            </View>
                        )
                    }
                </Swiper>
                <View style={{
                    alignSelf: 'center', alignItems: 'center',
                    position: 'absolute', bottom: 10, zIndex: 99,
                    flex: 1, flexDirection: 'row', //height: 15,
                }}>
                    {this.getDots()}
                </View>
            </View>
        )
    }

    render2() {
        return (
            <View style={{
                backgroundColor: colors.black,
                width: this.state.frameWidth, borderRadius: 40,
                alignSelf: 'center', //paddingVertical: 10,
                paddingTop: 15,
            }}>
                <View
                    style={{ //flexDirection: 'row', 
                        //alignItems: 'center', 
                        width: this.state.frameWidth,
                    }}
                >
                    <View style={{ borderRadius: 20 }}>
                        <ScrollView
                            ref="scroll"
                            pagingEnabled
                            onTouchStart={
                                () => {
                                    let current = this.state.index
                                    setTimeout(() => (this.swipeTimer(current)), 700)
                                }
                            }
                            decelerationRate={0.2}
                            /*onTouchEnd={(event) => {
                                console.log('offsetY:', this.offsetY);
                                console.log('touch info:', event.nativeEvent);
                              }}*/
                            //onScroll={(event => this.handleScroll(event))}
                            onScrollEndDrag={(event) => this.handleScrollEnd(event)}
                            onMomentumScrollEnd={(event) => this.handleScrollEnd(event)}
                            style={{
                                flexDirection: 'row', alignSelf: 'center',
                                width: this.state.imageWidth,
                                borderRadius: 20,
                            }}
                            horizontal={true}
                        //snapToInterval={this.state.imageWidth}
                        >
                            {
                                this.props.images.map((image, index) =>
                                    <View key={index} style={{
                                        alignSelf: 'center',
                                        width: this.state.imageWidth,
                                        height: this.state.imageHeight,
                                        //borderRadius: 20,
                                    }}>
                                        <Image source={image} style={{
                                            width: this.state.imageWidth,
                                            height: this.state.imageHeight,
                                            borderRadius: 20,
                                        }} />
                                    </View>
                                )
                            }
                        </ScrollView>
                    </View>
                    <View style={{
                        alignSelf: 'center', alignItems: 'center',
                        flex: 1, flexDirection: 'row', height: 15,
                    }}>
                        {this.getDots()}
                    </View>
                    {/*<Dots
                        length={this.state.len} active={this.state.index}
                        activeDotWidth={dotSize} passiveDotWidth={dotSize} 
                        activeDotHeight={dotSize} passiveDotHeight={dotSize}
                        passiveColor={colors.primary} activeColor={colors.white}
                    />*/}
                    {this.state.showButtons &&
                        <View style={{
                            position: 'absolute',
                            //top: 0, bottom: 0,
                            height: '100%',
                            left: 5,
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text onPress={() => this.moveTo(this.state.index - 1)}
                                style={{
                                    //top: 0, bottom: 0, 
                                    //top: this.state.imageHeight / 4,
                                    textAlignVertical: 'center',
                                    fontSize: 32,
                                    color: this.state.index > 0 ? colors.primary : colors.black,
                                }}
                            >‹</Text>
                        </View>
                    }
                    {this.state.showButtons &&
                        <View style={{
                            position: 'absolute',
                            //top: 0, bottom: 0,
                            height: '100%',
                            right: 5,
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text onPress={() => this.moveTo(this.state.index + 1)}
                                style={{
                                    textAlignVertical: 'center',
                                    fontSize: 32,
                                    color: this.state.index < this.state.len - 1 ? colors.primary : colors.black,
                                }}
                            //style={[styles.swipeButton], { right: 0 }}
                            >›</Text>
                        </View>
                    }
                </View>
            </View>
        )
    }
}