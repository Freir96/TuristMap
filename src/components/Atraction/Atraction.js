import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Button,
    Dimensions,
    Image,
    FlatList,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Text,
} from 'react-native';

import colors from '../../styles/colors';

import NavigationService from '../../services/NavigationService';
import FavoriteService from '../../services/FavoriteService';
import DescriptionService from '../../services/DescriptionService';
import ImageService from '../../services/ImageService';
import { getIcon } from '../../services/IconService';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import ImageSviper from '../ImageSwiper/ImageSwiper';
import LinearGradient from 'react-native-linear-gradient';

import { NavigationActions } from 'react-navigation'
import AntIcon from 'react-native-vector-icons/AntDesign';
import I18n from '../../i18n/i18n';
import styles from './styles';
//import { act } from 'react-test-renderer';

import FavoriteButton from '../Favorite/FavoriteButton';

export default class Atraction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            name: "",
            images: ImageService.getCityImages(),
            description: "",
            hours: ['11:00-17:00', '12:00-15:00'],
            phone: '+44 20 7356 54862',
            instagram: 'rajdpowydmach',
            type: 'place',
            price: '20$',
        }
    }

    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        let data = DescriptionService.getDescriptionById(this.props.navigation.state.params.id)
        console.log(this.props.navigation.state.params)
        this.setState({ name: data.name })
        this.setState({ description: data.description })
        this.fav.update(data.name, data.id)
        //let data = getInfo();
        //console.log(data.pl)
        //this.setState({ data: data.pl });
    }

    navigateToScreen = (route, params) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route,
            params: params,
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: colors.darkPrimary }}>
                <View style={{ backgroundColor: colors.primaryLight, height: Dimensions.get("window").width * 0.7 }}>
                    <View>
                    </View>
                    <View
                        style={{ backgroundColor: colors.darkPrimary, }}
                    >
                        <View style={{
                            width: '100%',
                            backgroundColor: colors.primaryLight, height: 150,
                            borderTopRightRadius: 30, borderTopLeftRadius: 30,
                        }}>
                            <Text style={{
                                fontFamily: 'OpenSans-Bold', textAlignVertical: 'center',
                                fontSize: 20, color: colors.white, textAlign: 'center',
                                marginTop: 15,
                            }}
                            >{this.state.name}</Text>
                        </View>
                    </View>
                    <View style={{
                        width: '100%', height: 50,//height: Dimensions.get("window").width * 0.2,
                        backgroundColor: colors.darkPrimary, //flex: 1
                        borderTopRightRadius: 30, borderTopLeftRadius: 30,
                    }}
                    ></View>
                    <View style={{
                        width: '100%', //height: 150,//height: Dimensions.get("window").width * 0.2,
                        flexGrow: 1,
                        backgroundColor: colors.darkPrimary, //flex: 1
                        //borderTopRightRadius: 30, borderTopLeftRadius: 30,
                    }}
                    ></View>
                    <View style={{ position: 'absolute', alignItems: 'center', alignSelf: 'center' }}>
                        <View style={{ height: 50 }}></View>
                        <ImageSviper
                            images={this.state.images}
                            imageWidth={300 * 0.8}
                            frameWidth={300 * 0.95}
                            //imageWidth={Dimensions.get("window").width * 0.8}
                            //frameWidth={Dimensions.get("window").width * 0.95}
                            imageRatio={0.6}
                        />
                    </View>
                    <View style={{ position: 'absolute', top: 0, right: 0 }}>
                        <FavoriteButton
                            type="Atraction"
                            name={this.state.name}
                            id={this.props.navigation.state.params.id}
                            ref={(icon) => this.fav = icon}
                        //color={colors.white}
                        />
                    </View>
                </View>
                <View style={{ width: '80%', alignSelf: 'center' }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>

                        <Text style={{ fontFamily: 'Montserrat-Regular', color: colors.darkish2 }}>
                            <Text style={{ fontFamily: 'Montserrat-Regular', color: colors.darkish2, fontSize: 20 }}>
                                {this.state.description.substring(0, 1)}
                            </Text>
                            {this.state.description.substring(1)}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Image source={getIcon("time")} style={{ width: 50, height: 50 }} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <View>
                                <Text style={{ color: colors.darkish2, marginBottom: 5, fontFamily: 'Montserrat-SemiBold' }}>
                                    {I18n.t("openHours")}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ color: colors.grey, fontFamily: 'Montserrat-Regular' }}>
                                        {I18n.t("mon")}-{I18n.t("sut")}
                                    </Text>
                                    <Text style={{ color: colors.grey, fontFamily: 'Montserrat-Regular' }}>
                                        {I18n.t("sund")}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'column', marginLeft: 30 }}>
                                    <Text style={{ color: colors.grey, fontFamily: 'Montserrat-Regular' }}>
                                        {this.state.hours[0]}
                                    </Text>
                                    <Text style={{ color: colors.grey, fontFamily: 'Montserrat-Regular' }}>
                                        {this.state.hours[1]}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/*<View style={styles.infoContainer}>
                        <Image source={getIcon("phone")} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <View>
                                <Text style={{ color: colors.darkish2, marginBottom: 5, fontFamily: 'Montserrat-Semibold' }}>
                                    {I18n.t("phone")}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ color: colors.primaryLight, fontFamily: 'Montserrat-Regular' }}>
                                        {this.state.phone}
                                    </Text>
                                </View>
                            </View>
                        </View>
                </View>*/}
                    <View style={styles.infoContainer}>
                        <View style={styles.iconContainer}>
                            {/*<Image source={getIcon("website")} style={styles.icon} />*/}
                            <MaterialCommunityIcon name="web" size={iconSize} style={styles.iconStyle} />
                        </View>
                        <TouchableOpacity style={{ marginTop: 5, marginLeft: 20, }}>
                            <View style={{
                                backgroundColor: colors.primaryLight, alignItems: 'center',
                                width: 150, borderRadius: 30, paddingVertical: 10,
                            }}>
                                <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 16, color: colors.white }}>
                                    {I18n.t('navigate').toUpperCase()}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.iconContainer}>
                            <Image source={getIcon("money_mark")} style={{ width: 30, height: 30 }} />
                        </View>
                        <View style={{ marginTop: 5, marginLeft: 20, flexDirection: 'column' }}>
                            <Text style={{ color: colors.darkish2, fontFamily: 'Montserrat-Regular' }}>
                                {I18n.t("price")}
                            </Text>
                            <Text style={{ color: colors.grey, fontFamily: 'Montserrat-Regular' }}>
                                {this.state.price}
                            </Text>
                        </View>
                    </View>
                    {/*<View style={styles.infoContainer}>
                        <Image source={getIcon("insta")} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <View>
                                <Text style={{ color: colors.darkish2, marginBottom: 5, fontFamily: 'Montserrat-Semibold' }}>
                                    {I18n.t("instagram")}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ color: colors.primaryLight, fontFamily: 'Montserrat-Regular' }}>
                                        {this.state.instagram}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        </View>*/}
                    {/*this.state.type !== 'place' && */}
                    <TouchableOpacity style={{ alignSelf: 'center', marginVertical: 15 }}
                        onPress={() => NavigationService.navigate(actionType[this.state.type])}
                    >
                        <LinearGradient //colors={['#43D4FF', '#38ABFD', '#2974FA']}
                            colors={['#628492', '#52717C', '#567581']}
                            style={styles.gradient}>
                            <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 13, textAlign: 'center', color: colors.white }}>
                                {I18n.t(actionType[this.state.type].toLowerCase()).toUpperCase()}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
            </ScrollView >
        )
    }
}

var actionType = []

actionType['restaurant'] = 'Discount'
//actionType['place'] = 'Discount'
actionType['atraction'] = 'Reservation'
actionType['place'] = 'Reservation'

const iconSize = 30;