export const pushAndUpdateReUseArrListObjValue = ({ arr, id, key, value, push, updateAt }) => {
    const userIsExist = arr.filter((item)=> item.id === id);
    const objIndex = arr.findIndex(item => item.id === id);

    if(userIsExist.length === 0){
        push({id, [key]: value})
    } else {
        updateAt(objIndex, {...userIsExist[0], [key]: value})
    }
}

export const fixValue = (value, getType) =>{
    if(getType === 'string'){
        return typeof value === "string" ? value : JSON.stringify(value)
    }
    if(getType === 'number'){
        return typeof value === "number" ? value : parseFloat(value)
    }
    return value;
}

export const fixText = (str) =>  fixValue(str.replace(/\s/g, ''), 'number');
