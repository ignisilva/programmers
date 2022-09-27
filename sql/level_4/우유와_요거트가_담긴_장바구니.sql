-- MySQL
--
-- 컬럼명을 잘 확인할 것
-- 
SELECT Y.CART_ID
  FROM (SELECT *
          FROM CART_PRODUCTS
          WHERE NAME = "Yogurt") AS Y
  JOIN (SELECT *
          FROM CART_PRODUCTS
          WHERE NAME = "Milk") AS M
    ON Y.CART_ID = M.CART_ID;