import { reactive } from "vue"
export let detectOnline = () => {
    let state = reactive( {
        online: navigator.onLine ? true : false 
    } )
    window.addEventListener( 'offline', () => state.online = false )
    window.addEventListener( 'online', () => state.online = true )
    return state
}