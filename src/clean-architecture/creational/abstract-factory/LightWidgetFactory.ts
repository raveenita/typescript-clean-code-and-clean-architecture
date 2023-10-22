import LightButton from "./LightButton";
import LightLabel from "./LightLabel";
import WidgetFactory from "./WidgetFactory";

export default class LightWidgetFactory implements WidgetFactory {
    createButton() {
        return new LightButton();
    }
    createLabel() {
        return new LightLabel();
    }
}