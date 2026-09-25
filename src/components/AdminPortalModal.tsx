import { useState, useEffect } from 'react';
import { X, ShieldCheck, Sparkles, Heart, Users, DollarSign, Award, Clock, Star, Calendar, CheckCircle2 } from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PASSKEY = 'roots2026';

const mockWaitlist = [
  { id: 'WL-401', child: 'Maya & Noah Vance', program: 'Infant Sensory Sanctuary', age: '8 Months', parent: 'Dr. Sarah Vance', status: 'offered', tuition: '$2,450/mo' },
  { id: 'WL-402', child: 'Kai Jenkins', program: 'Toddler Discovery & Motor Lab', age: '22 Months', parent: 'Marcus Jenkins', status: 'verified', tuition: '$2,150/mo' },
  { id: 'WL-403', child: 'Sloane Sterling', program: 'Pre-K Early Cognitive Academy', age: '3.5 Years', parent: 'Genevieve Sterling', status: 'waitlisted', tuition: '$1,950/mo' },
  { id: 'WL-404', child: 'Amara Chen', program: 'Toddler Discovery & Motor Lab', age: '18 Months', parent: 'David & Lisa Chen', status: 'interview_set', tuition: '$2,150/mo' },
];

const mockMilestones = [
  { cohort: 'Infant Sanctuary (0-12m)', focus: 'Sensory Tactile Exploration & Biomimetic Natural Rhythm', ratio: '1:3 Educator Ratio', capacity: '12 / 12 Enrolled' },
  { cohort: 'Toddler Discovery (1-2y)', focus: 'Gross Motor Development & Culturally Affirming Language', ratio: '1:4 Educator Ratio', capacity: '16 / 16 Enrolled' },
  { cohort: 'Pre-K Cognitive (3-5y)', focus: 'Early Literacy, STEAM & Regenerative Garden Ecology', ratio: '1:6 Educator Ratio', capacity: '20 / 20 Enrolled' },
];

const metrics = [
  { label: 'Annual Tuition Run', value: '$1,048,000', icon: DollarSign, color: 'text-emerald-400' },
  { label: 'Licensed Capacity', value: '48 / 48 (100%)', icon: Users, color: 'text-amber-400' },
  { label: 'Active Waitlist', value: '84 Families', icon: Heart, color: 'text-rose-400' },
  { label: 'State Accreditation', value: 'Tier 1 Quality Rated', icon: Award, color: 'text-yellow-400' },
];

export default function AdminPortalModal({ isOpen, onClose }: AdminPortalModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'waitlist' | 'cohorts' | 'supabase'>('overview');
  const [passkey, setPasskey] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setAuthenticated(false);
      setPasskey('');
      setAuthError('');
      setActiveTab('overview');
    }
  }, [isOpen]);

  const handleAuth = () => {
    if (passkey === PASSKEY) {
      setAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid passkey. Click the auto-fill button below.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#09090b] border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#0c0c0e]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-sm font-bold">
              🌱
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold">LITTLE ROOTS WELLNESS OS</span>
                <span className="text-xs font-semibold tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono">v1.0.0 VIP</span>
              </div>
              <p className="text-base text-zinc-200 leading-relaxed">Pediatric Developmental Clinic &amp; Early Academy Console</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        {!authenticated ? (
          <div className="p-8 flex flex-col items-center justify-center text-center space-y-6 max-w-md mx-auto my-auto">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-medium text-xl text-white">Academy Director Authentication</h3>
              <p className="text-base text-zinc-200 leading-relaxed leading-relaxed">
                Enter your administrative key to view student admissions, waitlist registries, and state licensing telemetry.
              </p>
            </div>

            <div className="w-full space-y-3">
              <input
                type="password"
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
                placeholder="Enter passkey (e.g. roots2026)"
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-mono text-center text-sm focus:outline-none focus:border-emerald-400 placeholder-zinc-600"
              />
              {authError && <p className="text-xs text-rose-400 font-mono">{authError}</p>}
              <button
                onClick={handleAuth}
                className="w-full py-2.5 rounded-xl bg-emerald-500 text-black font-semibold text-sm hover:bg-emerald-400 transition-all cursor-pointer"
              >
                Authenticate Director Gate
              </button>
              <button
                type="button"
                onClick={() => {
                  setPasskey(PASSKEY);
                  setAuthenticated(true);
                  setAuthError('');
                }}
                className="w-full py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                [ AUTO-FILL DEMO PASS: roots2026 ]
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Nav Tabs */}
            <div className="flex items-center gap-2 px-6 pt-4 border-b border-zinc-800 bg-[#0c0c0e]/50 overflow-x-auto">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 text-xs font-mono font-medium rounded-t-lg transition-colors cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-zinc-800/80 text-emerald-400 border-b-2 border-emerald-400'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Director Overview
              </button>
              <button
                onClick={() => setActiveTab('waitlist')}
                className={`px-4 py-2 text-xs font-mono font-medium rounded-t-lg transition-colors cursor-pointer ${
                  activeTab === 'waitlist'
                    ? 'bg-zinc-800/80 text-emerald-400 border-b-2 border-emerald-400'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Intake &amp; Waitlist (4)
              </button>
              <button
                onClick={() => setActiveTab('cohorts')}
                className={`px-4 py-2 text-xs font-mono font-medium rounded-t-lg transition-colors cursor-pointer ${
                  activeTab === 'cohorts'
                    ? 'bg-zinc-800/80 text-emerald-400 border-b-2 border-emerald-400'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Classroom Cohorts (3)
              </button>
              <button
                onClick={() => setActiveTab('supabase')}
                className={`px-4 py-2 text-xs font-mono font-medium rounded-t-lg transition-colors cursor-pointer ${
                  activeTab === 'supabase'
                    ? 'bg-zinc-800/80 text-emerald-400 border-b-2 border-emerald-400'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Supabase Engine
              </button>
            </div>

            {/* Tab Panels */}
            <div className="p-6 overflow-y-auto space-y-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* KPI Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {metrics.map((m, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold tracking-wider font-mono text-zinc-400 uppercase tracking-wider">{m.label}</span>
                          <m.icon className={`w-4 h-4 ${m.color}`} />
                        </div>
                        <p className="text-xl font-bold font-mono text-white">{m.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Sanctuary Live Status Card */}
                  <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-950/20 via-zinc-900 to-zinc-900 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-wider">CAMPUS STATUS: ACTIVE</span>
                      </div>
                      <p className="text-xs text-zinc-300">All 3 developmental wings fully operational. Nutritionist-crafted organic lunch service at 11:30 AM.</p>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 font-mono text-xs text-zinc-300">
                      Air Filtration: HEPA-14 Clean
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'waitlist' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">Priority Admissions Queue</h4>
                    <span className="text-xs text-emerald-400 font-mono">84 Total in Pipeline</span>
                  </div>
                  <div className="border border-zinc-800 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-zinc-900 text-zinc-400 font-mono uppercase text-xs font-semibold tracking-wider border-b border-zinc-800">
                        <tr>
                          <th className="p-3">ID</th>
                          <th className="p-3">Child Name</th>
                          <th className="p-3">Program</th>
                          <th className="p-3">Parent</th>
                          <th className="p-3">Status</th>
                          <th className="p-3 text-right">Tuition</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-800 font-mono text-zinc-300">
                        {mockWaitlist.map((w) => (
                          <tr key={w.id} className="hover:bg-zinc-900/40">
                            <td className="p-3 text-emerald-400">{w.id}</td>
                            <td className="p-3 font-semibold text-white">{w.child} ({w.age})</td>
                            <td className="p-3 text-zinc-400">{w.program}</td>
                            <td className="p-3">{w.parent}</td>
                            <td className="p-3">
                              <span className={`px-2 py-0.5 rounded text-xs font-semibold tracking-wider uppercase ${
                                w.status === 'offered' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                                w.status === 'verified' ? 'bg-blue-950 text-blue-400 border border-blue-800' :
                                'bg-zinc-800 text-zinc-400'
                              }`}>
                                {w.status}
                              </span>
                            </td>
                            <td className="p-3 text-right font-bold text-white">{w.tuition}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'cohorts' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">Classroom Cohorts</h4>
                    <span className="text-xs text-emerald-400 font-mono">100% Enrollment</span>
                  </div>
                  <div className="space-y-3">
                    {mockMilestones.map((c, i) => (
                      <div key={i} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="space-y-1">
                          <p className="font-semibold text-sm text-white">{c.cohort}</p>
                          <p className="text-xs text-emerald-400/90 font-mono">{c.focus}</p>
                          <p className="text-xs font-semibold text-zinc-400">{c.ratio}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800 text-xs font-mono font-bold">
                          {c.capacity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'supabase' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                    <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">PostgreSQL Schema &amp; RLS Policies</h4>
                    <p className="text-base text-zinc-200 leading-relaxed leading-relaxed">
                      Wired for high-security pediatric records, student admissions waitlists, and enrollment billing ledgers.
                    </p>
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-center">
                        <p className="text-xs font-semibold tracking-wider font-mono text-zinc-300">TABLE 1</p>
                        <p className="text-xs font-mono font-bold text-white">admissions_waitlist</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-center">
                        <p className="text-xs font-semibold tracking-wider font-mono text-zinc-300">TABLE 2</p>
                        <p className="text-xs font-mono font-bold text-white">development_milestones</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-center">
                        <p className="text-xs font-semibold tracking-wider font-mono text-zinc-300">TABLE 3</p>
                        <p className="text-xs font-mono font-bold text-white">parent_consultations</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
