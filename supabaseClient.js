import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://adogddlqnedycbtfawro.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkb2dkZGxxbmVkeWNidGZhd3JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyNTA2NTYsImV4cCI6MjA5NTgyNjY1Nn0.3UtbM4KwfBYSQ89R6zFpc4MlsbQ9B0shv6PJKt7gvx4'

export const supabase = createClient(supabaseUrl, supabaseKey)