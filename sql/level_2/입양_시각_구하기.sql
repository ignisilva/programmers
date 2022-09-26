-- MySQL
--
-- [날짜 데이터에서 일부만 추출하는 함수]
-- YEAR : 년도 추출
-- MONTH : 월 추출
-- DAY : 일 추출
-- HOUR : 시 추출 
-- MINUTE : 분 추출
-- SECOND : 초 추출
-- 
SELECT 
  HOUR(DATETIME) AS HOUR, COUNT(HOUR(DATETIME)) AS COUNT 
  FROM ANIMAL_OUTS
  WHERE 9 <= HOUR(DATETIME) AND HOUR(DATETIME) < 20
  GROUP BY HOUR 
  ORDER BY HOUR;