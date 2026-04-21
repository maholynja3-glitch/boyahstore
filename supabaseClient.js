import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://nyzosbohcgarpgiewgfc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55em9zYm9oY2dhcnBnaWV3Z2ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NTg4ODQsImV4cCI6MjA5MjMzNDg4NH0.fxZbbFSr-yJlAg94KUwOWsBATmQo4lOymfUN2TYgTMY'

export const supabase = createClient(supabaseUrl, supabaseKey)