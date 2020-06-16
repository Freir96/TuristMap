import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Button,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';
import styles from './styles';
import Colors from '../../helpers/Colors';

import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import WeatherService from '../../services/WeatherService';
import colors from '../../styles/colors';
import DayBox from './DayBox';
import WeatherIcon from './WeatherIcon';
import { getIcon } from '../../services/IconService';

import OfflineNotice from '../OfflineNotice/OfflineNotice';

import I18n from '../../i18n/i18n';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.navigation.state.params.name,
            forecastData: [],
            forecast: [],
            isLoaded: true,
            date: new Date().getDate(),
            isConnected: true,
            temp: '', humidity: '', wind: '', condition: '',
            feels_like: '',
        }
        //console.log("weather", props)
    }

    async componentDidMount() {
        //const forecast = WeatherService.getForecast()
        //console.log(forecast)
        //this.setState({ forecast: forecast })//change it
        this.setState({ isLoaded: true })
        //console.log(this.props.navigation.state.params)
        let data = await WeatherService.getPlaceForecast(this.props.navigation.state.params.lat,
            this.props.navigation.state.params.long);
        //console.log("res", data.list)
        this.setState({ forecastData: data.list })
        this.getDays();
        //console.log("res", this.state.forecastData)
    }

    getDay() {
        var translationTable = [5, 6, 0, 1, 2, 3, 4]
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear();
        var lastNumOfYear = year - 2000;
        var monthTable = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
        var d = ((lastNumOfYear / 4) - lastNumOfYear % 4) + date
        d = d + monthTable[month - 1];
        if ((month === 1 || month === 2) && (year % 4 === 0))
            d--;
        d = d + 6;
        d = d + lastNumOfYear;
        return translationTable[d % 7];
    }

    getDays() {
        //var today = Date()
        var d = this.getDay()//today.getDay()
        var arr = []
        //var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
        /*for (var i = d + 1; i < 7; i++) {
            //console.log("day " + i)
            arr.push(
                {
                    day: I18n.t(days[i]),
                    temp: 22,
                    weatherState: "sunny"
                }
            )
        }
        for (var i = 0; i < d; i++) {
            //console.log("day " + i)
            arr.push({
                day: I18n.t(days[i]),
                temp: 22,
                weatherState: "sunny"
            }
            )
        }*/
        var Current = 0//new Date().getDate();
        //console.log("date", this.state.forecastData.length)
        for (var i = 0; i < this.state.forecastData.length; i++) {
            //console.log("date2", Date.parse(this.state.forecastData[i].dt_txt.split(" ")[0]))
            //console.log(Date.parse(this.state.forecastData[i].dt_txt))
            if (Date.parse(this.state.forecastData[i].dt_txt.split(" ")[0]) > Current) {
                Current = Date.parse(this.state.forecastData[i].dt_txt.split(" ")[0]);
                arr.push({
                    day: I18n.t(days[d]),
                    temp: Math.round(this.state.forecastData[i].main.temp - 273),
                    weatherState: this.state.forecastData[i].weather[0].main,
                    humidity: this.state.forecastData[i].main.humidity,
                    wind: Math.round(this.state.forecastData[i].wind.speed * 3.6),
                    feels_like: Math.round(this.state.forecastData[i].main.feels_like - 273),
                })
                d++;
                if (d > 6) {
                    d = 0;
                }
            }

        }
        //console.log(arr);
        this.setState({ forecast: arr.splice(1, this.state.forecastData.length) });
        if (arr.length > 0) {
            this.setState({
                temp: arr[0].temp, humidity: arr[0].humidity,
                wind: arr[0].wind, condition: arr[0].weatherState,
                feels_like: arr[0].feels_like,
            })
        }
    }

    render() {
        var i = 0;
        return (
            <View style={{ backgroundColor: colors.darkPrimary, flex: 1, }}>
                <OfflineNotice ref="connection" onChange={(isConnected) => this.setState({ isConnected: isConnected })} />
                {this.state.isConnected &&
                    <ScrollView style={{ backgroundColor: colors.darkPrimary, height: '100%' }}>
                        <View style={{ backgroundColor: colors.white }}>
                            <View style={{
                                backgroundColor: colors.primary,
                                borderTopEndRadius: 20, borderTopLeftRadius: 20,
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    color: colors.white, fontFamily: 'Montserrat-SemiBold',
                                    fontSize: 24, marginTop: 5,
                                }}>
                                    {this.state.name/*I18n.t("weather").toUpperCase()*/}
                                </Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: colors.primary, paddingTop: 80 }}>
                            <View style={{ flexDirection: 'row', position: 'absolute', zIndex: 100, left: 30, top: 15 }}>
                                <View style={{ marginHorizontal: 10, /*width: 60, height: 60,*/ /*backgroundColor: colors.white*/ }}>
                                    {/*<WeatherIcon size={65} iconSize={50} name="sunny" />*/}
                                    <View style={{
                                        backgroundColor: colors.primaryLight,
                                        borderRadius: 20,
                                        //width: this.props.size,
                                        //height: this.props.size,
                                        padding: 7,
                                        marginTop: 5,
                                        alignItems: 'center',
                                    }}>
                                        <Image
                                            source={getIcon(this.state.condition)}
                                            style={{ width: 55, height: 55 }}
                                        />
                                    </View>
                                    {/*<Image source={images[0]}
                                        style={{
                                            width: 60, height: 60,
                                            position: 'absolute',
                                            top: 0, right: 0, left: 0, bottom: 0,
                                        }}
                                    />*/}
                                </View>
                                <View style={{ flexDirection: 'column-reverse' }} /*day and tmep*/>
                                    <View style={{ paddingHorizontal: 10, paddingVertical: 15, 
                                        backgroundColor: colors.white, borderRadius: 4 }}>
                                        <Text style={{ color: colors.black, fontSize: 20, fontFamily: 'Dosis-Bold' }}>
                                            {this.state.temp + "°C"}
                                        </Text>
                                    </View>
                                    <View style={{}}>
                                        <Text style={{ color: colors.white, fontSize: 16, fontFamily: 'Dosis-Bold' }}>
                                            {I18n.t(days[this.getDay()]).toUpperCase()/*I18n.t()*/}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row', backgroundColor: colors.darkPrimary,
                                borderTopEndRadius: 30, borderTopLeftRadius: 30,
                            }}>
                                <View style={{ flexDirection: 'column', marginLeft: 30, marginTop: 20, /*width: '42%'*/ }} /*today*/>

                                    <View style={[styles.infoContainer, { height: boxHeight, paddingHorizontal: 4 }]}>
                                        <Text style={{
                                            color: colors.black,
                                            marginVertical: 4,
                                            fontSize: 14, textAlign: 'center',
                                            textAlignVertical: "center",
                                            fontFamily: 'Dosis-Bold'
                                        }}>
                                            {I18n.t(months[new Date().getMonth()]).toUpperCase() + ", " + this.state.date + ", " + new Date().getFullYear()}
                                        </Text>
                                    </View>
                                    <View style={[styles.infoContainer, { height: boxHeight, flexDirection: 'row' }]}>
                                        <Text style={{
                                            color: colors.grey, fontSize: 10,
                                            textAlignVertical: "center", textAlign: 'center',
                                            marginHorizontal: 5,
                                            fontFamily: 'Montserrat-SemiBold'
                                        }}>
                                            {I18n.t("humidity") + ":    " + this.state.humidity + "%   "}
                                        </Text>
                                        {/*<Text style={{ marginHorizontal: 5, fontSize: 10, color: colors.primary, textAlign: 'center', fontFamily: 'Montserrat-SemiBold' }}>
                                    {"80%"}
                                </Text>*/}
                                    </View>
                                    <View style={[styles.infoContainer, { height: boxHeight, flexDirection: 'row' }]}>
                                        <Text style={{
                                            color: colors.grey, fontSize: 10,
                                            textAlignVertical: "center", textAlign: 'center',
                                            marginHorizontal: 5,
                                            fontFamily: 'Montserrat-SemiBold'
                                        }}>
                                            {I18n.t("wind") + ":    " + this.state.wind + " km/h"}
                                        </Text>
                                    </View>
                                    <View style={[styles.infoContainer, { height: boxHeight, flexDirection: 'row' }]}>
                                        <Text style={{
                                            color: colors.grey, fontSize: 10,
                                            textAlignVertical: "center", textAlign: 'center',
                                            marginHorizontal: 5,
                                            fontFamily: 'Montserrat-SemiBold'
                                        }}>
                                            {I18n.t("feelsLike") + ":    " + this.state.feels_like + "°C"}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column', marginLeft: 30, marginTop: 20 }} /*rest of the week*/>
                                    {this.state.forecast.map(conditions => <DayBox conditions={conditions} key={i++} index={i} />)}
                                </View>
                            </View>
                        </View>
                        {/*<View style={{ marginLeft: 20, marginBottom: 20 }}>
                            <Text>
                                {I18n.t("hightides").toUpperCase() + "/"}
                            </Text>
                            <Text>
                                {I18n.t("lowtides").toUpperCase()}
                            </Text>
                        </View>
                       <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }} >
                            <View style={{ flexDirection: 'column' }} >
                                <Text style={{ color: colors.black }}>
                                    {I18n.t("hightide").toUpperCase()}
                                </Text>
                                <Text style={{ color: colors.black }}>
                                    {I18n.t("lowtide").toUpperCase()}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'column' }} >
                                <Text style={{ color: colors.black }}>
                                    {"↑"}
                                </Text>
                                <Text style={{ color: colors.black }}>
                                    {"↓"}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'column' }} >
                                <Text style={{ color: colors.black }}>
                                    {"5:40"}
                                </Text>
                                <Text style={{ color: colors.black }}>
                                    {"11:50"}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'column' }} >
                                <Text style={{ color: colors.black }}>
                                    {"1,2m"}
                                </Text>
                                <Text style={{ color: colors.black }}>
                                    {"1,2m"}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'column' }} >
                                <Text style={{ color: colors.black }}>
                                    {"18:00"}
                                </Text>
                                <Text style={{ color: colors.black }}>
                                    {"01:35"}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'column' }} >
                                <Text style={{ color: colors.black }}>
                                    {"1,1m"}
                                </Text>
                                <Text style={{ color: colors.black }}>
                                    {"1,0m"}
                                </Text>
                            </View>
                                    </View>*/}
                        <View>
                            <Image
                                style={{ width: 200, height: 100, }}
                                source={'../../assets/weather_elements/wykres.png'}
                            />
                        </View>
                    </ScrollView>
                }
                {!this.state.isConnected &&
                    <View style={{ alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <MaterialCommunityIcon name="reload" size={50} style={{ alignSelf: 'center' }} />
                            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 22 }}>
                                {I18n.t("tryAgain")}
                            </Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        )
    }

}

let data = [{
    value: 'fuerteventura',
}, {
    value: 'Costa Calma',
}];
const images = [
    require("../../assets/weather_elements/sun_cloud.png")
]

var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const months = ["january", "fabruary", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
const boxHeight = 30;