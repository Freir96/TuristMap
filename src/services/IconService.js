var icons = [];

icons['time'] = require('../assets/icons/time.png');
icons['money'] = require('../assets/icons/money.png');
icons['money_mark'] = require('../assets/icons/money_mark.png');
icons['web'] = require('../assets/icons/web.png');
icons['website'] = require('../assets/icons/website.png');
//icons['phone'] = require('../assets/icons/phone.png');
icons['phone'] = require('../assets/icons/whatsapp.png');
//icons['insta'] = require('../assets/icons/insta.png');
icons['insta'] = require('../assets/icons/instagram.png');
icons['facebook'] = require('../assets/icons/faceboook.png');
icons['yt'] = require('../assets/icons/YT.png');
icons['atractions'] = require('../assets/icons/atractions.png');
icons['fav'] = require('../assets/icons/fav.png');
icons['info'] = require('../assets/icons/info.png');
icons['map'] = require('../assets/icons/map.png');
icons['navigate'] = require('../assets/icons/navigate.png');
icons['favorite'] = require('../assets/icons/fav.png');
icons['places'] = require('../assets/icons/places.png');
icons['restaurant'] = require('../assets/icons/rest.png');
icons['weather'] = require('../assets/icons/weather.png');
icons['contact'] = require('../assets/icons/contact.png');
icons['atraction_icon'] = require('../assets/icons/atraction_icon.png');
icons['place_icon'] = require('../assets/icons/places_icon.png');
icons['restaurant_icon'] = require('../assets/icons/restaurant_icon.png');

icons['restaurant_transparent'] = require('../assets/Ikony_menu/restauracje.png');
icons['interesting'] = require('../assets/Ikony_menu/ciekawostki.png');
icons['worth'] = require('../assets/Ikony_menu/warto.png');
icons['atractions_trans'] = require('../assets/Ikony_menu/atrakcje.png');
icons['contact_icon'] = require('../assets/Ikony_menu/kontakt_ikona.png');
icons['shoping'] = require('../assets/Ikony_menu/zakupy.png');

icons['shopping_button'] = require('../assets/icons/shopping.png')

icons['contact_active'] = require('../assets/icons/contact_active.png')
icons['information_active'] = require('../assets/icons/information_active.png')
icons['contact_active'] = require('../assets/icons/contact_active.png')
icons['favorite_active'] = require('../assets/icons/favorite_active.png')
icons['atraction_active'] = require('../assets/icons/atraction_active.png')
icons['map_active'] = require('../assets/icons/map_active.png')
icons['place_active'] = require('../assets/icons/place_active.png')
icons['restaurant_active'] = require('../assets/icons/restaurant_active.png')
icons['weather_active'] = require('../assets/icons/weather_active.png')
icons['shopping_active'] = require('../assets/icons/shopping_active.png')

icons['Clouds'] = require('../assets/weather/wind_cloud.png')
icons['Rain'] = require('../assets/weather/rain.png')
icons['Clear'] = require('../assets/weather/sun_icon.png')
//icons[''] = require('../assets/weather/.png')


icons['pl'] = require('../assets/language/pl.png')
icons['fr'] = require('../assets/language/fr.png')
icons['cz'] = require('../assets/language/cz.png')
icons['gr'] = require('../assets/language/gr.png')
icons['gb'] = require('../assets/language/uk.png')
icons['sp'] = require('../assets/language/sp.png')
icons['it'] = require('../assets/language/it.png')
icons['nr'] = require('../assets/language/nr.png')

function getIcon(name) {
    return icons[name];
}

export {getIcon}