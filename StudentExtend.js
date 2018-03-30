
import Student from './Student';

export default class StudentExtend extends Student{
    constructor(){
        super('小明','男',20)
    }
    getDescription(){
        return '哈哈:' + super.getDescription();
    }
}