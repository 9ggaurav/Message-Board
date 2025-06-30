let messages = [
  {
    id: '1',
    text: "I just waved back at someone who wasn’t waving at me. Gonna lay low for a decade now.",
    user: "Amando",
    added: new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'}),
    time: new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})
  },
  {
    id: '2',
    text: "Bananas are berries. But strawberries aren’t. I feel betrayed by science.",
    user: "Charles",
    added: new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'}),
    time: new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})
  }
];



module.exports = messages;