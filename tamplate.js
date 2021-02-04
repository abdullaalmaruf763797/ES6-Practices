const firstName = 'Tamim';
const lastName = 'Ikbal';
const fullName = firstName + " " + lastName;
const fullName2 = `${firstName} ${lastName} ${10+20} is a good boy.`;
console.log(fullName2);
const multiLine = 'var declarations are globally scoped or function scoped while let and const are block scoped.\n' 
                + 'var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.\n'
                + 'They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.';
console.log(multiLine);
const multiLine2 = `var declarations are globally scoped or function scoped while let and const are block scoped. 
var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.`;
console.log(multiLine2);
