import React, { useState } from 'react'
import {
    View,
    TextInput,
    ScrollView,
    Button,
    Dimensions,
    Image,
    FlatList,
    TouchableOpacity,
    Text,
} from 'react-native';

import AntIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import ModalDropdown from 'react-native-modal-dropdown';
import DatePicker from 'react-native-date-picker';

import colors from '../../styles/colors';
import I18n from '../../i18n/i18n';

import styles from './styles';

export default class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            hotel: '',
            date: new Date(),
            adults: 0,
            children: 0,
            additionalRemarks: '',
            roomNumber: '',
            adultPrice: 10,
            childPrice: 5,
            showError: false,
        }
    }

    checkRequired() {
        const { name, surname, email, hotel, adults, additionalRemarks } = this.state;
        var isAll = name.length > 0 && surname.length > 0 && email.length > 0 && hotel.length > 0 &&
            additionalRemarks.length > 0 && adults > 0;
        this.setState({ showError: !isAll })
    }

    send() {
        this.checkRequired();
    }

    render() {
        //const date = new Date()
        return (
            <ScrollView>
                <View style={{ backgroundColor: colors.primaryLight, width: '100%' }}>
                    <View style={{ backgroundColor: colors.white, width: '100%' }}>
                        <View style={{
                            backgroundColor: colors.primaryLight, height: 190,
                            width: '100%', borderTopLeftRadius: 40, borderTopRightRadius: 40,
                        }}>
                            <View style={{ alignItems: 'flex-end', marginTop: 20 }}>
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <AntIcon name="close" style={{ marginRight: 20, color: colors.white }} size={25} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginLeft: 20, marginTop: 40 }}>
                                <Text style={{ color: colors.white, fontSize: 32, fontFamily: 'OpenSans-Bold' }}>
                                    {I18n.t("bookNow").replace(" ", "\n").toUpperCase()}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: colors.white, borderTopRightRadius: 80, }}>
                        {/*<View style={{ height: 20 }}></View>
                    </View>
                    <View style={{ backgroundColor: colors.white }}>*/}
                        <View style={{ backgroundColor: colors.white, width: '80%', alignSelf: 'center', marginTop: 30 }}>
                            <Text style={styles.title}>{I18n.t("name").toUpperCase()}
                                {this.state.showError && this.state.name.length < 1 && <Text style={styles.errorText}>*</Text>}
                            </Text>
                            <View style={styles.textContainer}>
                                <TextInput onChangeText={(text) => this.setState({ name: text })}
                                //placeholder={I18n.t("name").toUpperCase()}
                                //placeholderTextColor={colors.darkish2}
                                />
                            </View>
                            <Text style={styles.title}>{I18n.t("surname").toUpperCase()}
                                {this.state.showError && this.state.surname.length < 1 && <Text style={styles.errorText}>*</Text>}
                            </Text>
                            <View style={styles.textContainer}>
                                <TextInput onChangeText={(text) => this.setState({ surname: text })}
                                />
                            </View>
                            <Text style={styles.title}>{I18n.t("email").toUpperCase()}
                                {this.state.showError && this.state.email.length < 1 && <Text style={styles.errorText}>*</Text>}
                            </Text>
                            <View style={styles.textContainer}>
                                <TextInput onChangeText={(text) => this.setState({ email: text })}
                                />
                            </View>
                            {/*<DatePicker
                                mode={"date"}
                                date={this.state.date}
                                onDateChange={(newDate) => this.setState({ date: newDate })}
                            />*/}
                            <Text style={styles.title}>
                                {I18n.t("hotel").toUpperCase()}
                                {this.state.showError && this.state.hotel.length < 1 && <Text style={styles.errorText}>*</Text>}
                            </Text>
                            <View style={styles.textContainer}>
                                <TextInput onChangeText={(text) => this.setState({ hotel: text })}
                                />
                            </View>
                            <Text style={styles.title}>
                                {I18n.t("roomNumber").toUpperCase()}
                                <Text style={{ fontSize: 12 }}>  ({I18n.t("optional")})</Text>
                            </Text>
                            <View style={styles.textContainer}>
                                <TextInput onChangeText={(text) => this.setState({ roomNumber: text })}
                                />
                            </View>
                            <Text style={styles.title}>
                                {I18n.t("adults").toUpperCase()}
                                {this.state.showError && this.state.adults < 1 && <Text style={styles.errorText}>*</Text>}
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => {
                                    if (this.state.adults > 0)
                                        this.setState({ adults: this.state.adults - 1 })
                                }}>
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>-</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.counter}>
                                    <Text style={styles.counterText}>{this.state.adults}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.setState({ adults: this.state.adults + 1 })} >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>+</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {/*<ModalDropdown options={['option 1', 'option 2']}>
                                <View>
                                    <Text>{this.state.hotel}</Text>
                                </View>
                            </ModalDropdown>*/}
                            <Text style={styles.title}>{I18n.t("children").toUpperCase()}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => {
                                    if (this.state.children > 0)
                                        this.setState({ children: this.state.children - 1 })
                                }}>
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>-</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.counter}>
                                    <Text style={styles.counterText}>{this.state.children}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.setState({ children: this.state.children + 1 })} >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>+</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.title}>{I18n.t("additionalRemarks").toUpperCase()}</Text>
                            <View style={[styles.textContainer, { height: 120 }]}>
                                <TextInput onChangeText={(text) => this.setState({ additionalRemarks: text })}
                                    //placeholder={I18n.t("surname").toUpperCase()}
                                    //placeholderTextColor={colors.darkish2}
                                    multiline={true}
                                />
                            </View>

                            <Text style={styles.title}>{I18n.t("totalCost").toUpperCase()}</Text>
                            <Text style={styles.text}>
                                {this.state.adultPrice * this.state.adults + this.state.childPrice * this.state.children} €
                            </Text>
                            {this.state.showError &&
                                <View>
                                    <Text style={styles.errorText}>{I18n.t("fillInAllRequired")}*</Text>
                                </View>
                            }

                            <TouchableOpacity style={{ alignSelf: 'center', marginVertical: 15 }}
                                onPress={() => this.send()}
                            >
                                <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
                                    <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 13, textAlign: 'center', color: colors.white }}>
                                        {I18n.t("send").toUpperCase()}
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }

}