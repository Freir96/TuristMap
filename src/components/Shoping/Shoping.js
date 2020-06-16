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
    Linking,
    Text,
} from 'react-native';

import colors from '../../styles/colors';

import NavigationService from '../../services/NavigationService';
import FavoriteService from '../../services/FavoriteService';
import DescriptionService from '../../services/DescriptionService';
import ImageService from '../../services/ImageService';
import { getIcon } from '../../services/IconService';
import ShoppingService from '../../services/ShoppingService';

import ImageSviper from '../ImageSwiper/ImageSwiper';
import LinearGradient from 'react-native-linear-gradient';

import { NavigationActions } from 'react-navigation'
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import I18n from '../../i18n/i18n';
import styles from './styles';
//import { act } from 'react-test-renderer';

import FavoriteButton from '../Favorite/FavoriteButton';

import getDirections from 'react-native-google-maps-directions'
import GetLocation from 'react-native-get-location'

export default class Shopping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            name: "",
            images: ImageService.getCityImages(),
            description: "",
            type: 'shop',
            hours: [],
            phone: '',
            instagram: '',
            web: '',
            open: [],
            facebook: '',
        }
    }

    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        let data = ShoppingService.getProductById(this.props.navigation.state.params.id)
        console.log(this.props.navigation.state.params)
        this.setState({ name: data.name })
        this.setState({ web: data.web })
        this.setState({ open: data.open })
        this.setState({ facebook: data.facebook })
        this.setState({ instagram: data.instagram })
        this.setState({ description: data.description })
        this.fav.update(data.name, data.id)
        let images = ImageService.getShoppingImages(this.props.navigation.state.params.id)
        this.setState({ images: images })
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
    openLink(url) {
        console.log("open: " + url);
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        });
    }

    openNavigation() {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(async (location) => {
                console.log(location);
                let place = PlaceService.getPlaceById(this.props.navigation.state.params.placeId)
                console.log(place)
                const data = {
                    source: {
                        latitude: location.latitude,
                        longitude: location.longitude
                    },
                    destination: {
                        latitude: place.latitude,
                        longitude: place.longitude
                    },
                    params: [
                        {
                            key: "travelmode",
                            value: "driving"        // may be "walking", "bicycling" or "transit" as well
                        },
                        {
                            key: "dir_action",
                            value: "navigate"       // this instantly initializes navigation using the given travel mode
                        }
                    ],
                    waypoints: []
                }
                getDirections(data)
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
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
                            imageWidth={Dimensions.get("window").width * 0.8}
                            frameWidth={Dimensions.get("window").width * 0.95}
                            imageRatio={0.6}
                        />
                    </View>
                    <View style={{ position: 'absolute', top: 0, right: 0 }}>
                        <FavoriteButton
                            type="Shopping"
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
                        <View style={styles.iconContainer}>
                            <Image source={getIcon("navigate")} style={styles.icon} />
                        </View>
                        <TouchableOpacity style={{ marginTop: 5, marginLeft: 25, alignSelf: 'center' }}
                            onPress={() => { this.openNavigation() }}
                        >
                            <LinearGradient colors={['#628492', '#52717C', '#567581']} style={styles.gradient}>
                                <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 13, color: colors.white }}>
                                    {I18n.t('navigate').toUpperCase()}
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoContainer}>
                        <Image source={getIcon("time")} style={{ width: 50, height: 50 }} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <View>
                                <Text style={{ color: colors.darkish2, marginBottom: 5, fontFamily: 'Montserrat-SemiBold' }}>
                                    {I18n.t("openHours")}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                {this.state.open.map((item) =>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: colors.darkGrey, fontFamily: 'Montserrat-Regular' }}>
                                            {item.day}
                                        </Text>
                                        <Text style={[styles.subtitle, { marginLeft: 5 }]}>
                                            {item.hour}
                                        </Text>
                                    </View>
                                )}
                            </View>
                            {/*<View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ color: colors.primaryLight, fontFamily: 'Montserrat-Regular' }}>
                                        {I18n.t("mon")}-{I18n.t("sut")}
                                    </Text>
                                    <Text style={{ color: colors.primaryLight, fontFamily: 'Montserrat-Regular' }}>
                                        {I18n.t("sund")}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'column', marginLeft: 30 }}>
                                    <Text style={{ color: colors.primaryLight, fontFamily: 'Montserrat-Regular' }}>
                                        {this.state.hours[0]}
                                    </Text>
                                    <Text style={{ color: colors.primaryLight, fontFamily: 'Montserrat-Regular' }}>
                                        {this.state.hours[1]}
                                    </Text>
                                </View>
                            </View>*/}
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
                    {this.state.facebook !== '' &&
                        <TouchableOpacity onPress={() => { this.openLink(this.state.facebook) }}>
                            <View style={styles.infoContainer} >
                                <View style={styles.iconContainer}>
                                    {/*<Image source={getIcon("facebook")} />*/}
                                    <FontAwesomeIcon name={"facebook"} size={iconSize} style={styles.iconStyle} />
                                </View>
                                <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                                    <View>
                                        <Text style={styles.title}>
                                            {I18n.t("facebook")}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text style={styles.subtitle}>
                                                {this.state.facebook}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                    {this.state.instagram !== '' &&
                        <View style={styles.infoContainer}>
                            <View style={styles.iconContainer}>
                                {/*<Image source={getIcon("insta")} style={styles.icon} />*/}
                                <AntIcon name='instagram' size={iconSize} style={styles.iconStyle} />
                            </View>
                            <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                                <View>
                                    <Text style={{ color: colors.darkish2, marginBottom: 5, fontFamily: 'Montserrat-SemiBold' }}>
                                        {I18n.t("instagram")}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.subtitle}>
                                            {this.state.instagram}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    }
                    {this.state.instagram !== '' &&
                        <View style={styles.infoContainer}>
                            <View style={styles.iconContainer}>
                                {/*<Image source={getIcon("website")} style={styles.icon} />*/}
                                <MaterialCommunityIcon name="web" size={iconSize} style={styles.iconStyle} />
                            </View>
                            <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                                <View>
                                    <Text style={{ color: colors.darkish2, marginBottom: 5, fontFamily: 'Montserrat-SemiBold' }}>
                                        {I18n.t("website")}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.subtitle}>
                                            {this.state.instagram}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    }
                    {/*<View style={styles.infoContainer}>
                        <Image source={getIcon("money")} />
                        <View style={{ marginTop: 5, marginLeft: 20, flexDirection: 'column' }}>
                            <Text style={{ color: colors.darkish2, fontFamily: 'Montserrat-Regular' }}>
                                {I18n.t("price")}
                            </Text>
                            <Text style={{ color: colors.primaryLight, fontFamily: 'Montserrat-Regular' }}>
                                {this.state.price}
                            </Text>
                        </View>
                    </View>*/}
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
actionType['shop'] = 'Discount'
//actionType['place'] = 'Discount'
actionType['atraction'] = 'Reservation'
actionType['place'] = 'Reservation'

const iconSize = 30;