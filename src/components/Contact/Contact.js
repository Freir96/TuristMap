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

import colors from '../../styles/colors';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import I18n from '../../i18n/i18n';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '+44 20 7356 54862',
            web: 'https://www.fuerteventura.es/',
            instagram: 'fuerteventura',
            facebook: 'facebook/fuerteventura.es',
            youtube: 'youtube',
        }
    }
    //style={{ backgroundColor: colors.primary, height: '100%', alignContent: 'center' }}
    render() {
        return (
            /*<View style={{ backgroundColor: colors.white }}>*/
            <ScrollView>
                <View style={{ backgroundColor: colors.white }}>
                    <View style={{
                        backgroundColor: colors.darkPrimary,
                        borderTopLeftRadius: 30,
                        borderTopEndRadius: 30,
                        height: 50,
                    }}>
                        <Text style={{
                            color: colors.white, fontFamily: 'Montserrat-SemiBold',
                            textAlign: 'center', fontSize: 20, marginTop: 5,
                        }}>
                            {I18n.t('contact').toUpperCase()}
                        </Text>
                    </View>
                </View>
                <View style={[styles.container]}>
                    <View style={{ width: '90%' }}>
                        <View style={styles.inputContainer}>
                            <Image source={require('../../assets/icons/profil.png')}
                                style={{
                                    width: 20, marginLeft: 5,
                                    height: 23, marginTop: 4,
                                }}
                            />
                            <TextInput style={[styles.textContainer, { height: 35, width: 120 }]}
                                placeholderTextColor={colors.white}
                                placeholderStyle={{ fontFamily: 'OpenSans-Bold' }}
                                placeholder={I18n.t("name").toUpperCase()} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Image source={require('../../assets/icons/envelope.png')}
                                style={{
                                    width: 20, marginLeft: 5,
                                    height: 12, marginTop: 8,
                                }}
                            />
                            <TextInput style={[styles.textContainer, { height: 35, width: 120 }]}
                                placeholderTextColor={colors.white}
                                placeholderStyle={{ fontFamily: 'OpenSans-Bold' }}
                                placeholder={I18n.t("email").toUpperCase()} />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style={[styles.textContainer, { height: 120, textAlignVertical: 'top' }]}
                                placeholderTextColor={colors.white}
                                placeholderStyle={{ fontFamily: 'OpenSans-Bold' }}
                                placeholder={I18n.t("message").toUpperCase()} />
                        </View>
                        <TouchableOpacity style={{
                            marginVertical: 20,
                            height: 30,
                            borderRadius: 5, borderColor: colors.darkish2,
                            width: '50%', borderWidth: 1,
                            alignItems: 'center',
                            alignContent: 'center', flex: 1,
                            alignSelf: 'center',
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                alignSelf: 'center', marginTop: 4,
                                color: colors.white,
                                textAlignVertical: 'center',
                                fontFamily: 'Montserrat-Regular',
                            }}>
                                {I18n.t('send').toUpperCase()}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: colors.white, flexGrow: 1, width: '100%' }}>
                        <View style={[styles.triangle]} />

                        <View style={{
                            //flexDirection: 'row', justifyContent: 'space-between',
                            //alignContent: 'center', alignSelf: 'center',
                            //width: '50%'
                        }}>
                            <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 20, }}>
                                <View style={styles.iconContainer}>
                                    <FontAwesomeIcon name='whatsapp' style={[styles.iconStyle]} size={25} />
                                </View>
                                <View>
                                    <Text style={styles.mainText}>{I18n.t("phone")}</Text>
                                    <Text style={styles.subText}>{this.state.phone}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 20, }}>
                                <View style={styles.iconContainer}>
                                    <MaterialCommunityIcon name='web' style={[styles.iconStyle]} size={25} />
                                </View>
                                <View>
                                    <Text style={styles.mainText}>{I18n.t("website")}</Text>
                                    <Text style={styles.subText}>{this.state.web}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 20, }}>
                                <View style={styles.iconContainer}>
                                    <FontAwesomeIcon name='instagram' style={[styles.iconStyle]} size={25} />
                                </View>
                                <View>
                                    <Text style={styles.mainText}>{I18n.t("instagram")}</Text>
                                    <Text style={styles.subText}>{this.state.instagram}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 20, }}>
                                <View style={styles.iconContainer}>
                                    <FontAwesomeIcon name='facebook' style={[styles.iconStyle]} size={25} />
                                </View>
                                <View>
                                    <Text style={styles.mainText}>{I18n.t("facebook")}</Text>
                                    <Text style={styles.subText}>{this.state.facebook}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 20, }}>
                                <View style={styles.iconContainer}>
                                    <FontAwesomeIcon name='youtube-play' style={[styles.iconStyle]} size={25} />
                                </View>
                                <View>
                                    <Text style={styles.mainText}>{I18n.t("youtube")}</Text>
                                    <Text style={styles.subText}>{this.state.youtube}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ScrollView>
        )
    }

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}