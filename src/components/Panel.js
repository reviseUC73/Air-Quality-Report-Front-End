import React from "react";
import "./Panal.css";
import "./Nav_type.css";
export default function Panel(props) {
  const chose_img = (status) => {
    console.log(status);
    if (status === "Very Hot") {
      return "https://media.discordapp.net/attachments/1067738870503972864/1073875315144790056/very_hot.png";
    } else if (status === "Hot") {
      return "https://cdn.discordapp.com/attachments/1067738870503972864/1073875314251403264/hot.png";
    } else if (status === "Normal") {
      return "https://cdn.discordapp.com/attachments/1067738870503972864/1073875314536611870/normal.png";
    } else if (status === "Cool") {
      return "https://cdn.discordapp.com/attachments/1067738870503972864/1073875313953615913/cool.png";
    } else if (status === "Moderately Cold") {
      return "https://cdn.discordapp.com/attachments/1067738870503972864/1073875313680973854/cold.png";
    } else if (status === "Cold") {
      return "https://cdn.discordapp.com/attachments/1067738870503972864/1073875314855391293/very_cold.png";
    } else if (status === "Too Dry") {
      return "https://cdn.discordapp.com/attachments/1067738870503972864/1073878001676206180/humidity_dry.png";
    } else if (status === "Optimal") {
      return "https://cdn.discordapp.com/attachments/1067738870503972864/1073878001973993482/humidity_optimal.png";
    } else if (status === "Too Humid") {
      return "https://cdn.discordapp.com/attachments/1067738870503972864/1073878001340665886/humidity_too_humid.png";
    } else if (status === "Very Good") {
      return "https://media.discordapp.net/attachments/1067738870503972864/1073880023934697543/verygood.png";
    } else if (status === "Good") {
      return "https://cdn.discordapp.com/attachments/1067738870503972864/1073880023737577522/good.png";
    } else if (status === "CO_Normal") {
      return "https://cdn.discordapp.com/attachments/1067738870503972864/1073880024639340614/normal.png";
    } else if (status === "Health affected") {
      return "https://cdn.discordapp.com/attachments/1067738870503972864/1073880024375111773/Health_affected.png";
    } else if (status === "Dangerous") {
      return "https://cdn.discordapp.com/attachments/1067738870503972864/1073880024144416838/Dangerous.png";
    }
    return "https://cdn3d.iconscout.com/3d/premium/thumb/raining-at-night-3321909-2775272.png";
  };
  function change_unit(unit) {
    if (unit === "temperature") {
      return "°C";
    } else if (unit === "CO") {
      return "Unit";
    }
    return "%RH";
  }
  const weather = props.weather || "Status";
  const number = props.number || "--";
  const typeofair = props.TypeOfAir || "Temperature";
  const img_air_url = props.img_air_url || chose_img(props.img_air_url);
  let unit = change_unit(props.TypeOfAir);
  return (
    <div className="container">
      {/* <div className="p_title">Weather</div> */}
      <div className="img_frame">
        <img
          className="icon_po"
          src={chose_img(props.img_air_url)}
          alt="1"
          border="0"
        />
      </div>
      <div className="name_po">{weather}</div>
      <div className="number">{number + " " + unit}</div>
      <div id="type_measure"> {typeofair} </div>
    </div>
  );
}
