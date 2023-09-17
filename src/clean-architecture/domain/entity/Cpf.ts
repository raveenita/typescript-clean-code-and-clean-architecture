export default class Cpf {
    value: string;

    constructor(value: string){
        if (!this.validateCpf(value)) throw new Error('Invalid CPF');

        this.value = value;
     }

         
    validateCpf(cpf: string) {
        let handledCpf: string;
    
        if (this.validateParamater(cpf)) {
            throw new Error('invalid parameter cpf');
        }
    
        if (this.isValidCpfNumber(cpf)) {
            handledCpf = this.removeFormattingCharacters(cpf);
    
            if (this.hasInitialDigit(handledCpf) === false) {
                const { firstVeryfingDigit, secondVeryfingDigit } = this.calculateVeryfingDigits(handledCpf);
                const verifyingDigits = handledCpf.substring(handledCpf.length - 2, handledCpf.length); 
                const verifiedDigits = `${firstVeryfingDigit}${secondVeryfingDigit}`;
    
                return verifyingDigits === verifiedDigits;
            }
            
            return false;
        }
        
        return false;
    }

    removeFormattingCharacters(cpf: string): string {
        return cpf.replace('.','')
        .replace('.','')
        .replace('-','')
        .replace(' ','');
    }
    
    isValidCpfNumber(cpf: string): boolean {
        const MIN_CPF_LENGT = 11;
        const MAX_CNPJ_LENGTH = 14;
    
        return cpf.length >= MIN_CPF_LENGT || cpf.length <= MAX_CNPJ_LENGTH;
    }
    
    calculateVeryfingDigits(cpf: string) {
        const FIRST_DIGIT_LENGTH = 11;
        const SECOND_DIGIT_LENGTH = 12;
    
        let digit;
        let firstDigit = 0;
        let secondDigit = 0;
    
        for (let digitCount = 1; digitCount < cpf.length -1; digitCount++) { 
            digit = parseInt(cpf.substring(digitCount -1, digitCount));  	
            firstDigit = firstDigit + (FIRST_DIGIT_LENGTH - digitCount ) * digit; 
            secondDigit = secondDigit + (SECOND_DIGIT_LENGTH - digitCount ) * digit;  
        };  
    
        const restOfDivisionFromFirstDigit = (firstDigit % FIRST_DIGIT_LENGTH);
        const firstVeryfingDigit = (firstDigit < 2) ? 0 : FIRST_DIGIT_LENGTH - restOfDivisionFromFirstDigit;
    
        secondDigit += 2 * firstVeryfingDigit;
    
        const restOfDivisionFromSecondDigit = (secondDigit % FIRST_DIGIT_LENGTH);  
        const secondVeryfingDigit = (restOfDivisionFromSecondDigit < 2) ? 0 : FIRST_DIGIT_LENGTH - restOfDivisionFromSecondDigit;
    
        return {
            firstVeryfingDigit,
            secondVeryfingDigit
        };
    }
    
    hasInitialDigit(cpf: string): boolean {
        return Array.from(cpf).every( (digit: string) => digit === cpf[0]);
    }
    
    validateParamater(cpf: string): boolean {
        return cpf === undefined || cpf === null || cpf === '' || typeof cpf !== 'string';
    }
}