-- MySQL
--
-- JOIN에 대한 이해 : https://hongong.hanbit.co.kr/sql-%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95-joininner-outer-cross-self-join/
-- 벤다이어그램을 이해하고 문제에 적용해서 벤다이어그램을 그려볼 것
-- 
SELECT INS.NAME, INS.DATETIME
  FROM ANIMAL_INS AS INS
  LEFT JOIN ANIMAL_OUTS AS OUTS 
    ON INS.ANIMAL_ID = OUTS.ANIMAL_ID
  WHERE OUTS.ANIMAL_ID IS NULL
  ORDER BY INS.DATETIME
  LIMIT 3;