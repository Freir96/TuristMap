import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Button,
    FlatList,
    TouchableOpacity,
    Text,
} from 'react-native';

import { getInfo } from "../../services/InfoService";
import InfoItem from "./InfoItem";
import colors from '../../styles/colors';

import AntIcon from 'react-native-vector-icons/AntDesign';
import I18n from '../../i18n/i18n';

export default class Informations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        let data = getInfo();
        //console.log(data.pl)
        this.setState({ data: data.pl });
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: colors.darkPrimary }}>
                <View style={{ backgroundColor: colors.primaryLight, width: '100%' }}>
                    <View style={{ backgroundColor: colors.darkPrimary, width: '100%' }}>
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
                                <Text style={{ color: colors.white, fontSize: 20, fontFamily: 'OpenSans-Bold' }}>{I18n.t("useful").toUpperCase()}</Text>
                                <Text style={{ color: colors.white, fontSize: 20, fontFamily: 'OpenSans-Bold' }}>{I18n.t("informations").toUpperCase()}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: colors.darkPrimary, borderTopRightRadius: 60, }}>
                        <View style={{ height: 20 }}></View>
                        {/*<FlatList
                        //style={{ backgroundColor: colors.white, width: '80%', alignItems: 'center' }}
                        data={this.state.data}
                        renderItem={(item) => {
                            //console.log("item", item)
                            //console.log("title", item.item)
                            return <View>
                                <InfoItem title={item.item.title} value={item.item.value.join("")} />
                            </View>
                        }}
                    />*/}

                        <View>
                            {this.state.data.map(
                                (item, index) => {
                                    return <View style={{ marginVertical: 5 }}>
                                        <InfoItem title={item.title} value={item.value.join("")} key={index} />
                                    </View>
                                })}
                        </View>

                    </View>
                </View>
            </ScrollView>
        )
    }
}