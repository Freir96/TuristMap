import React from 'react'
import {
    View,
    Modal,
    TouchableWithoutFeedback
} from 'react-native'
import styles from './optionsStyles'
import globalStyles from '../../styles/globalStyles'

export default class OptionsMenu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }
    }

    setVisibility(visible) {
        this.setState({
            visible: visible
        })
    }

    render() {
        return (
            <View>
                <Modal
                    animationType={'fade'}
                    transparent={true}
                    visible={this.state.visible}
                    onRequestClose={() => this.setVisibility(false)}
                >
                    <TouchableWithoutFeedback
                        style={{ width: '100%', height: '100%', backgroundColor: '#aaaaaa' }}
                        onPress={() => this.setVisibility(false)}
                    >
                        <View style={{flex: 1}}>
                            <View
                                //style={[styles.optionsModal, globalStyles.container]}
                            >
                                {/*this.props.children*/}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        )
    }
}