const createTokenUser = (user) => {
  return {
    name: user.name,
    userId: user._id,
    role: user.role,
    email: user.email,
    organizer: user.organizer,
  };
};

const createTokenParticipant = (participant) => {
  return {
    firstName: participant.firstName,
    lastName: participant.lastName,
    email: participant.email,
    participantId: participant._id,
  };
};

module.exports = { createTokenUser, createTokenParticipant };
