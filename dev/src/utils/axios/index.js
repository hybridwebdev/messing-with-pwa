import AsyncComputed from 'vue-async-computed'

export default {

    install(){
        
        Vue.use(AsyncComputed)
        /* 
            $post is a base wrapper. 
        */ 
        
        pockets.$post = async (...args) => {
            const { post } = await import('./base')
            return post(...args)
        }
        /* 
            $connection is a thin wrapper that uses data loader as a means
            of caching requests for the same data. 
        */ 

        pockets.$connection = async (o, purge_key = false, persist_key=false) => {

            const { connectionLoader } = await import('./connection')
            if(typeof o === 'function') {
                return o(connectionLoader)
            }
            if( purge_key !== false) {
                connectionLoader._cacheMap.clear()
                pockets.$cache[purge_key]++
            }

            let res = await connectionLoader.load(o)

            if(persist_key !== false ) {
                connectionLoader._cacheMap.static[connectionLoader._cacheMap._k(o)] = res
            }
            return res
        }
        /* 
            pockets.$cache acts as an observable field that
            can be used to trigger a re-connection. It is incremented
            when a purge cache is fired with a key. 
        */
        pockets.$cache ={ 
            state: Vue.observable({}),
            create(key) {
                if( this.hasOwnProperty(key) ) { return }
                Object.defineProperty(this, key, {
                    get(a) { 
                        return this.state[key]
                    },
                    set(v){
                        Vue.set(this.state, key, v)
                    }
                } ) 
                this[key] = 0
            },
        } 
    }
}