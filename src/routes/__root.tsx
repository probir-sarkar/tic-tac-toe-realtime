import { createRootRoute, Outlet } from '@tanstack/react-router'
import { NextUIProvider } from "@nextui-org/react";
export const Route = createRootRoute({
    component: () => (
        <NextUIProvider>
            <Outlet />
        </NextUIProvider>)
})