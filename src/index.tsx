import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChatbaseNoAgent } from "./screens/ChatbaseNoAgent/ChatbaseNoAgent";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ChatbaseNoAgent />
  </StrictMode>,
);
