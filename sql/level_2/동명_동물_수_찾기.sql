-- MySQL
--
-- [GROUP BY]
-- DISTINCT와 비슷하게 중복을 제거하는데 사용
-- 다만, 집계함수를 사용할 때에는 GROUP BY를 사용
--
-- [HAVING]
-- GROUP BY와 함께 사용한다.
-- where 절에서는 집계함수를 사용할 수 없다.
-- 집계함수 결과값에 조건을 걸어야할 때 사용한다.
-- 
SELECT NAME, COUNT(NAME) FROM ANIMAL_INS GROUP BY(NAME) HAVING COUNT(NAME) >= 2 AND NAME IS NOT NULL ORDER BY NAME;