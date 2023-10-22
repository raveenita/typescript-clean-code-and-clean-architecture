// Provide a creation interface of relative objects without specifying their concrete classes. 

import View from "../../../creational/abstract-factory/View";

test('Should create a graphic interface with a light theme', function() {
    const view = new View('light');

    expect(view.label?.color).toBe('black');
    expect(view.button?.color).toBe('white');
    expect(view.button?.backgroundColor).toBe('blue');
});

test('Should create a graphic interface with a dark theme', function() {
    const view = new View('dark');

    expect(view.label.color).toBe('white');
    expect(view.button.color).toBe('white');
    expect(view.button.backgroundColor).toBe('black');
});