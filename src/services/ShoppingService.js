var products = []

products[0] = [
    {
        name: 'AloeVera',
        id: 0,//28.618771, -13.937403
        description: 'Złotem Fuerteventury i najbardziej pożądanym produktem eksportowym jest Aloe Vera.  Wytwarzane z niej specyfiki uchodzą za niezwykle cenne. W naszej bogatej ofercie znajdziecie szeroką gamę produktów oraz profesjonalną obsługę w różnych językach.',
        instagram: '@fincacanariasaloevera',
        facebook: 'https://www.facebook.com/FincaCanarias/',
        web: 'https://www.fincacanarias.es/',
        open: [
            {    
                day: 'Poniedziałek-sobota',
                hour: '13:00-19:00',
            }
        ]
    },
    {
        name: 'Finca Queso',
        id: 1,//28.426254, -14.064000
        description: 'Przyjedź i sprawdź, jak smakują najlepszej kozie sery świata. Nasza bogata tradycja sięga 130 lat produkcji sera koziego, znanego jako Queso Majorero. Pozbawione chemicznych dodatków, produkowane na miejscu, wszystko zgodnie z naturą.',
        instagram: '',
        facebook: '',
        web: 'https://www.fincapepe.com/es',
        open: [
            {    
                day: 'Poniedziałek-sobota',
                hour: '10:00-19:00',
            }
        ]
    },
    {
        name: 'Fuerte Action',
        id: 2,//28.183469, -14.150416
        description: 'Odkryj kolekcję mody Fuerteventury. Ekskluzywny produkt. Stworzony na Fuerteventurze, przekazuje ducha wyspy, „poczuj się wolny”. Naturalne tkaniny tworzą poczucie wolności na skórze. Znajdź swoje ulubione marki modnych, plażowych i sportowych ubrań.',
        instagram: '@reneeglifuerteventura',
        facebook: 'https://www.facebook.com/rene.egli.fuerteventura',
        web: 'https://www.rene-egli.com/',
        open: [
            {    
                day: 'Poniedziałek-sobota',
                hour: '09:00-19:00',
            }
        ]
    },

]

function getProductsListById(id) {
    return products[0];
}

export default class ShoppingService {
    static getProductsListById(id) {
        return products[0];
    }

    static getProductById(id) {
        return (products[0])[id];
    }
}