import Feature from '../data/feature.json'

export function getAllFeature(){
    return Feature
}

export function getFeatureById(id){
    return Feature.find((e) => e.id === id);
}