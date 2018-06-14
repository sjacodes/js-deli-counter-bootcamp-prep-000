var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var firstPerson = katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else if (katzDeliLine.length > 0) {
    var peopleStillInLine = currentLine()
    return `The line is currently: ${peopleStillInLine}.`
  }
}

//   xit('says who is in line when there are people waiting', () => {
//       expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
//     });
//   });
// })
