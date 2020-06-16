var cityImages = []

cityImages[0] = [
    require("../assets/des/alessandro-melis-K9Dt6kYCk6A-unsplash.jpg"),
    require("../assets/tmp/canary2.jpg"),
    require("../assets/tmp/canary-social.jpg"),
    require("../assets/des/alessandro-melis-K9Dt6kYCk6A-unsplash.jpg"),
    require("../assets/tmp/canary-social.jpg"),
    require("../assets/des/alessandro-melis-K9Dt6kYCk6A-unsplash.jpg"),
]

var restaurantImages = []

restaurantImages[0] = [
    require("../assets/photos/restaurants/Algo_Mas/IMG_1200.jpg"),
    require("../assets/photos/restaurants/Algo_Mas/IMG_1201.jpg"),
    require("../assets/photos/restaurants/Algo_Mas/IMG_1202.jpg"),
]
restaurantImages[1] = [
    require("../assets/photos/restaurants/Mahoh/IMG_1204.jpg"),
    require("../assets/photos/restaurants/Mahoh/IMG_1205.jpg"),
    require("../assets/photos/restaurants/Mahoh/IMG_1206.jpg"),
    require("../assets/photos/restaurants/Mahoh/IMG_1207.jpg"),
]
restaurantImages[2] = [
    require("../assets/photos/restaurants/Piccola_Italia/IMG_1196.jpg"),
    require("../assets/photos/restaurants/Piccola_Italia/IMG_1197.jpg"),
    require("../assets/photos/restaurants/Piccola_Italia/IMG_1198.jpg"),
    require("../assets/photos/restaurants/Piccola_Italia/IMG_1199.jpg"),
]

var shoppingImages = []

shoppingImages[0] = [
    require("../assets/photos/shopping/IMG_1286.jpg"),
    require("../assets/photos/shopping/IMG_1287.jpg"),
    require("../assets/photos/shopping/IMG_1288.jpg"),
    require("../assets/photos/shopping/IMG_1289.jpg"),
]
shoppingImages[1] = [
    require("../assets/photos/shopping/IMG_1290.jpg"),
    require("../assets/photos/shopping/IMG_1291.jpg"),
    require("../assets/photos/shopping/IMG_1292.jpg"),
    require("../assets/photos/shopping/IMG_1294.jpg"),
]
shoppingImages[2] = [
    require("../assets/photos/shopping/IMG_1296.jpg"),
    require("../assets/photos/shopping/IMG_1297.jpg"),
    require("../assets/photos/shopping/IMG_1298.jpg"),
    require("../assets/photos/shopping/IMG_1299.jpg"),
]

export default class ImageService {
    static getCityImages(id) {
        return cityImages[0];

    }
    static getrestaurantImages(id) {
        return restaurantImages[id];

    }
    static getShoppingImages(id) {
        return restaurantImages[id];

    }
}