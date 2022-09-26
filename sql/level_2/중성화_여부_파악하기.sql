-- MySQL
--
-- [데이터 변환하기]
--
-- CASE WHEN 조건식1 THEN 식1 WHEN 조건식2 THEN 식2 ELSE 조건에 맞지 않을시 실행하는 식 END
--
SELECT 
    ANIMAL_ID, 
    NAME, 
    CASE 
        WHEN SEX_UPON_INTAKE LIKE "Neutered%" THEN "O" 
        WHEN SEX_UPON_INTAKE LIKE "Spayed%" THEN "O"
        ELSE "X"
    END
    FROM ANIMAL_INS 
    ORDER BY ANIMAL_ID;