import { Slot, Stack } from "expo-router";
import { Redirect } from "expo-router";
export default function index() {
  return Redirect({ href: "/shopScreen" });
}
