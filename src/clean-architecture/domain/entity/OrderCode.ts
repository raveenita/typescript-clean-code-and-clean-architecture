/**
 * This is a object value
 */
export default class OrderCode {
    readonly value: string;

    constructor(date: Date, sequence: number) {
        this.value = this.generateCode(date, sequence);
    }

    public generateCode(date: Date, sequence: number){
       const year = date.getFullYear();
       
       return `${year}${sequence.toString().padStart(8, '0')}`;
    }
    
}