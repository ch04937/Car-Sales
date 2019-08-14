export const addCarFeature = add => {
    return {
        type: 'ADD_FEATURE',
        payload: add
    }
}
export const carInfo = () => {
    return (
        { type: 'CAR_INFO'}
    )
}