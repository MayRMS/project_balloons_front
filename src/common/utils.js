
export const inputHandler = (e, cb) =>  cb((prevState)=>({...prevState, [e.target.name] : e.target.value }));
export const delay = (cb, args, time) => setTimeout(()=>{
    cb(...args)
}, time);
export const getOppositeType = (userTypes, type) => userTypes[Object.keys(userTypes).find(e => e != type)];
export const makeObjForDinamicList = (obj, labels) => {
    const formatedObj = {}
    for (const key of Object.keys(obj || [])) {
        if(labels[key]) formatedObj[key] = {label: labels[key], value: obj[key]}
    }
    return formatedObj
}