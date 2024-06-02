import React from "react";
import JitsiMeet from "@/components/JitsiMeet";

// Define an interface for the VideoChat component props
interface VideoChatProps {
  params: {
    RoomName: string;
  };
}

const VideoChat: React.FC<VideoChatProps> = ({ params: { RoomName } }) => {
  return (
    <div>
      {/* Render the JitsiMeet component with the specified RoomName */}
      <JitsiMeet RoomName={RoomName} />
    </div>
  );
};

export default VideoChat;
