"use client";

import React from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";
import { useRouter } from "next/navigation";

// Define JitsiMeet component
const JitsiMeet: React.FC<{ RoomName: string }> = ({ RoomName }) => {
  // JitsiMeet roomName from URL
  const roomName = RoomName || "";
  const router = useRouter();

  return (
    <JitsiMeeting
      domain={process.env.YOUR_DOMAIN}
      roomName={roomName}
      configOverwrite={{
        startWithAudioMuted: true,
        disableModeratorIndicator: true,
        startScreenSharing: true,
        enableEmailInStats: false,
      }}
      interfaceConfigOverwrite={{
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
      }}
      userInfo={{ displayName: "", email: "" }}
      onApiReady={(externalApi) => {
        // Add custom event listeners to the Jitsi Meet External API
        // Store externalApi locally to execute commands
        externalApi.addEventListeners({
          onUserLeft: () => {
            // Custom function to handle user leaving the meeting
            router.push("/");
            // Add your logic to navigate back to the home page here
          },
        });
      }}
      getIFrameRef={(iframeRef) => {
        // Set the height of the iframe to 100vh
        iframeRef.style.height = "100vh";
      }}
    />
  );
};

// Export the JitsiMeet component
export default JitsiMeet;