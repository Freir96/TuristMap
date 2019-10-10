import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Button,
    Text,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useSelector } from 'react-redux';

export default class TextListSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
    }

    getElements() {

    }

    updateSearch = (search) => {
        this.setState({ search });
    };

    SearchFilterFunction(clear) {
        this.setState({ search: clear })
    }

    render() {
        const { search } = this.state;
        return (
            <View style={{ flex: 1, width: '100%' }}>
                <View style={{ width: '100%', marginTop: 10 }}>
                    {/*<TextInput style={{ backgroundColor: '#E5E5E5', width: '75%', borderWidth: 1 }} />*/}
                    <SearchBar
                        ref={search => this.search = search}
                        round //To make the searchbar corner round (default square)
                        searchIcon={{ size: 24 }} //Size of the search icon
                        onChangeText={(search) => this.setState({ search })}
                        //Filter the list using the keywords inserted in searchbar
                        onClear={text => this.SearchFilterFunction('')}
                        style={{ width: 200 }}
                        placeholder="Type Here..."
                        placeholderTextColor="white"
                        containerStyle={{
                            backgroundColor: "#FBFBFB",
                            borderBottomColor: 'transparent',
                            borderTopColor: 'transparent'
                        }}
                        value={search}
                    />
                </View>
                {this.getElements()}
            </View>
        )
    }
}