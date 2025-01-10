import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

export async function getLatestProperties(limit = 10) {
  const { data, error } = await supabase
    .from("listings")
    .select("*")
    .order("created_at", { ascending: false }) 
    .limit(limit); // Fetch latest `limit` properties

  if (error) {
    console.error("Error fetching latest properties:", error.message);
    return [];
  }

  return data;
}
