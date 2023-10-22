import Button from "./Button";
import Label from "./Label";

export default interface WidgetFactory {
    createButton(): Button;
    createLabel(): Label;
}