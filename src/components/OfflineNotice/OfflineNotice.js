
import React, { PureComponent } from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet } from 'react-native';

import I18n from '../../i18n/i18n';

const { width } = Dimensions.get('window');

function MiniOfflineSign() {
    return (
        <View style={styles.offlineContainer}>
            <Text style={styles.offlineText}>{I18n.t("noInternet")}</Text>
        </View>
    );
}

class OfflineNotice extends PureComponent {
    state = {
        isConnected: true,
    };

    async componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
        let val = await NetInfo.isConnected.fetch();
        console.log(val)
        this.setState({ isConnected: val });
        this.props.onChange(val);
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    }

    handleConnectivityChange = isConnected => {
        this.setState({ isConnected });
        this.props.onChange(isConnected);
    };

    getConnectionState() {
        return this.state.isConnected;
    }

    render() {
        if (!this.state.isConnected) {
            return <MiniOfflineSign />;
        }
        return null;
    }
}

const styles = StyleSheet.create({
    offlineContainer: {
        backgroundColor: '#b52424',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width,
        position: 'absolute',
        top: 30
    },
    offlineText: { color: '#fff' }
});

export default OfflineNotice;