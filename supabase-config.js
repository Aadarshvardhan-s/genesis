// Supabase Configuration
// Replace with your actual Supabase credentials from https://app.supabase.com

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'YOUR_SUPABASE_URL'; // e.g., https://xxxxx.supabase.co
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // Your public anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const auth = supabase.auth;
