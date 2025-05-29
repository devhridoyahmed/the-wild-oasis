import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tyhbebcmnmgzrobijuoi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5aGJlYmNtbm1nenJvYmlqdW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyODUzMjMsImV4cCI6MjA2MTg2MTMyM30.xL-vbHhsQrwatoV3oKxt90MipsGx3yqboHalA__MEoM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
