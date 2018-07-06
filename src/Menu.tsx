import * as React from "react";
import { MenuItemComponent, IMenuItemProps } from './MenuItem';

export interface IMenuProps {
    menuItems: Array<IMenuItemProps>;
}
export class MenuComponent extends React.Component<IMenuProps> {
    constructor(props: IMenuProps) {
        super(props);
    }

    render() {

        return <ul>
                {
                    this.props.menuItems.map(
                        (item: IMenuItemProps, index) => {
                            return <MenuItemComponent {...item} key={index}></MenuItemComponent>
                        }
                )}
        </ul>
    }
}