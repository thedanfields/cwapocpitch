import { setupServer } from "msw/node";
import { handlers } from "@/services/__tests__/mocks/handlers/TestDataHandlers";
// This configures a Service Worker with the given request handlers.
export const server = setupServer(...handlers);
