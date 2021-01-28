# Part 1

1. We will output 3 on the console, because var allows us to use the variable even though it is declared in the for loop (global variable)

2. We will output 150 on the console, because var allows us to use the variable even though it is declared in the for loop (global variable)

3. We will output 150 on the console, because a global variable allows us to change it inside a loop and still output it

4. The function will return the discounted array: [50,100,150]. For the same reason as 3, these are all global variables

5. Uncaught ReferenceError: 'i' is not defined, the variable i was declared inside the for loop so it is in a different block. 

6. Uncaught ReferenceError: 'discountedPrice' is not defined, the variable discountedPrice was declared inside the for loop so it is in a different block. 

7. We will output 150 on the console, the finalPrice variable is declared before this line and within same block 

8. The function will return the discounted array: [50,100,150]. Discounted is declared before this thus it is in the same scope and we get this array.  

9. Uncaught ReferenceError: 'i' is not defined, the variable i was declared inside the for loop so it is in a different block.  

10. Uncaught TypeError, we are trying to change the value of a constant, also will throw error because it is not in same block

11. Uncaught TypeError, we are trying to change the value of a constant, will print something to log if fixed since it is in same block

12. Nothing, there will be a bunch of errors since there are a bunch of constants that are trying to be changed

13. A. student.name
    B. student['Grad Year']
    C. student.greeting
    D. student['Favorite Teacher'].name
    E. student.courseload[0]
    
14. A. '32'
    B. 1
    c. 3
    D. '3null'
    E. 4
    F. 0
    G. '3undefined'
    H. NaN

15. A. true
    B. false
    c. true
    D. false
    E. false
    F. true
    
16. == does a conversion of both sides to the same type then compares while === doesnt do the conversion before the comparison.

17. Only "How are you?" will be printed since 2 == true will evaluate to false and these are else ifs so once one is executed thats the end.

18. In JS file 'part1-question18.js'

19. 


    
