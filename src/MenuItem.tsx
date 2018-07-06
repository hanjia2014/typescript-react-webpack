import * as React from "react";
export interface IMenuItemProps{
    title: string;
    onItemClick: () => void;
}
export class MenuItemComponent extends React.Component<IMenuItemProps> {
    constructor(props: IMenuItemProps){
        super(props);
    }

    render() {
        return <li onClick={this.props.onItemClick}>{this.props.title}</li>;
    }
}