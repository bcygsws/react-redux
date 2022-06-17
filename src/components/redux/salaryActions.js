import { INC, DEC } from './constant.js';
// action-涨工资的动作
export const incAction = (data) => ({ type: INC, data });
// action-扣工资的动作
export const decAction = (data) => ({ type: DEC, data });
