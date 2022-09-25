-- MySQL
-- 
-- A = B : A가 B와 같은 것 찾기
-- A != B : A가 B와 다른 것 찾기
-- A >, >= B : A가 B보다 큰 것, 크거나 같은 것 찾기
-- A <, <= B : A가 B보다 작은 것, 작거나 같은 것 찾기
--
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS WHERE INTAKE_CONDITION = "Sick" ORDER BY ANIMAL_ID;