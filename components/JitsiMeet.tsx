"use client";

import React from "react";
import { JaaSMeeting } from "@jitsi/react-sdk";
import { useRouter } from "next/navigation";
import Loading from "./Loading";

interface JitsiMeetProps {
  roomName: string;
}

const JitsiMeet = ({ roomName }: JitsiMeetProps) => {
  const router = useRouter();
  const YOUR_APP_ID = process.env.NEXT_PUBLIC_JITSI_APP_ID || "";

  if (!YOUR_APP_ID) {
    console.error("Jitsi App ID is missing.");
    return (
      <div className="flex items-center justify-center h-screen">
        Error: Jitsi configuration is missing.
      </div>
    );
  }
  return (
    <div>
      <JaaSMeeting
        appId={YOUR_APP_ID}
        roomName={roomName}
        configOverwrite={{
          disableThirdPartyRequests: true,
          disableLocalVideoFlip: true,
          disableModeratorIndicator: true,
          backgroundAlpha: 0.5,
          startScreenSharing: true,
        }}
        interfaceConfigOverwrite={{
          VIDEO_LAYOUT_FIT: "nocrop",
          MOBILE_APP_PROMO: false,
          TILE_VIEW_MAX_COLUMNS: 4,
        }}
        spinner={Loading}
        onReadyToClose={() => router.push("/")}
        getIFrameRef={(iframeRef) => {
          // Set the height of the iframe to 100vh
          iframeRef.style.height = "100vh";
        }}
      />
    </div>
  );
};

// Export the JitsiMeet component
export default JitsiMeet;
