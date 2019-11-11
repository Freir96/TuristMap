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
import Colors from '../../helpers/Colors';
import I18n from '../../i18n/i18n';

import Element from './Element/Element';

export default class TextListSearch extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.multicity === undefined || !this.props.multicity) {
            this.state = {
                search: '',
                places: props.places,
                showPlaces: props.places,
            }
            this.getPlaces = this.getPlacesFromOneCity
            this.setShow = this.setShowcities
        }
        else {
            this.state = {
                search: '',
                places: props.places,//.map(place => {return place.name}),
                showPlaces: props.places,
            }
            this.getPlaces = this.getPlacesFromManyCities
            this.setShow = this.setShowPlaces
        }
        this.citylist = (this.props.multicity === undefined);
        this.navfunction = props.navfunction;
        //console.log("bip tls props", props)
        //if (this.props.type === 'city')

        //else
        //    this.setShow = this.setShowPlaces
    }

    componentDidMount() {
        this.setShow('');
    }

    getElements() {

    }

    updateSearch = (search) => {
        this.setState({ search });
        this.setShow(search);
    };

    setShowcities(substring) {
        var tmp = [];
        for (var i = 0; i < this.state.places.length; i++) {
            if (this.state.places[i].name.includes(substring)) {
                tmp.push({ name: this.state.places[i].name, key: this.state.places[i].id, id: this.state.places[i].id });
            }
        }
        this.setState({ showPlaces: tmp });
    }

    setShowPlaces(substring) {
        var tmp = [];
        for (var i = 0; i < this.state.places.length; i++) {
            if (this.state.places[i].title.includes(substring) && this.state.places[i].title !== undefined) {
                tmp.push({ name: this.state.places[i].title, 
                    key: this.state.places[i].id, 
                    id: this.state.places[i].id, 
                    params: this.state.places[i], 
                    prefix: this.state.places[i].city });
            }
        }
        this.setState({ showPlaces: tmp });
    }

    SearchFilterFunction(clear) {
        this.setState({ search: clear });
        this.setShow(search);
    }

    /**
     * shows places with the same prefix
     */
    getPlacesFromOneCity() {
        var tmp = [];
        for (var i = 0; i < this.state.showPlaces.length; i++) {
            //console.log("bip one", this.state.showPlaces[i])
            tmp.push(<Element key={this.state.showPlaces[i].key}
                type={this.props.type}
                id={this.state.showPlaces[i].id}
                prefix={this.props.prefix}
                place={this.state.showPlaces[i].name}
                params={(this.state.showPlaces[i].params === undefined) ? [] : this.state.showPlaces[i].params}
                navfunction={this.navfunction}
            />)
        }
        return tmp;
    }

    getPlacesFromManyCities() {
        var tmp = [];
        for (var i = 0; i < this.state.showPlaces.length; i++) {
            tmp.push(<Element key={this.state.showPlaces[i].prefix + this.state.showPlaces[i].name}
                type={this.props.type}
                id={this.state.showPlaces[i].id}
                prefix={this.state.showPlaces[i].prefix}
                place={this.state.showPlaces[i].name}
                params={(this.state.showPlaces[i].params === undefined) ? [] : this.state.showPlaces[i].params}
                navfunction={this.navfunction}
            />)
        }
        return tmp;
    }

    render() {
        const { search } = this.state;
        return (
            <View style={{ flex: 1, width: '100%' }}>
                <View style={{ width: '100%' }}>
                    {/*<TextInput style={{ backgroundColor: '#E5E5E5', width: '75%', borderWidth: 1 }} />*/}
                    {true &&//this.props.searchbar &&
                        <SearchBar
                            ref={search => this.search = search}
                            round //To make the searchbar corner round (default square)
                            searchIcon={{ size: 24 }} //Size of the search icon
                            onChangeText={(search) => this.updateSearch(search)}//this.setState({ search })}
                            //Filter the list using the keywords inserted in searchbar
                            onClear={text => this.SearchFilterFunction('')}
                            inputStyle={{ backgroundColor: Colors.lightgray }}
                            style={{ backgroundColor: Colors.lightgray, width: 200 }}
                            placeholder={I18n.t("search") + "..."}
                            containerStyle={{ backgroundColor: Colors.lightgray, borderWidth: 1, borderRadius: 5 }}
                            inputContainerStyle={{ backgroundColor: Colors.lightgray }}
                            placeholderTextColor={'#g5g5g5'}
                            containerStyle={{
                                backgroundColor: "#FBFBFB",
                                borderBottomColor: 'transparent',
                                borderTopColor: 'transparent'
                            }}
                            value={search}
                        />
                    }
                </View>
                <ScrollView>
                    {/*this.citylist &&
                        this.state.showPlaces.map(
                            (place) => {
                                console.log("bip ren", place)
                                if (place !== undefined)
                                    return (
                                        <Element
                                            key={this.props.prefix + place.name}
                                            type={this.props.type}
                                            prefix={this.props.prefix}
                                            place={place.name}
                                            params={[]}
                                            navfunction={this.navfunction}
                                        />
                                    )
                            }
                        )
                    }
                    {!this.citylist &&
                        this.state.showPlaces.map(
                            (place) => {
                                const city = (place.params === undefined) ? "" : place.params.city;
                                console.log("bip ren2", place)
                                if (place !== undefined)
                                    return (
                                        <Element
                                            key={city + place.name}
                                            type={this.props.type}
                                            prefix={city}
                                            place={place.name}
                                            params={(place.params === undefined) ? [] : place.params}
                                            navfunction={this.navfunction}
                                        />
                                    )
                            }
                        )
                        */}
                    {this.getPlaces()}
                    {/*this.state.places.map((place)=><Text>{place}</Text>)*/}
                </ScrollView>
            </View>
        )
    }
}