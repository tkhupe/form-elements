var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
const handleFormSubmit = (event) => {
    event.preventDefault();
    var input = shoppingFormEl.find('input').val();
    shoppingListEl.append('<li>' + input + '</li>');
    shoppingFormEl.find('input').val('');

    if (!input) {
        console.log('Please enter something!');
        return;
    };
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', handleFormSubmit);