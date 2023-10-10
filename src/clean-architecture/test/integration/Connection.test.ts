import PgPromiseConnectionAdaptar from "../../infra/database/PgPromiseConnectionAdaptar";

test('Should create a connection with database', async () => {
    const connection = new PgPromiseConnectionAdaptar();
    const itemsData = await connection.query('select * from ccca.item', []);

    expect(itemsData.length).toHaveLength(6);

});