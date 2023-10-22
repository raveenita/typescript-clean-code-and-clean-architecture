import DarkWidgetFactory from "./DarkWidgetFactory";
import LightWidgetFactory from "./LightWidgetFactory";
import WidgetFactory from "./WidgetFactory";

export default class FactoryBuilder {
    static create(type: string): WidgetFactory {
        switch (type) {
            case 'light':
                return new LightWidgetFactory();
            case 'dark':
                return new DarkWidgetFactory();
            default:
                throw new Error('Invalid type');
        }
    }
}