const calculateStylePoints = (styleNotes) => {
    const minNote = Math.min(...styleNotes);
    const maxNote = Math.max(...styleNotes);

    let sumStyleNotes = 0;
if (Array.isArray(styleNotes) && styleNotes.length === 5) {
    for (let i = 0; i < styleNotes.length; i++) {
        sumStyleNotes += styleNotes[i];
    }
    return sumStyleNotes - (maxNote + minNote);
  }

  else {
      console.log('There should be exactly five notes & notes must be array');
  }
}
    

  module.exports = calculateStylePoints;