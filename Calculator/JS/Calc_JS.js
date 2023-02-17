const Calculator = { //Creates a "container" for the values that will be used over and over
    Display_Value: '0',
    First_Operand: null,
    Wait_Second_Operand: false,
    operator: null,
};

function Input_Digit(digit) { // sets digits 
    const {Display_Value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot) { // handles input of decimal point
    if (Calculator.Wait_Second_Operand === true) return; // checks to see if decimal button has been pressed
    if (!Calculator.Display_Value.includes(dot)) { // checks to see if there's already a decimal point
        Calculator.Display_Value += dot;
    }
}

function Handle_Operator(Next_Operator) { // does what it says, it handles operators
    const {First_Operand, Display_Value, operator} = Calculator;
    const Value_of_Input = parseFloat(Display_Value); 
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input); // this is the point where our numbers are passed off for the actual math to be perfomed
        result = Number(result).toFixed (9); // limits number of decimal places
        result = (result *1).toString(); // converts result to string
        Calculator.Display_Value = parseFloat(result); // then converts string result back to a float, and sets display value
        Calculator.First_Operand = parseFloat(result); // converts string result back to a float, and sets it as First Operand
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = { // where the math happens
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() { // resets calculator container to starting values (or lack thereof)
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() { // updates the displayed number
    const display = document.querySelector('.screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

const keys = document.querySelector('.calc-keys'); // had to change my class from just 'keys' because I was worried that might screw it up
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) { // makes sure you're clicking on a button
        return;
    }                                     
    if (target.classList.contains('operator')) { // looks for an operator button
        Handle_Operator(target.value); // I had to add the word "operator" to my equal-sign class, because otherwise, when I would press the = button, it would just display the second operator followed by an equal-sign
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) { // looks for decimal button
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) { // looks for clear button
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value); // if nothing else, defers to input digit
    Update_Display();
})