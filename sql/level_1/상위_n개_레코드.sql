-- MySQL
-- 
-- LIMIT n : 상위 n개 가져오기
-- LIMIT n m : 상위 n개 건너뛰고 m개 가져오기
--             (여기서 n을 offset이라 한다)
SELECT NAME FROM ANIMAL_INS ORDER BY DATETIME LIMIT 1;