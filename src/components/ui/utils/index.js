/**
 *
 *mac
 *2021/4/27
 *495301515@qq.com
 */
const _ = require('lodash/function');

export const Throttle = (fun,wait = 500) =>{
    _.throttle(fun,wait,{ 'trailing': false })
};



