"use client";

import { ReactNode } from "react";
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {

    const params = useParams();
    return (
        <LiveblocksProvider publicApiKey={"pk_dev_XIEeZymjt6Prf4awzEz0EXwgw-ymMMgSJsyx_N-NQs7Kb7HlbiBqs0qmYySY_cgk"}>
            <RoomProvider id={params.documentId as string}>
                <ClientSideSuspense fallback={<div>Loading…</div>}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
}