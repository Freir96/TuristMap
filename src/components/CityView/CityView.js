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
import { useSelector } from 'react-redux';

import styles from './styles';
import colors from '../../styles/colors';

import Swiper from 'react-native-swiper'

import ImageSviper from '../ImageSwiper/ImageSwiper';

import PlaceService from '../../services/PlaceService';
import FavoriteService from '../../services/FavoriteService';
import DescriptionService from '../../services/DescriptionService';
import ImageService from '../../services/ImageService';
import { getProductsListById } from '../../services/ShoppingService'
//import Button from '../common/Button';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

import I18n from '../../i18n/i18n';
import ItemsScroll from './ItemsScroll';
import FavoriteButton from '../Favorite/FavoriteButton';
import PlacesList from '../PlacesList/PlacesList';

import { Overlay } from 'react-native-elements';

export default class CityView extends React.Component {
    constructor(props) {
        super(props)
        //console.log("bip", props.navigation.state.params)
        this.state = {
            text: '',
            images: ImageService.getCityImages(),
            name: "",
            value: 'all',
            isMapReady: false,
            favorite: false,
            //favkey: props.navigation.state.params.place.title,
            markers: [],
            description: "",
            showList: '',
            //placesList: PlaceService.getPlacesFromCity(props.navigation.state.params.place.title),
            //placesList: MapService.getLocations(props.navigation.state.params.name),
        }
        //this.placesList = PlaceService.getPlacesFromCity(props.navigation.state.params.place.title);
    }

    /*static navigationOptions = ({ navigation }) => {
        let title = <Text style={{ fontSize: 20, color: colors.white }}>
            {navigation.getParam('place').title}
        </Text>
        //let currentProfile = navigation.getParam('profile')

        return {
            headerTitle: title,
            headerStyle: {
                backgroundColor: colors.primary
            },
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
                color: colors.white,
            },
            headerTintColor: colors.darkGrey
        }
    }*/

    async componentDidMount() {
        //console.log("bip props", this.props)
        console.log("city id", this.props.navigation.state.params)
        let data = await DescriptionService.getCityDescriptionById(this.props.navigation.state.params.id)
        console.log("city data", data)
        this.setState({
            favorite: await FavoriteService.isOnList(data.name, "CityView"),
            description: data.description,//DescriptionService.getCityDescription(2),
            name: data.name
        })
        this.fav.update(data.name, data.id)
    }

    /*getSugestionsPlaces() {
        var options = [];
        const sugestions = MapService.getSugestionsPlaces();
        for (var i = 0; i < sugestions.length; i++) {
            //console.log('bip2', sugestions[i])
            options.push(
                <Button
                    key={i}
                    style={{ margin: 5 }}
                    onPress={() => this.props.navigation.navigate('Description', { param: sugestions[i], city: props.navigation.state.params.name })}
                    title={sugestions[i].title}>
                </Button>);
        }
        return options;
    }*/

    /*getMatchingPlaces(substring) {
        var matchingPlaces = [];
        for (var i = 0; i < this.placesList.length; i++) {
            if (this.placesList[i].title.includes(substring))
                matchingPlaces.push({ key: i, name: this.placesList[i].title, });
        }
        //this.setState({cityList: matchingcities});
        return matchingPlaces;
    }*/

    navigateToScreen = (route, params) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route,
            params: params,
        });
        this.props.navigation.dispatch(navigateAction);
    }

    changeFavoriteData() {
        if (this.state.favorite) {
            FavoriteService.removeFromList(this.state.favkey, "city");
        }
        else {
            FavoriteService.addToList(this.state.favkey, "city");
        }
        //this._storeData(!this.state.favorite);
        this.setState({ favorite: !this.state.favorite });
    }

    handleScroll(event) {
        this.setState({ scrollPosition: event.nativeEvent.contentOffset })
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: colors.darkPrimary/*, minHeight: Dimensions.get("screen").height*/ }}>
                <Overlay
                    isVisible={this.state.showList !== ""}
                    onBackdropPress={() => this.setState({ showList: '' })}
                    borderRadius={30}
                    overlayBackgroundColor={colors.darkPrimary}
                    height={600}
                    overlayStyle={{
                        position: 'absolute',
                        top: 20,
                    }}
                >
                    <PlacesList navfunction={(param) => this.navigateToScreen(this.state.showList, param)}
                        hide={() => this.hideList()}
                        type={this.state.showList}
                        navigation={this.props.navfunction}
                    />
                </Overlay>
                <View style={{ minHeight: Dimensions.get("screen").height * 0.9 }}>
                    <View style={{ backgroundColor: colors.white, width: '100%' }}>
                        <View style={{
                            backgroundColor: colors.primaryLight, width: '100%',
                            borderTopEndRadius: 20, borderTopLeftRadius: 20
                        }}>
                            <Text style={{
                                marginLeft: 15, marginTop: 15, color: colors.white,
                                fontSize: 15, fontFamily: 'Montserrat-Regular'
                            }}>
                                {this.state.name}
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        backgroundColor: colors.primaryLight,
                        height: Dimensions.get("window").width * 0.95 * 0.6,
                    }}>
                        {/*<Swiper removeClippedSubviews={false} showsButtons
                        paginationStyle={{color: colors.primary}}
                        dotStyle={{color: colors.primary}}
                        nextButton={<Text style={[styles.swipeButton]}>›</Text>}
                        prevButton={<Text style={[styles.swipeButton]}>{"‹"}</Text>}
                        containerStyle={{
                            height: Dimensions.get('window').height * 0.3,
                            width: Dimensions.get("window").width
                        }} >
                        {this.state.images.map((image, index) => (
                            <View key={index} style={{
                                width: '95%', height: "100%",
                                backgroundColor: colors.black, alignItems: 'center',
                                alignSelf: 'center', borderRadius: 20,
                                padding: 20,
                            }}>
                                <Image
                                    source={image}
                                    style={{ width: '100%', height: "100%", 
                                    borderRadius: 20, }}
                                />
                            </View>
                        ))}

                        </Swiper>*/}
                        <View style={{
                            marginTop: 100, backgroundColor: colors.darkPrimary, //height: 80,
                            borderTopLeftRadius: 20,
                            borderTopEndRadius: 20,
                            flex: 1,
                        }}>

                        </View>
                        <View style={{
                            position: 'absolute', zindex: 99,
                            alignSelf: 'center',
                            alignContent: 'center', alignItems: 'center',
                        }}>
                            <ImageSviper
                                images={this.state.images}
                                imageWidth={Dimensions.get("window").width * 0.75}
                                frameWidth={Dimensions.get("window").width * 0.95}
                                imageRatio={0.6}
                            />
                        </View>
                        <View style={{ position: 'absolute', top: 0, right: 0 }}>
                            <FavoriteButton
                                type="CityView"
                                name={this.state.name}
                                //id={this.props.navigation.state.params.id}
                                ref={(icon) => this.fav = icon}
                            //color={colors.white}
                            />
                        </View>
                        {/*<View style={{ position: 'absolute', top: 30, left: 0, right: 0, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 48, color: "white", textShadowColor: "black", textShadowRadius: 2 }} textShadowRadius={2} textShadowColor={"black"} >
                            {"" + this.state.favkey}
                        </Text>

                    </View>*/}
                        {/*<View style={{
                            position: 'absolute',
                            zIndex: 999,
                            top: 17, right: 12, justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <TouchableWithoutFeedback onPress={() => this.changeFavoriteData()}>
                                <AntIcon size={25} color={colors.white}
                                    name={this.state.favorite ? 'star' : 'staro'}
                                //onPress={(event) => addToFavourites ? this.addToMyTopics(event, item.topicName) : this.removeFromMyTopics(event, item.topicName)}
                                />
                            </TouchableWithoutFeedback>
                        </View>*/}
                    </View>


                    {/*description and navigation*/}
                    <View style={{ width: '87.5%', marginTop: 10, justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center' }}>
                        <View style={{ alignSelf: 'center' }}>
                            {/*<Text style={{ margin: 10, color: colors.black, fontFamily: 'texgyrepagella-regular',  }}>
                            {this.state.description}
                        </Text>*/}
                            <Text style={{ fontFamily: 'Montserrat-Regular', color: colors.darkish2 }}>
                                <Text style={{ fontFamily: 'Montserrat-ExtraBold', color: colors.darkish2, fontSize: 20 }}>
                                    {this.state.description.substring(0, 1)}
                                </Text>
                                {this.state.description.substring(1)}
                            </Text>
                        </View>
                        {/*
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', width: '100%', }}>
                            <TouchableOpacity style={[styles.button, { flex: 2 }]}>
                                <View style={{ flexDirection: 'row' }}>
                                    <AntIcon name="search1" size={25} color={colors.primary} />
                                    <Text style={[styles.navText]}>item1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, { flex: 2 }]}>
                                <View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
                                    <SimpleLineIcon name="handbag" size={20} color={colors.primary} />
                                    <Text style={[styles.navText]}>item2</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', }}>
                            <TouchableOpacity style={[styles.button, { flex: 2 }]}>
                                <View style={{ flexDirection: 'row' }}>
                                    <EvilIcon name="like" size={25} color={colors.primary} />
                                    <Text style={[styles.navText]}>item1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, { flex: 2 }]}>
                                <View style={{ flexDirection: 'row' }}>
                                    <EvilIcon name="like" size={25} color={colors.primary} />
                                    <Text style={[styles.navText]}>item2</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 1 }}></View>
                            <TouchableOpacity style={[styles.button, { alignSelf: 'center', flex: 2 }]}>
                                <View style={{ flexDirection: 'row' }}>
                                    <EvilIcon name="like" size={25} color={colors.primary} />
                                    <Text style={[styles.navText]}>item1</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ flex: 1 }}></View>
                        </View>
                    </View>
                    */}
                    </View>
                    <View style={{ flexGrow: 1, alignItems: 'flex-end' }}>
                        <ItemsScroll height={100} showFunction={(val) => { this.setState({ showList: val }) }} />
                    </View>




                    {/*<View style={{
                    //position: 'absolute', 
                    left: 0, right: 0,
                    justifyContent: 'center', alignItems: 'center',
                    marginTop: 10
                }}>
                    <View style={{
                        backgroundColor: colors.white,
                        width: "95%"
                    }}>
                        <View style={styles.navSectionStyle}>
                            <View style={styles.itemIcon}>
                                <MaterialCommunityIcon name={"sign-direction"} size={iconSize} color={colors.yellow} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Places', { place: "atraction" })}>
                                    {I18n.t("atractions")}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.navSectionStyle}>
                            <View style={styles.itemIcon}>
                                <Ionicon name={"md-restaurant"} size={iconSize} color={colors.red} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Places', { place: "restaurant" })}>
                                    {I18n.t("restaurants")}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.navSectionStyle}>
                            <View style={styles.itemIcon}>
                                <MaterialIcon name={"hotel"} size={iconSize} color={colors.purple} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Places', { place: "hotel" })}>
                                    {"Hotel"}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    left: 0, right: 0,
                    justifyContent: 'center', alignItems: 'center',
                    marginTop: 10
                }}>
                    <View style={{
                        marginTop: 10, backgroundColor: colors.whiteSmoke,
                        width: "95%"
                    }}>
                        <Text style={{ fontSize: 25 }}>{"City info"}</Text>
                        <View style={[styles.navSectionStyle, { backgroundColor: colors.white }]}>
                            <View style={styles.itemIcon}>
                                <MaterialCommunityIcon name={"information"} size={iconSize} color={colors.blue} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Places', { place: "hotel" })}>
                                    {"Learn more"}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>*/}
                </View>
            </ScrollView>
        )
        /*
        return (
            <View style={styles.container}>
                <View style={{
                    backgroundColor: this.state.text,
                    borderBottomColor: '#000000',
                    borderBottomWidth: 1
                }}
                >
                </View>
                <TextListSearch
                    searchbar={true}
                    type={"place"}
                    prefix={this.props.navigation.state.params.place.name}
                    places={this.placesList}
                    navfunction={(place) => { this.props.navigation.navigate('Description', { place: place }) }}
                />
                <ScrollView>

                </ScrollView>
            </View>
        )*/
    }

}

const iconSize = 25;


const images4 = [
    require("../../assets/tmp/canary2.jpg"),
    require("../../assets/tmp/canary-social.jpg"),
    require("../../assets/tmp/canary2.jpg"),
    require("../../assets/tmp/canary-social.jpg")
]