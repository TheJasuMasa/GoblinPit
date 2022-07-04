export class Event {
  //Pattern key - 0 = message string (to be read from an array),
  //1 = name of subject entity,
  //2 = name of object entity(s) to be read from an array,
  //3 = dynamic values computed and passed to the event generator function as an array
  //4 = tag indicating that it is a debug message
  static generateMessage(props) {
    let objCounter,
      dynCounter,
      msgCounter = 0;
    let returnMessage = "";
    let metaData = {};
    props.pattern.forEach((item) => {
      console.log("new Loop");
      switch (item) {
        case 4:
          console.log("4");
          returnMessage += "debug:";
          metaData.debug = true;
          props.debugData
            ? (metaData.debugData = props.debugData)
            : (props.debugData = {});
          break;
        case 3:
          console.log("3");
          returnMessage += props.dynValues[dynCounter].toString();
          dynCounter++;
          break;
        case 2:
          console.log("2");
          returnMessage += props.objEntity[objCounter].name;
          objCounter++;
          break;
        case 1:
          console.log("1");
          returnMessage += props.subjEntity.name;
          break;
        case 0:
          console.log("0");
          returnMessage += props.message[msgCounter];
          msgCounter++;
          break;
      }
    });
    const data = { message: returnMessage, meta: metaData };
    return data;
  }

  constructor(data) {
    this.message = data.message;
    this.meta = data.meta;
  }
}
