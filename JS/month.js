let month = prompt("Enter a month: ");
month = month[0].toUpperCase() + month.slice(1).toLowerCase();
switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    alert(`${month} has 31 days.`);
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    alert(`${month} has 30 days.`);
    break;
  case "February":
    alert(`${month} has 29 days.`);
      break;
  default:
    alert("Please enter a valid month name!");
    break;
}