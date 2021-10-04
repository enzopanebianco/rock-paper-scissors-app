export const ADD_CHOOSE = 'ADD_CHOOSE';
export const CALC_FIGHT = 'CALC_FIGHT';

export function addChoose(choose){
    return {type:ADD_CHOOSE,choose};
} 
export function calcFight(choose,opponent){
   
    return {type:CALC_FIGHT,choose,opponent}
}