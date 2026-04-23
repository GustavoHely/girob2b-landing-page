import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '[supabase] VITE_SUPABASE_URL ou VITE_SUPABASE_ANON_KEY não definidos. Waitlist submit não vai funcionar até configurar .env.local.'
  );
}

export const supabase: SupabaseClient = createClient(
  supabaseUrl ?? 'http://placeholder.local',
  supabaseAnonKey ?? 'placeholder-anon-key'
);
