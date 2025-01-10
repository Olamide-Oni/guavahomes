/*import { createClient } from "@supabase/supabase-js";

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
} */

  import { createServerClient, serializeCookieHeader, parseCookieHeader } from "@supabase/ssr";

  /*const supabase = createServerClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return parseCookieHeader(request.headers.get('Cookie') ?? '')
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          headers.append('Set-Cookie', serializeCookieHeader(name, value, options))
        )
      },
    },
  }); */

 
  
  export async function getLatestProperties(supabase, limit) {
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