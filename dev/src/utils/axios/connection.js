import DataLoader from 'dataloader'
class mapper {
    constructor(){
        this.map = { }
        this.static = { }
    }
    _k(k) {
        return JSON.stringify(k)
    }
    set(k, v){
        this.map[ this._k(k) ] = v
    }
    get(k) {
        return this.map[ this._k(k) ]
    }
    clear(k = false ) {
        if(!k) this.map = {...this.static }
        delete this.map[ this._k(k) ]
        return this
    }
    delete(){}
}
export const create_instance  = () =>  {
    let inst = new DataLoader( 
        async items => {
            let res =  await pockets.$post("connection", { items } )
            return await Promise.all( items.map( (e, i) => res[i] ) ) 
        }
        , { 
            cacheMap: new mapper,
            cache: true
        } 
    ) 
    return inst
}

export const connectionLoader = create_instance()
