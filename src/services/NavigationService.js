import { NavigationActions } from 'react-navigation'

let _navigator
let _permitNavigation = true

function setNavigator(navigatorRef) {
    _navigator = navigatorRef
}

function permitNavigation(permit){
    _permitNavigation = permit
}

function navigate(routeName, params) {
    if (!_permitNavigation) return
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}

function back() {
    if (!_permitNavigation) return
    _navigator.dispatch(
        NavigationActions.back()
    )
}

export default {
    navigate,
    back,
    setNavigator,
    permitNavigation
}