CREATE DATABASE zenit; 

CREATE SCHEMA zenit; 

SET search_path TO zenit;



CREATE TABLE pricelist (
    id SERIAL NOT NULL,
    nazov VARCHAR(32),
    obrazok TEXT,
    cena NUMERIC(3),
    vyhody TEXT[] DEFAULT ARRAY[]::text[],
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE ONLY pricelist
    ADD CONSTRAINT pk_pricelist PRIMARY KEY (id);


INSERT INTO pricelist (id, nazov, obrazok, cena, vyhody, created_at)
VALUES 
(1, 'Zubný implantát', 'images/price/price-2.jpg', '49', ARRAY['Moderné vybavenie', 'Profesionálny zubár', 'Najlepšia farba'], '2023-01-01 11:00:00'),
(2, 'Dentálny hygiena', 'images/price/price-3.jpg', '19', ARRAY['Moderné nástroje', 'Rajský plyn', 'Profesionálny zubár'], '2023-04-01 18:00:00'),
(3, 'Bielenie zubov', 'images/price/price-1.jpg', '35', ARRAY['Moderné zariadenie', 'Zubný hygienik', 'Krásny úsmev'], '2023-02-01 09:00:00');
