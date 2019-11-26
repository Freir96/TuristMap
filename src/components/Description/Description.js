import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Button,
    ImageBackground,
    Image,
    Dimensions,
    Modal,
    Text,
} from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';
import colors from '../../styles/colors';
import Colors from '../../helpers/Colors';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapService from '../../services/MapService';
import DescriptionService from '../../services/DescriptionService';
import FavoriteService from '../../services/FavoriteService';
import { Marker } from 'react-native-maps';
//import ImageViewer from 'react-native-image-zoom-viewer';
//import ImageView from 'react-native-image-view';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/FontAwesome'
import AntIcon from "react-native-vector-icons/AntDesign";

import { SliderBox } from 'react-native-image-slider-box';
import ImageSlider from 'react-native-image-slider';
import Swiper from 'react-native-swiper'


import I18n from '../../i18n/i18n';

var title = ''

export default class Description extends React.Component {
    constructor(props) {
        super(props);
        //console.log("bip des", props.navigation.state.params)
        this.state = {
            //params: this.getParams(props),//props.navigation.state.params.param,
            id: props.navigation.state.params.place.id,//this.getParams(props).key,
            //description: MapService.getDescriptionById(this.getParams(props).key),//o tu <-------------------------
            description: '',
            favkey: props.navigation.state.params.place.favkey,
            isVisible: false,
            phone: '500-080-009',
            city: this.props.navigation.state.params.place.city,//no param
            favorite: false,
            images: [],
        }
        this.title = props.navigation.state.params.place.name//this.getParams(props).title;
    }

    async componentDidMount() {
        let data = DescriptionService.getDescriptionById(this.state.id);
        this.setState({ description: data.description });
        this.setState({ images: images4 })
        //this.setState({description: data.description});
        //this.setState({description: data.description});
        this.setState({ favorite: await FavoriteService.isOnList(this.state.favkey, "place") })
    }

    changeFavoriteData() {
        if (this.state.favorite) {
            FavoriteService.removeFromList(this.state.favkey, "place");
        }
        else {
            FavoriteService.addToList(this.state.favkey, "place");
        }
        //this._storeData(!this.state.favorite);
        this.setState({ favorite: !this.state.favorite });
    }

    static navigationOptions = ({ navigation }) => {
        let place = navigation.getParam('place')
        let title = <Text style={{ fontSize: 20 }}>{place.name}</Text>
        //let currentProfile = navigation.getParam('profile')
        //console.log('bip', navigation.getParam('title'));
        return {
            headerTitle: title,
            headerStyle: {
                backgroundColor: colors.white
            },
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
                color: colors.white,
            },
            headerTintColor: colors.darkGrey
        }
    }

    render() {
        console.log("bip des", this.state)
        return (
            <View style={styles.container}>
                <ScrollView
                    alignItems='stretch'
                    style={{ width: '100%' }}
                >
                    <View style={{ flex: 1 }}>
                        <Swiper removeClippedSubviews={false}
                            containerStyle={{
                                height: Dimensions.get('window').height / 4,
                                width: Dimensions.get("window").width
                            }} >
                            {this.state.images.map((image, index) => (
                                <View key={index}>
                                    <Image source={image} style={{ width: '100%', height: "100%" }} />
                                </View>
                            ))}
                            <View >
                                <View style={{ position: 'absolute', top: 20, left: 0, right: 0, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text>Centered text</Text>
                                </View>
                                <Image source={images4[0]} style={{ width: '100%', height: "100%" }} />
                            </View>

                        </Swiper>
                        <View style={{ position: 'absolute', top: 10, left: 0, right: 0, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 48, color: "white", textShadowColor: "black", textShadowRadius: 2 }} textShadowRadius={2} textShadowColor={"black"} >{this.title}</Text>

                        </View>
                        <View style={{ position: 'absolute', top: 10, right: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableWithoutFeedback onPress={() => this.changeFavoriteData()}>
                                <AntIcon size={30} color={Colors.yelow}
                                    name={this.state.favorite ? 'heart' : 'hearto'}
                                //onPress={(event) => addToFavourites ? this.addToMyTopics(event, item.topicName) : this.removeFromMyTopics(event, item.topicName)} 
                                />
                            </TouchableWithoutFeedback>
                        </View>

                    </View>
                    {
                        <Modal visible={this.state.isVisible} transparent={true}>
                            <ImageViewer imageUrls={images3}
                                onSwipeDown={() => this.setState({ isVisible: false })}
                                menuContext={{}}
                                enableSwipeDown={true} />
                        </Modal>
                    }
                    <View style={{ padding: 20, width: '100%' }}>

                        <View style={{ paddingTop: 20 }}>
                            {/*<View>
                                <View style={styles.headline}><Text style={{ fontSize: 16 }}>{I18n.t("photos")}</Text></View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
                                        <Icon
                                            name={'photo'}
                                            size={100}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 20, marginLeft: 10}}>
                                        {I18n.t("photos") + ": " + images3.length}
                                    </Text>
                                </View>
                            </View>*/}
                            {/*<ImageView
                                glideAlways
                                images={images2}
                                //imageIndex={imageIndex}
                                animationType="fade"
                                isVisible={this.state.isVisible}
                                //renderFooter={this.renderFooter}
                                onClose={() => this.setState({ isVisible: false })}
                                onImageChange={index => {
                                    console.log(index);
                                }}
                            />*/}
                            {/*<Modal visible={this.state.isVisible} transparent={true}>
                                <ImageViewer imageUrls={images} enableSwipeDown={true}/>
                        </Modal>*/}
                            {/*<View style={[styles.textContainer, { width: '80%' }]}>
                                <Text style={{ fontSize: 16 }}>{this.state.description.type}</Text>

                            </View>*/}
                            <View style={styles.element, styles.horizontalContainer}>
                                <Text style={{ fontSize: 16, flex: 0.3 }}>{I18n.t('phone')}: </Text>
                                <Text style={[styles.standardText, { flex: 0.7 }]}>{this.state.phone}</Text>
                            </View>
                            <View style={styles.element, styles.horizontalContainer}>
                                <Text style={{ fontSize: 16, flex: 0.3 }}>{I18n.t('city')}: </Text>
                                <Text style={[styles.standardText, { flex: 0.7 }]}>{this.state.city}</Text>
                            </View>
                            <View style={styles.element, styles.horizontalContainer}>
                                <Text style={{ fontSize: 16, flex: 0.3 }}>{I18n.t('phone')}: </Text>
                                <Text style={[styles.standardText, { flex: 0.7 }]}>{this.state.phone}</Text>
                            </View>
                            <Text style={{ fontSize: 32 }}>{I18n.t('description')}</Text>
                            <Text style={{ fontSize: 16 }}>{this.state.description}</Text>
                            {/*<Button onPress={() => this.props.navigation.navigate('Map', { placeId: this.state.id, city: this.state.city })} title={I18n.t('seeOnMap')}></Button>*/}
                        </View>
                    </View>
                </ScrollView>
            </View >
        )
    }
}

const images = [{
    url: '',
    props: {
        // Or you can set source directory.
        url: '',
        source: require('../../assets/tmp/tower.jpg')
    }
}]

const images2 = [
    {
        source: {
            url: '',
            source: require('../../assets/tmp/tower.jpg')
        },
        title: 'Paris',
        width: 806,
        height: 720,
    },
];

const images3 = [{
    url: '',
    props: {
        // Or you can set source directory.
        source: require('../../assets/tmp/tower.jpg')
    }
},
{
    url: '',
    props: {
        // Or you can set source directory.
        source: require('../../assets/tmp/tower.jpg')
    }
},
]

const images4 = [
    require("../../assets/tmp/canary-social.jpg"),
    require("../../assets/tmp/canary-social.jpg")
]