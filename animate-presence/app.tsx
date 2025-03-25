
// @ts-nocheck
import "./styles.css";
import { Presence } from "./presence";
import { useState } from "react";

export default function PresenceExample() {

  // only use this if you don't want first mount animation AND the children of Presence is mounted by default
  const [open, setOpen] = useState<'init' | boolean>('init');

  // const [open, setOpen] = useState<boolean>(true);


  return (
    <div>
      <button onClick={() => setOpen(true)}>open</button>
      <Presence present={!!open}>
        <div
          data-state={open === 'init' ? 'init' : open ? 'open' : 'closed'}
          className="overlay"
          onClick={() => setOpen(false)}
        />
      </Presence>
    </div>
  );
}