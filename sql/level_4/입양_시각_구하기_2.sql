-- MySQL
-- 
-- [SET]
-- SET @A = n <= 변수 선언 및 할당
-- 
-- SELECT WHERE과 변수를 함께 사용하면 반목문처럼 사용 가능
--
SET @HOUR = -1;
SELECT 
    (@HOUR := @HOUR +1) AS HOUR,
    (SELECT COUNT(*) FROM ANIMAL_OUTS WHERE HOUR(DATETIME) = @HOUR) AS COUNT 
    FROM ANIMAL_OUTS
    WHERE @HOUR < 23;