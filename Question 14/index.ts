let guestList: string[] = ['Muhammad', 'Usman', 'Umar']

const invitation = (guest: string) => {
        console.log(`Dear ${guest},
        I hope this message finds you well. I am writing to formally extend an invitation to a dinner I am hosting in the near future. 
        I would be honored to have you as my guest, and I am sure that we could have an interesting and enlightening conversation.
        Please let me know if you are available and if you would be interested in joining me for this occasion.
        Best regards,
        Rehan Ahmed`);
}

for (const guest of guestList) {
        invitation(guest);
}
