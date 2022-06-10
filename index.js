// code your solution here
function saturdayFun(message='roller-skate'){
    return `This Saturday, I want to ${message}!`
};
// saturdayFun('bathe my dog');

function mondayWork(message='go to the office'){
    return `This Monday, I will ${message}.`
};
// mondayWork('work from home');

let wrapAdjective = function(message='*'){
    return function (text='special'){
        return `You are ${message}${text}${message}!`
    }
}

