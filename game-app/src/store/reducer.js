import * as actions from './actions';
import options from '../colors/choose';

const INITIAL_STATE = {
    choose: {
        id: '',
        title: '',
        value: '',
        img: ''
    },
    result: '',
    score: parseInt(localStorage.getItem('score'), 10) || 0
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.ADD_CHOOSE:
            const chooseObj = options.find(option => option.title === action.choose);
            return { ...state, choose: chooseObj }
        case actions.CALC_FIGHT:
            let result;
            let newScore;
            const { choose, opponent } = action;
            if (opponent&&choose) {
                if (choose === opponent) {
                    result = 'Draw'
                }
                else {
                    if (choose === 'paper') {
                        if (opponent === 'scissors') {
                            result = 'Lose'
                        }
                        else if (opponent === 'rock') {
                            result = 'Win'
                        }
                    }
                    else if (choose === 'scissors') {
                        if (opponent === 'rock') {
                            result = 'Lose'
                        }
                        else if (opponent === 'paper') {
                            result = 'Win'
                        }
                    }
                    else if (choose === 'rock') {
                        if (opponent === 'paper') {
                            result = 'Lose'
                        }
                        else if (opponent === 'scissors') {
                            result = 'Win'
                        }
                    }
                }
               
                if (result === 'Win') {
                    newScore = parseInt(localStorage.getItem('score'), 10) + 1;
                    localStorage.setItem('score', newScore.toString());
                }
                else if (result === 'Lose') {
                    newScore = parseInt(localStorage.getItem('score'), 10) - 1;
                    localStorage.setItem('score', newScore.toString());
                }
                else if (result === 'Draw') {
                    newScore = parseInt(localStorage.getItem('score'), 10);
                }
                return { ...state, result, score: newScore };
            }
        default:
            return state;
    }
}