// --- CONFIGURACIÓN CENTRALIZADA DE SUPABASE ---
const SUPABASE_URL = "https://ixkipxfvatawhrznbsvq.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_e4XFrM422_0mOvfw5O3y2w_SUz5W-Tc";
// ----------------------------------------------

// Inicializar el cliente global de Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);