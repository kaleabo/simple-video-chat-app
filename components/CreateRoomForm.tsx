"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { RoomFormSchema } from "@/hooks/FormValidation";

// Define the type of form data based on the RoomFormSchema
type FormData = z.infer<typeof RoomFormSchema>;

const CreateRoomForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(RoomFormSchema),
  });

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    router.push(`/${data.roomName}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input
        {...register("roomName")}
        placeholder="Enter room name"
        className={cn(
          "px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
          errors.roomName ? "focus:ring-red-400 focus:border-red-400 focus:placeholder:text-red-500" : ""
        )}
      />
      {errors.roomName && <p className="text-sm text-red-500">{errors.roomName.message}</p>}
      <button
        type="submit"
        disabled={isLoading}
        className="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
      >
        Start Meeting
      </button>
    </form>
  );
};

export default CreateRoomForm;