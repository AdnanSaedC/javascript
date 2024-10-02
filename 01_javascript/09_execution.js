//how execution happens in js

/**
 * javascript execution context
 * it depends on the environment in which you
 * are working
 * like node,chrome etc
 *  
 * there are three execution context
 * 1-global
 * 2-eval
 * 3-functional
 *  
 * the code gets executed in 2 phases
 * from global execution the code gets executed
 * using this
 * 
 * 1-memory creation phase-the memory space space gets allocated
 *  var1=undefined
 *  function=defination
 *  result1=function(1,2) //backend=result=undefined
 * 
 * 2-things gets executed
 * var1=10;
 * when function gets called then it will create an executable environment plus 
 * an executable thread
 *      thus both memory(here the variable will be the argument
 *      used to call the function)
 *      and execution will be repeated
 *      for each function call
 * after the function gets executed it(the entire environment)
 *  gets deleted
 *      add(n1,n2) both n1 and n2 will be created in the environment
 *      add(1,2) will not create anything here
 * 
 * when you call a method it enters the stack and leaves
 * as soon as the function gets executed
 * 
 * 
 * 
 */