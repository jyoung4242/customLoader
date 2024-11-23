import { EventEmitter } from "excalibur";
import { ActorEvents } from "excalibur/build/dist/Actor";

export interface CustomActorEventBus extends ActorEvents {
  myEvent: { myEventData: any };
  testEvent: { testEventData: any };
}

export const ActorSignals = new EventEmitter<CustomActorEventBus>();

// publisher
/*
Signals.emit("myEvent", { health: 0 }); // works, and event name shows in intellisense
*/

// subscriber
/*
Signals.on("myEvent", data => {
  console.log("myEvent", data);
});
*/
