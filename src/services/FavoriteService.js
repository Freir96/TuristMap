import { AsyncStorage } from 'react-native';

export default class FavoriteService {
    static async _retrieveData(key) {
        var value = ''
        try {
            //const value = await AsyncStorage.getItem('Fav');
            value = await AsyncStorage.getItem('Fav-' + key);
            if (value == null) {
                try {
                    //AsyncStorage.setItem('Fav', isFavorite);
                    AsyncStorage.setItem('Fav-' + key, '');
                } catch (error) {
                    console.log('bip err', error)
                }
                return "";
            }
        } catch (error) {
            console.log('bip err', error)
        }
        return value;
    }

    static async addToList(val, key) {
        var list = await this._retrieveData(key);
        console.log("bip list2", list);
        list = list + val + ";";
        console.log("bip list2", list);
        this._storeData(list, key);
    }

    static async _storeData(val, key) {
        try {
            //AsyncStorage.setItem('Fav', isFavorite);
            //this._retrieveData();
            AsyncStorage.setItem('Fav-' + key, val);
        } catch (error) {
            console.log('bip err', error)
        }
    };

    static async isOnList(val, key) {
        const list = await this._retrieveData(key);
        var totest = list.split(";");
        console.log("bip list", list,"val", val);
        for (var i = 0; i < totest.length; i++) {
            if (totest[i] === val) {
                console.log("bip val", totest[i]);
                return true;
            }

        }
        //console.log("bip val", "not");
        return false;
    }

    static async getFavoritecities() {
        const list = await this._retrieveData("city");
        const list2 = list.split(";")//.pop();
        //console.log("bip favorite", list2.pop())
        console.log("bip favorite", list2)
        return list2;
    }
}