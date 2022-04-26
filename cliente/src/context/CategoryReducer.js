

const UPDATE_CATEGORYS = 'UPDATE_CATEGORYS'


export default function CategoryReducer(state,action){
    const {payload, type} = action

    switch(type){
        case UPDATE_CATEGORYS:
            return {...state,cate: payload}

    }
}