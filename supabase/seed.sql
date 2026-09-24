-- LITTLE ROOTS WELLNESS OS — Mock Production Seed Records

INSERT INTO public.development_milestones (cohort_name, age_range, sensory_domain, milestone_title, evaluation_criteria, educator_ratio) VALUES
('Infant Sanctuary', '0 - 12 Months', 'motor', 'Prone Head Lift & Visual Tracking', 'Maintains 90-degree chin elevate and tracks organic bamboo mobile', '1:3'),
('Toddler Discovery', '12 - 24 Months', 'social', 'Bilingual Sensory Garden Navigation', 'Identifies 10 botanic herbs and engages cooperative building tasks', '1:4'),
('Pre-K Cognitive Academy', '3 - 5 Years', 'cognitive', 'Early STEAM Pattern Sequencing', 'Constructs harmonic geometric balance blocks and executes phonics tasks', '1:6');

INSERT INTO public.admissions_waitlist (child_name, child_age, program_id, parent_name, email, phone, start_date, special_needs_or_diet, tuition_tier, status) VALUES
('Maya & Noah Vance', '8 Months', 'infant', 'Dr. Sarah Vance', 'sarah.vance@ucla-health.org', '+1 (310) 555-0144', CURRENT_DATE + 30, 'Breastmilk storage protocol; organic avocado purees', '$2,450/mo', 'offered'),
('Kai Jenkins', '22 Months', 'toddler', 'Marcus Jenkins', 'marcus@jenkinsmedia.co', '+1 (323) 555-0182', CURRENT_DATE + 45, 'Zero dairy; almond butter intolerance', '$2,150/mo', 'interview_set'),
('Sloane Sterling', '3.5 Years', 'pre-k', 'Genevieve Sterling', 'g.sterling@sterling-holdings.com', '+1 (415) 555-0129', CURRENT_DATE + 60, 'None reported; advanced violin practice', '$1,950/mo', 'waitlisted');

INSERT INTO public.parent_consultations (parent_name, email, phone, preferred_date, preferred_time, notes, status) VALUES
('Dr. Alistair & Nia Sterling', 'director@sterling-capital.com', '+1 (310) 555-0177', CURRENT_DATE + 3, '10:00 AM', 'Campus walkthrough and meet Lead Toddler Educator', 'scheduled');
