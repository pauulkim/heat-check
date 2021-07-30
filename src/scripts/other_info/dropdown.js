import * as d3 from "d3";

// DROPDOWN
const dropdown = (type, selections) => {
  let selectEle = d3.select(`#${type}-select-container`).append("select");

  if (type === "years") {
    selections.forEach( year => {
      let option = selectEle.append("option");
      option.text(year);
      option.property("value", year.slice(0, 5) + year.slice(-2));
    })
  } else if (type === "players") {
    for (const player in selections) {
      let option = selectEle.append("option");
      option.text(player);
      option.property("value", selections[player]);
    }
  }
}

export default dropdown;