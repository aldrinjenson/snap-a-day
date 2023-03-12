import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://iwjpuoocvrgvioojtujz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3anB1b29jdnJndmlvb2p0dWp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1OTk5NjUsImV4cCI6MTk5NDE3NTk2NX0.hdWjQBJTs1aUNqzYmJ1lOuv1B7uHZyH0fEBjkmXc0m8"
);
