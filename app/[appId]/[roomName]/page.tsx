import React from "react";
import JitsiMeet from "@/components/JitsiMeet";

// Define an interface for the VideoChat component props
interface VideoChatProps {
  params: {
    roomName: string;
  };
}

const VideoChat: React.FC<VideoChatProps> = ({ params: { roomName } }) => {
  return (
    <div>
      {/* Render the JitsiMeet component with the specified RoomName */}
      <JitsiMeet roomName={roomName} />
    </div>
  );
};

export default VideoChat;