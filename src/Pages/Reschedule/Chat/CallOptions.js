import { Icon } from "@iconify/react";
import "./CallOptions.css";

export default function CallOptions() {
  return (
    <>
      <div className="calloptions-icons">
        <div className="video-call-icon">
          <Icon icon="wpf:video-call" color="white" width="30" height="30" />
        </div>
        <div className="call-active-icon">
          <Icon
            icon="fluent:call-12-filled"
            color="white"
            width="35"
            height="35"
          />
        </div>
        <div className="call-end-icon">
          <Icon
            icon="fluent:call-end-16-filled"
            color="white"
            width="35"
            height="35"
          />
        </div>
        <div className="video-call-icon">
          <Icon icon="bx:dialpad-alt" color="white" width="30" height="30" />
        </div>
        <div className="call-active-icon">
          <Icon
            icon="ph:phone-call-fill"
            color="white"
            width="35"
            height="35"
          />
        </div>
        <div className="call-end-icon">
          <Icon
            icon="solar:phone-calling-rounded-bold"
            color="white"
            width="35"
            height="35"
          />
        </div>
        <div className="video-call-icon">
          <Icon
            icon="material-symbols:add"
            color="white"
            width="35"
            height="35"
          />
        </div>
        <div className="video-call-icon">
          <Icon icon="mdi:users" color="white" width="35" height="35" />
        </div>
        <div className="video-call-icon">
          <Icon
            icon="fluent:speaker-2-16-filled"
            color="white"
            width="35"
            height="35"
          />
        </div>
        <div className="video-call-icon">
          <Icon
            icon="material-symbols:mic"
            color="white"
            width="35"
            height="35"
          />
        </div>
        <div className="video-call-icon">
          <Icon icon="ic:sharp-mic-off" color="white" width="35" height="35" />
        </div>
      </div>
    </>
  );
}
