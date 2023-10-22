import DarkButton from "./DarkButton"
import DarkLabel from "./DarkLabel";
import WidgetFactory from "./WidgetFactory";

export default class DarkWidgetFactory implements WidgetFactory {
    createButton() {
        return new DarkButton();
    }
    createLabel() {
        return new DarkLabel();
    }
}