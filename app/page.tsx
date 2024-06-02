import CreateRoomForm from "@/components/CreateRoomForm";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-950 px-4 sm:px-6 md:px-8">
        <div className="max-w-md w-full space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
            Video Chat
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Connect with friends, family, and colleagues through our simple and
            secure video chat application.
          </p>
          <CreateRoomForm />
          <Link
            href={`/${process.env.DEFAULT_MEETING_ROOM_NAME}`}
            className="text-sm flex items-center justify-center text-blue-500 text-center"
          >
            Join our meeting room.
          </Link>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/Jitsi_Hero.jpg"
          alt="Video Chat"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
