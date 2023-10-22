import Label from "./Label";
import Button from "./Button";
import WidgetFactory from "./WidgetFactory";
import FactoryBuilder from "./FactoryBuilder";

// Open closed principle
// less knowledge between class, less acoplament
export default class View {
    label: Label;
    button: Button;

    constructor(theme: string) {
        const widgetFactory = FactoryBuilder.create(theme);
        
        this.label = widgetFactory.createLabel();
        this.button = widgetFactory.createButton();
    }
}