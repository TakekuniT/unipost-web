"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function submitBug(formData: FormData) {
  const title = formData.get("title");
  const severity = formData.get("severity");
  const steps = formData.get("steps");

  const { error } = await supabase
    .from("bugs")
    .insert([{ title, severity, steps }]);

  if (error) throw new Error(error.message);

  revalidatePath("/report-bug");
  return { success: true };
}

export async function submitFeature(formData: FormData) {
  const feature_name = formData.get("feature");
  const description = formData.get("description");

  const { error } = await supabase
    .from("feature_requests")
    .insert([{ feature_name, description }]);

  if (error) throw new Error(error.message);

  revalidatePath("/request-feature");
  return { success: true };
}
