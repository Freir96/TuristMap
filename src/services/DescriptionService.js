var description = []

description[0] = {
    name: 'Holton',
    description: 'A hotel. 5 stars.',
    type: 'hotel',
}

description[1] = {
    name: 'KFC',
    description: 'Chicken',
    type: 'restaurant',
}

description[2] = {
    name: 'KFC',
    description: 'Chicken',
    type: 'restaurant',
}

description[3] = {
    name: 'Holton',
    description: 'A hotel. 5 stars.',
    type: 'hotel',
}

description[4] = {
    name: 'KFC',
    description: 'Chicken',
    type: 'restaurant',
}

description[5] = {
    name: 'KFC',
    description: 'Chicken',
    type: 'restaurant',
}

description[6] = {
    name: 'Holton',
    description: 'A hotel. 5 stars.',
    type: 'hotel',
}

description[7] = {
    name: 'KFC',
    description: 'Chicken',
    type: 'restaurant',
}

description[8] = {
    name: 'KFC',
    description: 'Chicken',
    type: 'restaurant',
}

export default class DescriptionService {
    static getDescriptionById(id) {
        return description[id];
    }
}