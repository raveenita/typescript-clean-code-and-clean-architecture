create schema ccca;

create table ccca.item {
    id_item serial primary key,
    category text,
    description text,
    price numeric,
    width integer,
    height integer,
    length integer
    weight integer;
}

insert into cca.item (id_item, category, description, price, width, height, length, weight) values (1, 'Música', 'CD', 30, 30, 30, 10, 1);
insert into cca.item (id_item, category, description, price, width, height, length, weight) values (1, 'Vídeo', 'DVD', 50, 40, 20, 10, 1);
insert into cca.item (id_item, category, description, price, width, height, length, weight) values (1, 'Vídeo', 'VHS', 10, 40, 20, 10, 1);
insert into cca.item (id_item, category, description, price, width, height, length, weight) values (1, 'Instrumentos Musicais', 'Guitarra', 1000, 40, 20, 10, 3);
insert into cca.item (id_item, category, description, price, width, height, length, weight) values (1, 'Instrumentos Musicais', 'Amplificador', 5000, 10, 10, 10, 20);
insert into cca.item (id_item, category, description, price, width, height, length, weight) values (1, 'Acessórios', 'Cabo', 30, 10, 10, 10, 10);

create table ccca.coupon {
    code text,
    percentage numeric,
    expire_date timestamp,
    primary key (code)
}

insert into cca.coupon (code, percentage, expire_date) values ('VALE20', 20, '2024-12-31 23:59:59');
insert into cca.coupon (code, percentage, expire_date) values ('VALE20_EXPIRED', 20, '2020-12-31 23:59:59');


create table ccca.order {
    id_order serial,
    coupon text,
    code text,
    cpf text,
    issue_date timestamp,
    freight numeric,
    sequence integer,
    primary key (id),
}

create table ccca.order_item {
    id_order integer,
    id_item integer,
    price numeric,
    quantity integer,
    primary key (id_order, id_item)
}