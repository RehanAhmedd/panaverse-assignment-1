interface Guest {
        name: string;
        deceased: boolean;
}

const guests: Guest[] = [
        { name: "Muhammad", deceased: false },
        { name: "Usman", deceased: false },
        { name: "kashif", deceased: true },
];

guests.forEach((guest) => {
        let message = `Dear ${guest.name},\n`;
        if (guest.deceased) {
                message += "I know you are no longer with us, but if you were, ";
        }
        message += `I would be honored if you could join me for dinner. Your contributions to society have inspired me 
        and I would love the opportunity to discuss them with you in person.\n`;
        console.log(message);
});