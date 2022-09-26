-- MySQL
--
-- [NULL 처리함수]
--
-- SELECT IFNULL(컬럼명, "대체 값") : 컬럼명이 null이라면 "대체 값" 명시
--
SELECT ANIMAL_TYPE, IFNULL(NAME, "No name"), SEX_UPON_INTAKE FROM ANIMAL_INS ORDER BY ANIMAL_ID;