import React, { useCallback } from 'react';
import {
    View,
    Animated,
    TextInput,
    ScrollView,
    Button,
    Dimensions,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    Image,
} from 'react-native';

import styles from './styles';
import colors from '../../styles/colors';

import I18n from '../../i18n/i18n';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoIcon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { getIcon } from '../../services/IconService';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

var AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

export default class ItemsScroll extends React.Component {
    constructor(props) {
        super(props);
        const w = 75;
        this.state = {
            index: 0,
            prev: 0,
            position: 0,
            baseWidth: w,
            baseHeight: props.height,// 80,
            heightMulti: 2,
            widthMulti: 2,
            totalWidth: 300,
            scrollPosition: 0,
            updateScroll: true,
            size: 5,
            start: (Dimensions.get("window").width - w * 2) / 2,
        }
    }

    dist(elementNum) {
        return Math.abs(elementNum - this.state.position);
    }

    moveTo = (index) => {
        const mult = this.state.widthMulti;
        let newPos = index * this.state.baseWidth * mult + this.state.start;
        this.refs.scroll.scrollTo({ x: newPos, animated: true })
        if (index >= 0 && index <= this.state.size) {
            this.setState({ index: index })
            //this.setState({ position: index * this.state.imageWidth })
        }
    }

    getColor(elementNum) {
        /*const col1 = parseInt(colors.primary);
        const col2 = parseInt(colors.darkPrimary);
        const base = col1 < col2 ? col1 : col2;
        const numeric = base + Math.abs(col1 - col2) / (this.dist(elementNum) + 1);*/
        //this.colorRatio(0.5);
        return colors.primaryLight;
        var normal = hexToRgb(colors.primaryLight);
        var highLight = hexToRgb(colors.darkPrimary);
        const dist = this.getDistance(elementNum);
        let r = normal.r + (highLight.r - normal.r) / (1 + dist / 10)
        let g = normal.g + (highLight.g - normal.g) / (1 + dist / 10)
        let b = normal.b + (highLight.b - normal.b) / (1 + dist / 10)
        //return rgbToHex(r, g, b);//numeric.toString(16);
    }

    getWidth(elementNum) {
        const widthMulti = this.state.widthMulti - 1;
        //return this.state.baseWidth + widthMulti * this.state.baseWidth / (this.dist(elementNum) + 1);
        return widthMulti * this.state.baseWidth / (this.getDistance(elementNum) / 2 + 1) + this.state.baseWidth;
    }

    getHeight(elementNum) {
        const heightMulti = this.state.heightMulti - 1;
        //return this.state.baseHeight + heightMulti * this.state.baseHeight / (this.dist(elementNum) + 1);
        return heightMulti * this.state.baseHeight / (this.getDistance(elementNum) / 2 + 1) + this.state.baseHeight;
    }

    isElementFocused(start, stop) {
        //return (this.state.position >= start && this.state.position < stop);
        return this.getDistance(start) < 10
    }

    handleScroll(event) {
        var x = event.nativeEvent.contentOffset.x;
        this.setState({ scrollPosition: x });
        x = x + Dimensions.get("window").width / 2;
        const start = 0.5;
        const multi = 3;
        //var page = start + multi * x / this.state.totalWidth;
        var page = this.getScrollRatio(x);
        this.setState({ position: page })
        this.setState({ updateScroll: true })
    }

    getInterval(objectNum) {
        return { start: objectNum - 0.5, stop: objectNum + 0.5 }
    }

    /*padToTwo(numberString) {
        if (numberString.length < 2) {
            numberString = '0' + numberString;
        }
        return numberString;
    }

    hexToRGB(hex) {
        return hex.reduce((previousValue, currentValue) => {
            return currentValue
                .replace(/^#/, '')
                .match(/.{2}/g)
                .map((value, index) => {
                    return previousValue[index] + parseInt(value, 16);
                });
        }, [0, 0, 0])
    }

    rgbToHex(rgb) {
        return rgb.reduce((previousValue, currentValue) => {
            return previousValue + this.padToTwo(Math.floor(currentValue / 2).toString(16));
        }, '#');
    }*/

    colorRatio(ratio) {
        const col1 = parseInt(colors.primary);
        const col2 = parseInt(colors.darkPrimary);
        const base = col1 < col2 ? col1 : col2;
        //var args = Array.prototype.slice.call(arguments);
        var args = [colors.primary, colors.darkPrimary];
        var rgb = args.reduce((previousValue, currentValue) => {
            return currentValue
                .replace(/^#/, '')
                .match(/.{2}/g)
                .map((value, index) => {
                    return previousValue[index] + parseInt(value, 16);
                });
        }, [0, 0, 0])
        //console.log("rgb", col1, this.rgbToHex(this.hexToRGB(col1)));
        let mean = rgb.reduce((previousValue, currentValue) => {
            return previousValue + this.padToTwo(Math.floor(currentValue / 2).toString(16));
        }, '#');
        console.log('mean', mean);
    }

    getScrollRatio(x) {
        const width = this.state.baseWidth * this.state.widthMulti;
        const d = width / 2;
        let start = this.state.scrollPosition + d;
        let len = this.state.totalWidth - Dimensions.get("window").width;
        return ((start - d + width / 2) / len) * this.state.size;
    }

    scrollratio2() {
        const width = this.state.baseWidth * this.state.widthMulti;
        const d = width / 2;
        let start = this.state.scrollPosition + d;
        let len = this.state.totalWidth - Dimensions.get("window").width;
        return this.state.scrollPosition//((start - d + width / 2) / len) * this.state.size;
    }

    handleScrollEnd(event) {
        var x = event.nativeEvent.contentOffset.x;
        const interval = 0;
        //var page = Math.round(x / this.state.imageHeight);
        if (this.state.handleScroll)
            if (x > this.state.position + interval)
                this.moveTo(this.state.index + 1);
            else if (x < this.state.position + interval) {
                this.moveTo(this.state.index - 1);
            } else {
                this.moveTo(this.state.index);
            }
        this.setState({ prev: x })
        this.setState({ updateScroll: false })
        //this.setState({ index: page })
        //console.log("bip2", this.state.index)
    }

    getDistance(i) {
        const widthMulti = this.state.widthMulti;
        const emlentWidth = this.state.baseWidth * this.state.widthMulti;
        const d = emlentWidth / 2;
        let pos = this.state.scrollPosition;
        let start = this.state.start;
        let elementPos = start + i * emlentWidth + emlentWidth / 2;
        //let elementPos = this.getPos(i) + emlentWidth / 2;
        let center = pos + Dimensions.get("window").width / 2;
        return Math.abs(elementPos - center)
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        const widthMulti = this.state.widthMulti;
        const heightMulti = this.state.heightMulti;
        return (
            <View style={{ flex: 1, alignSelf: 'flex-end' }}>
                <ScrollView
                    ref="scroll"
                    //onScrollEndDrag={(event) => this.handleScrollEnd(event)}
                    //onMomentumScrollEnd={(event) => this.handleScrollEnd(event)}
                    //pagingEnabled
                    snapToInterval={this.state.baseWidth * widthMulti}
                    //snapToAlignment={"center"}
                    onContentSizeChange={(width, height) => {
                        this.setState({ totalWidth: width })
                        console.log("width", width)
                    }}
                    /*onLayout={(event) => {
                        var { x, y, width, height } = event.nativeEvent.layout;
                        this.setState({ totalWidth: width })
                    }}*/
                    style={{ flexDirection: 'row', height: this.state.baseHeight * heightMulti }}
                    onScroll={(event => this.handleScroll(event))}
                    horizontal={true}
                >
                   
                    <View style={{ width: this.state.start }}></View>
                    <View //ref={view => { this.myComponent[0] = view; }}
                        style={{
                            width: this.state.baseWidth * widthMulti,
                            justifyContent: 'space-between',
                            alignItems: 'center', height: '100%',
                            //backgroundColor: colors.green,
                        }}>
                        <Text style={{ color: colors.white }}>.</Text>
                        <View style={styles.swipeBox,
                        {
                            backgroundColor: this.isElementFocused(0, 1) ? this.getColor(0) : colors.primary,
                            width: this.getWidth(0),
                            borderTopEndRadius: this.isElementFocused(0, 1) ? 40 : 20,
                            borderTopLeftRadius: this.isElementFocused(0, 1) ? 40 : 20,
                            //alignItems: 'center',
                            //width: this.isElementFocused(0, 1) ? this.getWidth(0) : this.state.baseWidth,
                            //height: this.isElementFocused(0.5, 1.5) ? this.getHeight(0) : this.state.baseHeight,
                            height: this.getHeight(0),
                        }}>
                            <TouchableWithoutFeedback onPress={() => { this.setState({ showList: 'WorthToSee' }) }}>
                                <View style={styles.iconContainer}>
                                    <Image source={getIcon("worth")}
                                        style={{
                                            width: 20 + 20 / (1 + this.getDistance(0)),
                                            height: 15 + 15 / (1 + this.getDistance(0)),
                                            marginBottom: 10,
                                        }}
                                    />
                                    <Text style={{
                                        color: colors.white, fontFamily: 'Montserrat-Regular',
                                        fontSize: this.isElementFocused(0) ? 18 : 10,
                                        //textAlign: 'center'
                                    }}>
                                        {this.capitalize(I18n.t("worthToSee").replace(" ", "\n"))}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    
                    <View //ref={view => { this.myComponent[1] = view; }}
                        style={{
                            width: this.state.baseWidth * widthMulti,
                            justifyContent: 'space-between',
                            alignItems: 'center', height: '100%',
                            //backgroundColor: colors.darkGrey
                        }}>
                        <Text style={{ color: colors.white }}>.</Text>
                        <View style={styles.swipeBox,
                        {
                            backgroundColor: this.isElementFocused(1, 2) ? this.getColor(1) : colors.primary,
                            //width: this.state.baseWidth,
                            width: this.getWidth(1),
                            borderTopEndRadius: this.isElementFocused(1, 2) ? 40 : 20,
                            borderTopLeftRadius: this.isElementFocused(1, 2) ? 40 : 20,
                            //alignItems: 'center',
                            //width: this.isElementFocused(1, 2) ? this.getWidth(1) : this.state.baseWidth,
                            //height: this.isElementFocused(1.5, 2.5) ? this.getHeight(1) : this.state.baseHeight,
                            height: this.getHeight(1),
                        }}>
                            <View style={styles.iconContainer}>
                                <Image source={getIcon("restaurant_transparent")}
                                    style={{
                                        width: 22 + 24 / (1 + this.getDistance(1)),
                                        height: 15 + 18 / (1 + this.getDistance(1)),
                                        marginBottom: 10,
                                    }}
                                />
                                <Text style={{
                                    color: colors.white, fontFamily: 'Montserrat-Regular',
                                    fontSize: this.isElementFocused(1) ? 18 : 10,
                                    //textAlign: 'center'
                                }}>{this.capitalize(I18n.t("restaurants"))}</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View //ref={view => { this.myComponent[2] = view; }}
                        style={{
                            width: this.state.baseWidth * widthMulti,
                            justifyContent: 'space-between',
                            alignItems: 'center', height: '100%'
                        }}>
                        <Text style={{ color: colors.white }}>.</Text>
                        <View style={styles.swipeBox,
                        {
                            backgroundColor: this.isElementFocused(2, 3) ? this.getColor(2) : colors.primary,
                            //width: this.state.baseWidth,
                            width: this.getWidth(2),
                            borderTopEndRadius: this.isElementFocused(2, 3) ? 40 : 20,
                            borderTopLeftRadius: this.isElementFocused(2, 3) ? 40 : 20,
                            //alignItems: 'center',
                            //width: this.isElementFocused(2, 3) ? this.getWidth(2) : this.state.baseWidth,
                            //height: this.isElementFocused(2.5, 3.5) ? this.getHeight(2) : this.state.baseHeight,
                            height: this.getHeight(2),
                        }}>
                            <View style={styles.iconContainer}>
                                <Image source={getIcon("interesting")}
                                    style={{
                                        width: 20 + 20 / (1 + this.getDistance(2)),
                                        height: 25 + 22 / (1 + this.getDistance(2)),
                                        marginBottom: 10,
                                    }}
                                />
                            </View>
                            <Text style={{
                                color: colors.white, fontFamily: 'Montserrat-Regular',
                                fontSize: this.isElementFocused(2) ? 18 : 10,
                                textAlign: 'center'
                            }}>{this.capitalize(I18n.t("interesting"))}</Text>
                        </View>
                    </View>
                     
                    <View //ref={view => { this.myComponent[3] = view; }}
                        style={{
                            width: this.state.baseWidth * widthMulti,
                            justifyContent: 'space-between',
                            alignItems: 'center', height: '100%'
                        }}>
                        <Text style={{ color: colors.white }}>.</Text>
                        <View style={styles.swipeBox,
                        {
                            backgroundColor: this.isElementFocused(3, 4) ? this.getColor(3) : colors.primary,
                            //width: this.state.baseWidth,
                            width: this.getWidth(3),
                            borderTopEndRadius: this.isElementFocused(3, 4) ? 40 : 20,
                            borderTopLeftRadius: this.isElementFocused(3, 4) ? 40 : 20,
                            //width: this.isElementFocused(2, 3) ? this.getWidth(2) : this.state.baseWidth,
                            //height: this.isElementFocused(2.5, 3.5) ? this.getHeight(2) : this.state.baseHeight,
                            height: this.getHeight(3),
                        }}>
                            <View style={styles.iconContainer}>
                                <Image source={getIcon("contact_icon")}
                                    style={{
                                        width: 22 + 28 / (1 + this.getDistance(3)),
                                        height: 14 + 22 / (1 + this.getDistance(3)),
                                        marginBottom: 10,
                                    }}
                                />
                            </View>
                            <Text style={{
                                color: colors.white, fontFamily: 'Montserrat-Regular',
                                fontSize: this.isElementFocused(3) ? 18 : 10,
                                textAlign: 'center'
                            }}>{this.capitalize(I18n.t("contact"))}</Text>
                        </View>
                    </View>
                    
                    <View //ref={view => { this.myComponent[4] = view; }}
                        style={{
                            width: this.state.baseWidth * widthMulti,
                            justifyContent: 'space-between',
                            alignItems: 'center', height: '100%'
                        }}>
                        <Text style={{ color: colors.white }}>.</Text>
                        <TouchableWithoutFeedback onPress={() => this.props.showFunction("shopping")}>
                            <View style={styles.swipeBox,
                            {
                                backgroundColor: this.isElementFocused(4, 5) ? this.getColor(4) : colors.primary,
                                //width: this.state.baseWidth,
                                width: this.getWidth(4),
                                borderTopEndRadius: this.isElementFocused(4, 5) ? 40 : 20,
                                borderTopLeftRadius: this.isElementFocused(4, 5) ? 40 : 20,
                                //width: this.isElementFocused(2, 3) ? this.getWidth(2) : this.state.baseWidth,
                                //height: this.isElementFocused(2.5, 3.5) ? this.getHeight(2) : this.state.baseHeight,
                                height: this.getHeight(4),
                            }}>
                                <View style={styles.iconContainer}>
                                    <Image source={getIcon("shoping")}
                                        style={{
                                            width: 20 + 20 / (1 + this.getDistance(4)),
                                            height: 24 + 25 / (1 + this.getDistance(4)),
                                            marginBottom: 10,
                                        }}
                                    />
                                </View>
                                <Text style={{
                                    color: colors.white, fontFamily: 'Montserrat-Regular',
                                    fontSize: this.isElementFocused(4) ? 18 : 10,
                                    textAlign: 'center'
                                }}>{this.capitalize(I18n.t("shoping"))}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    
                    <View style={{ width: this.state.baseWidth * widthMulti }}></View>
                     {/*       */}
                </ScrollView>

            </View >
        )
    }
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}