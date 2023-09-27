'use client';

import { useCallback, useState, useTransition } from 'react';

export default function Client() {
  const [isPending, startTransition] = useTransition();

  return <div>client</div>;
}
