import Block from "../../tools/Block.ts";
import "./page-title.scss";

export default class PageTitle extends Block {
    constructor(props?) {
        super({
            ...props,
            attr: {
                class: `page-title`,
            },
        });
    }
    render() {
        return `<h1 class="page-title {{className}}">
                    {{text}}
                </h1>`;
    }
}
