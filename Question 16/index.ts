// Define the types for the guests and the dinner invitation
type Guest = { name: string, deceased?: boolean };
type DinnerInvitation = { guest: Guest, message: string };

// Create an array of guests to invite to dinner
let guestList: Guest[] = [
  { name: "Doc Abdul Qadeer Khan" },
  { name: "Usman ", deceased: true },
  { name: "Muhammad", deceased: true }
];

// Print the name of the guest who can't make it
const guestWhoCantMakeIt = guestList[1].name; // Assuming Maya Angelou can't make it
console.log(`${guestWhoCantMakeIt} can't make it to dinner.`);

// Modify the guest list to replace the guest who can't make it
guestList.splice(1, 1, { name: "Yousaf" });

// Create a function to generate the dinner invitation for a given guest
function createInvitation(guest: Guest): DinnerInvitation {
  const message = `Dear ${guest.name},\n\nYou are cordially invited to dinner at my home at sharp 9:00 PM. It would be an honor to have you as my guest.${guest.deceased ? 
        " Please let me know if you have any dietary restrictions or preferences." 
        : ""}\n\nSincerely,\nRehan Ahmed \n`;
  return { guest, message };
}

// Generate dinner invitations for each guest in the list
const invitations: DinnerInvitation[] = guestList.map(createInvitation);

// Print out the invitations
invitations.forEach(invitation => {
  console.log(invitation.message);
});
