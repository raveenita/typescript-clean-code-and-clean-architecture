import Connection from "./Connection";
import pgp from 'pg-promise';

export default class PgPromiseConnectionAdaptar implements Connection {
    pgp: any;
    
    constructor() {
        this.pgp = pgp()('postgres://postgres:postgres@localhost:5432/clean-architecture');
    }
    query(statement: string, params: any[]): Promise<any> {
        return this.pgp.query(statement, params);
    }
}