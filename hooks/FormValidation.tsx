"use client";

import { z } from "zod";

// Define the validation schema for the room name
export const RoomFormSchema = z.object({
  roomName: z
    .string()
    .nonempty("Room name is required") // Error message if the field is empty
    .min(10, "Room name must be at least 10 characters") // Error message for minimum length
    .regex(/^[a-zA-Z1-9-_ ]+$/, {
      message:
        "Room name can only contain letters (a-z, A-Z), numbers (1-9), hyphens, and underscores",
    }), // Regular expression validation
});
