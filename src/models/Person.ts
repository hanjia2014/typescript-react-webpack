export class Person{
	name: string;
    age: number;
    say: string;
	displayName = (): string => {
		return "This is " + this.name + " with age: " + this.age;
    }

    onSayHi = (): void => {
        console.log(this.name + " say hi on " + this.say);
    }

    updateSay = (value: string): void => {
        this.say = value;
    }
}