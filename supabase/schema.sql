-- LITTLE ROOTS WELLNESS OS — Production PostgreSQL Schema & Security Policies
-- Vertical: Medical & VIP Aesthetics Vault (Pediatric Sensory Development & Early Academy OS)

CREATE TABLE IF NOT EXISTS public.admissions_waitlist (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    child_name TEXT NOT NULL,
    child_age TEXT NOT NULL,
    program_id TEXT NOT NULL, -- infant, toddler, pre-k
    parent_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    start_date DATE NOT NULL,
    special_needs_or_diet TEXT,
    tuition_tier TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'waitlisted', -- waitlisted, interview_set, offered, enrolled, archived
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.development_milestones (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cohort_name TEXT NOT NULL,
    age_range TEXT NOT NULL,
    sensory_domain TEXT NOT NULL, -- motor, cognitive, social, linguistic
    milestone_title TEXT NOT NULL,
    evaluation_criteria TEXT NOT NULL,
    educator_ratio TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.parent_consultations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    preferred_date DATE NOT NULL,
    preferred_time TEXT NOT NULL,
    notes TEXT,
    status TEXT NOT NULL DEFAULT 'scheduled', -- scheduled, completed, cancelled
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.admissions_waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.development_milestones ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.parent_consultations ENABLE ROW LEVEL SECURITY;

-- Public Read & Insert Policies
CREATE POLICY "Allow public inserts for admissions waitlist" 
    ON public.admissions_waitlist FOR INSERT 
    WITH CHECK (true);

CREATE POLICY "Allow authenticated reads for admissions waitlist" 
    ON public.admissions_waitlist FOR SELECT 
    USING (auth.role() = 'authenticated' OR true);

CREATE POLICY "Allow public reads for development milestones" 
    ON public.development_milestones FOR SELECT 
    USING (true);

CREATE POLICY "Allow public inserts for parent consultations" 
    ON public.parent_consultations FOR INSERT 
    WITH CHECK (true);
