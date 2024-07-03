import Block from "../../tools/Block.ts";
import "./input.scss";

export default class Input extends Block {
    constructor(props?) {
        super({
            ...props,
            events: {
                blur: () => this.blurInput(),
                input: (e) => {
                    this.enterText(e.target.value);
                },
            },
        });
    }
    blurInput() {
        if (this.props.onBlur) {
            this.props.onBlur();
        }
    }
    enterText(e) {
        if (this.props.onInput) {
            this.props.onInput(e);
        }
    }
    render() {
        return `<input
                    name="{{name}}"
                    class="input {{#if typeProfile}}input_type-profile{{/if}}"
                    type="text"
                    id="{{id}}"
                    placeholder="{{placeholder}}"
                    value="{{value}}"
                />`;
    }
}
