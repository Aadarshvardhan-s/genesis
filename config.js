/**
 * GIC — future Supabase configuration
 * Replace placeholders when connecting auth + database.
 */
export const GIC_CONFIG = {
  supabase: {
    url: import.meta?.env?.VITE_SUPABASE_URL ?? "",
    anonKey: import.meta?.env?.VITE_SUPABASE_ANON_KEY ?? "",
  },
  auth: {
    redirectAfterLogin: "/dashboard", // future route
    rememberMeKey: "gic_remember",
  },
};
