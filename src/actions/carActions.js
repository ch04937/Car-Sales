export const addCarFeature = add => {
    return {
        type: 'ADD_FEATURE',
        payload: add
    }
}
export const carInfo = () => {
    return (
        { type: 'CAR_INFO' }
    )
}
export const addedFeatures = () => {
    return (
        { type: 'ADDED_FEATURES' }
    )
}
export const additionalFeatures = () => {
    return (
        { type: 'ADDITIONAL_FEATURES'}
    )
}
export const total = () => {
    return(
        { type: 'ADDING_TOTAL'}
    )
}