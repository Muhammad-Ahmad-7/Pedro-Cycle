import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://jovfcnvzgumighinrmxn.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvdmZjbnZ6Z3VtaWdoaW5ybXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0Mjk4NDMsImV4cCI6MjA1MDAwNTg0M30.tfA0wdtY_lhNo0AMytNwbMAz50FaHSyoxXjYAKK3N7w"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})