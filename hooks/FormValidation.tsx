"use client";

import { z } from "zod";
import { customAlphabet } from "nanoid";

// Create a custom nanoid alphabet for room name suffix
const nanoid = customAlphabet(
  "23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz",
  6
);

// Define the validation schema for the room creation form
export const RoomFormSchema = z.object({
  roomName: z
    .string()
    .trim()
    .min(3, "Room name must be at least 3 characters")
    .max(20, "Room name must not exceed 20 characters")
    .regex(/^[a-zA-Z0-9-_]+$/, {
      message:
        "Room name can only contain letters, numbers, hyphens, and underscores",
    }),
});

// Function to generate the full room name
export const generateRoomName = (prefix: string) => {
  return `${prefix}-${nanoid()}`;
};
