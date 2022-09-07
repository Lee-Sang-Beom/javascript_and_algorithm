{
    const stack = [];
    
    // push
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);
    console.log(stack);

    stack.pop();
    console.log(stack);

    // get top
    console.log(stack[stack.length-1])
}