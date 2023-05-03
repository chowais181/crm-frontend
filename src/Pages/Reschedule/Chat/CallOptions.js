import { Icon } from "@iconify/react";
import "./CallOptions.css";

export default function CallOptions() {
  return (
    <>
      <div className="calloptions-icons">
        <div className="video-call-icon">
          <Icon icon="wpf:video-call" color="black" width="40" height="40" />
        </div>
        <div className="call-active-icon">
          <Icon
            icon="material-symbols:call"
            color="white"
            width="35"
            height="35"
          />
        </div>
        <div className="call-end-icon">
          <Icon
            icon="material-symbols:call-end"
            color="white"
            width="35"
            height="35"
          />
        </div>
        <div className="video-call-icon">
          <Icon
            icon="fluent:call-forward-32-filled"
            color="#2596be"
            width="35"
            height="35"
          />
        </div>
        <div className="video-call-icon">
          <Icon
            icon="material-symbols:dialpad"
            color="black"
            width="35"
            height="35"
          />
        </div>
      </div>
    </>
  );
}
