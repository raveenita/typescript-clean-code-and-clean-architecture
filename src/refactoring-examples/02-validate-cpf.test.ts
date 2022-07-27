import { validateCpf } from "./02-validate-cpf-refactored";

test('Deve retornar que o CPF 111.111.111-11 é inválido', function() {
    const isCpfValid = validateCpf('111.111.111-11');
    expect(isCpfValid).toBeFalsy();
});

test('Deve retornar que o CPF 123.456.789-99 é inválido', function() {
    const isCpfValid = validateCpf('123.456.789-99');
    expect(isCpfValid).toBeFalsy();
});

test('Deve retornar que o CPF é válido', function() {
    const isCpfValid = validateCpf('935.411.347-80');
    expect(isCpfValid).toBeTruthy();
});

test('Deve retornar uma exceção, pois o CPF é vazio', function() {
    expect(() => validateCpf('')).toThrow(new Error('invalid parameter cpf'));
});

test('Deve retornar uma exceção, pois o CPF é nulo', function() {
    expect(() => validateCpf(null as any)).toThrow(new Error('invalid parameter cpf'));
});

test('Deve retornar uma exceção, pois o CPF é indefinido', function() {
    expect(() => validateCpf(undefined as any)).toThrow(new Error('invalid parameter cpf'));
});

test('Deve retornar falso, pois o CPF é inválido', function() {
    const validateCpfResult = validateCpf('192.168.16.004');
    expect(validateCpfResult).toBeFalsy();
});
