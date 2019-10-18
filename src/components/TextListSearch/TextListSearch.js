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

import Element from './Element/Element';

export default class TextListSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            places: props.places,//navigation.state.params.places,
            showPlaces: props.places,//navigation.state.params.places,
        }
        //console.log('bip4', this.state.places)
    }

    componentDidMount() {
        this.setShowPlaces('');
    }

    getElements() {

    }

    updateSearch = (search) => {
        this.setState({ search });
        this.setShowPlaces(search);
    };

    setShowPlaces(substring) {
        console.log('bip3', this.state.search)
        var tmp = [];
        for (var i = 0; i < this.state.places.length; i++) {
            //console.log('bip2', this.state.places[i]);
            if (this.state.places[i].includes(substring)) {
                tmp.push({ name: this.state.places[i], key: i });
                //console.log('bip2.4', this.state.places[i].name);
                //console.log('bip2.5', tmp[tmp.length - 1].name);
                console.log('bip3', tmp[tmp.length - 1]);
            }
        }
        //console.log('bip2', tmp[0])
        this.setState({ showPlaces: tmp });
        //console.log('bip2.1', this.state.showPlaces[0])
    }

    SearchFilterFunction(clear) {
        this.setState({ search: clear });
        this.setShowPlaces(search);
    }

    tmpReturnElement(name, key) {
        //console.log('bip5', name, key)
        return <Element place={name} key={key} />;
    }

    getPlaces() {
        /*return this.state.showPlaces.map((name, key) => (
            this.tmpReturnElement(name, key)
        ))*/
        var tmp = [];
        console.log('bip3', this.state.search);
        for(var i=0; i < this.state.showPlaces.length; i++) {
            //console.log('bip5', this.state.showPlaces[i]);
            //tmp.push(this.tmpReturnElement(this.state.showPlaces[i].name, this.state.showPlaces[i].key))
            tmp.push(<Element place={this.state.showPlaces[i].name} 
                key={this.state.showPlaces[i].key} />)
        }
        return tmp;
    }

    render() {
        const { search } = this.state;
        return (
            <View style={{ flex: 1, width: '100%' }}>
                <View style={{ width: '100%' }}>
                    {/*<TextInput style={{ backgroundColor: '#E5E5E5', width: '75%', borderWidth: 1 }} />*/}
                    <SearchBar
                        ref={search => this.search = search}
                        round //To make the searchbar corner round (default square)
                        searchIcon={{ size: 24 }} //Size of the search icon
                        onChangeText={(search) => this.updateSearch(search)}//this.setState({ search })}
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
                <ScrollView>
                    {this.getPlaces()}
                </ScrollView>
            </View>
        )
    }
}