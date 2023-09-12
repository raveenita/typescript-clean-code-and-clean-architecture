import Sinon from "sinon";
import Account from "./Account";
import CurrencyAPIFake from "./tests/CurrencyAPIFake";

let account: Account;
let currencyApi: CurrencyAPIFake;

beforeEach(() => {
    currencyApi = new CurrencyAPIFake();
    account = new Account(currencyApi);
});

test('Should create an account', () => {
    const balance = account.getBalance();
    
    expect(balance).toBe(0);
});

test('Should credit R$100,00', () => {
    account.credit(100, 'USD');
    const balance = account.getBalance();

    expect(balance).toBe(500);
})

test('Should debit R$50,00', () => {
    account.credit(100);
    account.debit(50);
    const balance = account.getBalance();

    expect(balance).toBe(50);
});

test('Should debit R$50,00 with fake', () => {
    account.credit(100, 'USD');
    const balance = account.getBalance();

    expect(balance).toBe(500);
});

test('Should debit R$50,00 with stub', () => {
    Sinon.stub(currencyApi, 'convert').returns(500);
    account.credit(100, 'USD');
    const balance = account.getBalance();

    expect(balance).toBe(500);
});

test('Should debit R$50,00 with spy', () => {
    const spy = Sinon.spy(account, 'getBalance');
    account.getBalance();

    Sinon.assert.calledOnce(spy);
});

test('Should debit R$50,00 with mock', () => {
    const mock = Sinon.mock(account);
    mock.expects('credit').once().withArgs(100, 'USD');
    mock.expects('getBalance').once().returns(500);
    
    account.credit(100, 'USD');
    const balance = account.getBalance();
    
    expect(balance).toBe(500);

    mock.verify();
})