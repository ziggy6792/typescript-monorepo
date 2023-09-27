"use client";
import { useCallback, useState, useTransition } from "react";


export default function Client() {
  const [isPending, startTransition] = useTransition();
  const [song, setSong] = useState<SongType>();

  return (
    <div>
      client
    </div>
  );
}
