"use client";

import Button from "./_components/ui/Button";

export default function Error({ error }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <Button type={"secondary"}>Try again</Button>
    </main>
  );
}
