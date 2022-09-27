-- MySQL
--
-- [날짜간 차이 구하기]
-- DATEDIFF(A, B) -> A와 B 날짜간 차이 구하기
--
SELECT INS.ANIMAL_ID, INS.NAME
  FROM ANIMAL_INS AS INS
  JOIN ANIMAL_OUTS AS OUTS
    ON INS.ANIMAL_ID = OUTS.ANIMAL_ID
  ORDER BY DATEDIFF(INS.DATETIME, OUTS.DATETIME)
  LIMIT 2;