import * as React from "react";
import { Person } from "./models/Person";
import { Animal } from "./models/Animal";
import { PersonDiv } from "./Person";
import { AnimalComponent } from './Animal';
import { MenuComponent, IMenuProps } from './Menu';
import { MenuItemComponent, IMenuItemProps } from './MenuItem';

const MyDynamicView = (props: { flag: boolean, property_one: string, property_two: string }) => {
    const { flag, property_one, property_two } = props;
    return flag ? <div>This is my dynamic view with flag: {flag}, property one: {property_one}, property two: {property_two}</div>
        :
        <div>This is my dynamic view with flag: {flag}, property two: {property_two}, property one: {property_one}</div>
}

interface HelloProps {
    name: string;
}


export class Hello extends React.Component<HelloProps, {}> {
    person: Person = new Person();
    private list: Array<any> = new Array();
    private menuItems: Array<IMenuItemProps> = new Array();
    private menuProps: IMenuProps;
    constructor(props: HelloProps){
        super(props);
        let itemOne = {
            title: "One",
            onItemClick: this.onItemOneClick
        };

        let itemTwo = {
            title: "Two",
            onItemClick: this.onItemTwoClick
        };

        this.menuItems.push(itemOne);
        this.menuItems.push(itemTwo);
        this.menuProps = {
            menuItems: this.menuItems
        };
    }

    onItemOneClick = () => {
        console.log("Item One Click");
    };

    onItemTwoClick = () => {
        console.log("Item Two Click");
    };

    render() {
        this.person.name = "John Doe";
        this.person.age = 39;
        this.person.say = "Saturday";
        let div: JSX.Element;
        div = <div className="col-md-6">
            <span>Hello, {this.props.name}</span>
        </div>;

        let animal = new Animal();
        animal.species = "Mammal";
        return <div>
            <div id="menu">
                <MenuComponent {...this.menuProps}></MenuComponent>
            </div>
            <div className="row">
                <PersonDiv {...this.person}>
                </PersonDiv>
                {div}
                <div className="row">
                    <MyDynamicView flag={false} property_one="One" property_two="Two" />
                </div>
            </div>
            <div className="row">
                <AnimalComponent {...animal}></AnimalComponent>
            </div>
        </div>;
    }
}