import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { InfoIcon } from "lucide-react";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12 p-8">
      <div className="w-full">
        <div className="bg-green-100 text-sm p-3 px-5 rounded-md text-green-800 flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          Welcome! This is a protected page that you can only see as an authenticated user.
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Your Account Details</h2>
        <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto bg-gray-50">
          {JSON.stringify(data.claims, null, 2)}
        </pre>
      </div>
    </div>
  );
}
