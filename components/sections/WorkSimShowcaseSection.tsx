'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'
import {
  LayoutDashboard,
  FolderKanban,
  ListTodo,
  GitBranch,
  Users,
  BarChart3,
  GraduationCap,
  Play,
  type LucideIcon,
} from 'lucide-react'

type TabId =
  | 'dashboard'
  | 'projects'
  | 'tasks'
  | 'code-repo'
  | 'team'
  | 'reports'
  | 'mentors'

const SIDEBAR_ITEMS: { id: TabId; label: string; icon: LucideIcon }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'tasks', label: 'Tasks', icon: ListTodo },
  { id: 'code-repo', label: 'Code Repo', icon: GitBranch },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
  { id: 'mentors', label: 'Mentors', icon: GraduationCap },
]

type GanttRow = {
  role: string
  status: 'In Progress' | 'Done'
  bar: { start: number; span: number }
}

const GANTT_ROWS: GanttRow[] = [
  { role: 'Research & Analysis', status: 'Done', bar: { start: 0, span: 2 } },
  { role: 'Wireframing', status: 'Done', bar: { start: 2, span: 1 } },
  { role: 'UI Design', status: 'Done', bar: { start: 3, span: 2 } },
  { role: 'API Integration', status: 'In Progress', bar: { start: 2, span: 4 } },
  { role: 'Testing', status: 'In Progress', bar: { start: 4, span: 2 } },
  { role: 'Deployment', status: 'In Progress', bar: { start: 5, span: 1 } },
]

const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const TEAM_AVATARS = ['#E4572E', '#C6A75E', '#6B7280', '#9CA3AF']

type PanelMeta = { title: string; subtitle: string }

const PANEL_META: Record<TabId, PanelMeta> = {
  dashboard: { title: 'Product Redesign Sprint', subtitle: 'Sprint 3 • 14 Tasks' },
  projects: { title: 'Active Projects', subtitle: '3 sprints in progress' },
  tasks: { title: 'Task Board', subtitle: '14 open tasks • 6 assigned to you' },
  'code-repo': { title: 'Code Repository', subtitle: 'main • 28 commits this sprint' },
  team: { title: 'Team Members', subtitle: '4 collaborators online' },
  reports: { title: 'Sprint Reports', subtitle: 'Week 3 velocity & delivery' },
  mentors: { title: 'Mentor Reviews', subtitle: '2 feedback sessions scheduled' },
}

const PROJECTS = [
  { name: 'Product Redesign Sprint', progress: 68, status: 'In Progress' as const },
  { name: 'API Gateway Refactor', progress: 42, status: 'In Progress' as const },
  { name: 'Mobile App MVP', progress: 100, status: 'Done' as const },
]

const TASKS = [
  { name: 'Finalize wireframes', assignee: 'Ananya', status: 'In Progress' as const },
  { name: 'Review pull request #42', assignee: 'Rahul', status: 'In Progress' as const },
  { name: 'Write deployment checklist', assignee: 'Priya', status: 'Done' as const },
  { name: 'Update sprint documentation', assignee: 'Dev', status: 'Done' as const },
]

const COMMITS = [
  { msg: 'feat: add sprint dashboard layout', time: '2h ago' },
  { msg: 'fix: gantt bar alignment on mobile', time: '5h ago' },
  { msg: 'chore: update mentor review notes', time: '1d ago' },
]

const TEAM_MEMBERS = [
  { name: 'Ananya K.', role: 'UI/UX Lead', color: '#E4572E' },
  { name: 'Rahul M.', role: 'Backend Dev', color: '#C6A75E' },
  { name: 'Priya S.', role: 'QA Engineer', color: '#6B7280' },
  { name: 'Dev P.', role: 'Full Stack', color: '#9CA3AF' },
]

const REPORT_STATS = [
  { label: 'Tasks Completed', value: '8/14' },
  { label: 'Sprint Velocity', value: '+18%' },
  { label: 'Review Score', value: '4.8/5' },
]

const MENTORS = [
  { name: 'Sarah Chen', topic: 'Design system review', when: 'Thu, 4:00 PM' },
  { name: 'Arjun Patel', topic: 'API architecture feedback', when: 'Fri, 11:30 AM' },
]

const INNER_CONTAINER_CLASS =
  'rounded-[16px] border border-white/[0.12] bg-[#151515] shadow-[0_14px_44px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.09)] ring-1 ring-white/[0.04] sm:rounded-[18px]'

function PanelShell({
  meta,
  children,
}: {
  meta: PanelMeta
  children: ReactNode
}) {
  return (
    <div
      className={`flex h-full min-h-[280px] flex-col p-3.5 md:min-h-[320px] sm:p-4 lg:p-5 ${INNER_CONTAINER_CLASS}`}
    >
      <div className="mb-3 flex flex-col gap-3 border-b border-white/[0.07] pb-3 sm:mb-4 sm:flex-row sm:items-start sm:justify-between sm:pb-4">
        <div className="min-w-0">
          <h3 className="font-heading text-sm font-semibold text-white sm:text-base md:text-lg">
            {meta.title}
          </h3>
          <p className="mt-0.5 text-[11px] text-zinc-400 sm:text-xs md:text-sm">{meta.subtitle}</p>
        </div>
        <div className="flex shrink-0 -space-x-2 self-start sm:self-auto">
          {TEAM_AVATARS.map((color, index) => (
            <div
              key={`${color}-${index}`}
              className="h-6 w-6 rounded-full border-2 border-[#151515] sm:h-7 sm:w-7 md:h-8 md:w-8"
              style={{ backgroundColor: color, zIndex: TEAM_AVATARS.length - index }}
              aria-hidden
            />
          ))}
        </div>
      </div>
      <div className="min-w-0 flex-1 rounded-xl bg-white/[0.02] p-2 ring-1 ring-white/[0.05] sm:p-2.5">
        {children}
      </div>
    </div>
  )
}

function StatusPill({ status }: { status: 'In Progress' | 'Done' }) {
  return (
    <span
      className={`text-[10px] font-medium sm:text-xs ${
        status === 'In Progress' ? 'text-orange-500' : 'text-emerald-400'
      }`}
    >
      {status}
    </span>
  )
}

function GanttChart() {
  return (
    <div className="relative min-w-0">
      <div className="overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10">
        <div className="min-w-[480px] pr-1 sm:min-w-[520px]">
          <div className="grid grid-cols-[minmax(92px,1.15fr)_repeat(6,minmax(36px,1fr))_minmax(64px,auto)] items-center border-b border-white/[0.1] pb-2 sm:grid-cols-[minmax(108px,1.2fr)_repeat(6,minmax(44px,1fr))_minmax(72px,auto)]">
            <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-400 sm:text-[10px]">
              Roles
            </span>
            {DAYS.map((day) => (
              <span
                key={day}
                className="text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-400 sm:text-[10px]"
              >
                {day}
              </span>
            ))}
            <span className="sr-only">Status</span>
          </div>

          <div className="divide-y divide-white/[0.07]">
            {GANTT_ROWS.map((row) => (
              <div
                key={row.role}
                className="grid grid-cols-[minmax(92px,1.15fr)_repeat(6,minmax(36px,1fr))_minmax(64px,auto)] items-center py-2 sm:grid-cols-[minmax(108px,1.2fr)_repeat(6,minmax(44px,1fr))_minmax(72px,auto)] sm:py-2.5"
              >
                <span className="pr-1.5 text-[10px] leading-tight text-zinc-200 sm:pr-2 sm:text-xs">
                  {row.role}
                </span>

                <div className="relative col-span-6 grid h-4 grid-cols-6 sm:h-6">
                  {DAYS.map((day) => (
                    <div
                      key={day}
                      className="border-l border-white/[0.07] first:border-l-0"
                      aria-hidden
                    />
                  ))}
                  <div
                    className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(228,87,46,0.35)] sm:h-1.5 md:h-[7px]"
                    style={{
                      left: `calc(${(row.bar.start / 6) * 100}% + 2px)`,
                      width: `calc(${(row.bar.span / 6) * 100}% - 4px)`,
                    }}
                  />
                </div>

                <div className="text-right">
                  <StatusPill status={row.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-2 text-[10px] text-zinc-600 sm:hidden">Swipe to view timeline →</p>
    </div>
  )
}

function ProjectsView() {
  return (
    <ul className="space-y-3">
      {PROJECTS.map((project) => (
        <li
          key={project.name}
          className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
            <span className="min-w-0 text-sm text-zinc-200">{project.name}</span>
            <StatusPill status={project.status} />
          </div>
          <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className="h-full rounded-full bg-orange-500"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}

function TasksView() {
  return (
    <ul className="divide-y divide-white/[0.07]">
      {TASKS.map((task) => (
        <li key={task.name} className="flex flex-col gap-1.5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <div>
            <p className="text-sm text-zinc-200">{task.name}</p>
            <p className="text-xs text-zinc-400">{task.assignee}</p>
          </div>
          <StatusPill status={task.status} />
        </li>
      ))}
    </ul>
  )
}

function CodeRepoView() {
  return (
    <ul className="space-y-2">
      {COMMITS.map((commit) => (
        <li
          key={commit.msg}
          className="flex flex-col gap-1 rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2.5 sm:flex-row sm:items-start sm:justify-between sm:gap-3"
        >
          <span className="break-all font-mono text-[11px] text-zinc-300 sm:text-xs">{commit.msg}</span>
          <span className="shrink-0 text-[10px] text-zinc-500">{commit.time}</span>
        </li>
      ))}
    </ul>
  )
}

function TeamView() {
  return (
    <ul className="space-y-2">
      {TEAM_MEMBERS.map((member) => (
        <li
          key={member.name}
          className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2.5"
        >
          <div
            className="h-8 w-8 shrink-0 rounded-full"
            style={{ backgroundColor: member.color }}
            aria-hidden
          />
          <div>
            <p className="text-sm text-zinc-200">{member.name}</p>
            <p className="text-xs text-zinc-500">{member.role}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

function ReportsView() {
  return (
    <div className="grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-3 sm:gap-3">
      {REPORT_STATS.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-4 text-center"
        >
          <p className="font-heading text-xl font-bold text-orange-500">{stat.value}</p>
          <p className="mt-1 text-xs text-zinc-400">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

function MentorsView() {
  return (
    <ul className="space-y-3">
      {MENTORS.map((mentor) => (
        <li
          key={mentor.name}
          className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3"
        >
          <p className="text-sm font-medium text-zinc-200">{mentor.name}</p>
          <p className="mt-0.5 text-xs text-zinc-400">{mentor.topic}</p>
          <p className="mt-1 text-[11px] text-orange-500/90">{mentor.when}</p>
        </li>
      ))}
    </ul>
  )
}

function RightPanel({ activeTab }: { activeTab: TabId }) {
  const meta = PANEL_META[activeTab]

  return (
    <PanelShell meta={meta}>
      {activeTab === 'dashboard' && <GanttChart />}
      {activeTab === 'projects' && <ProjectsView />}
      {activeTab === 'tasks' && <TasksView />}
      {activeTab === 'code-repo' && <CodeRepoView />}
      {activeTab === 'team' && <TeamView />}
      {activeTab === 'reports' && <ReportsView />}
      {activeTab === 'mentors' && <MentorsView />}
    </PanelShell>
  )
}

function SidebarNav({
  activeTab,
  onSelect,
}: {
  activeTab: TabId
  onSelect: (tab: TabId) => void
}) {
  return (
    <div className={`flex h-full min-w-0 flex-col p-3 sm:p-4 lg:p-5 ${INNER_CONTAINER_CLASS}`}>
      <p className="mb-3 border-b border-white/[0.07] pb-3 font-heading text-base font-semibold text-white sm:mb-4 sm:pb-4 sm:text-lg lg:mb-5">
        WorkSim
      </p>
      <nav
        aria-label="WorkSim navigation"
        className="flex gap-1.5 overflow-x-auto rounded-xl bg-white/[0.02] p-1.5 pb-0.5 ring-1 ring-white/[0.05] [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-1.5 [&::-webkit-scrollbar]:hidden"
      >
        {SIDEBAR_ITEMS.map(({ id, label, icon: Icon }) => {
          const active = activeTab === id

          return (
            <button
              key={id}
              type="button"
              onClick={() => onSelect(id)}
              aria-current={active ? 'page' : undefined}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-left text-xs transition-colors sm:gap-2.5 sm:py-2.5 sm:text-sm lg:w-full lg:gap-3 ${
                active
                  ? 'bg-white/[0.1] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-orange-500/20'
                  : 'text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-200'
              }`}
            >
              <Icon
                className={`h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 ${active ? 'text-orange-500' : 'text-zinc-500'}`}
                strokeWidth={1.75}
              />
              <span className={`whitespace-nowrap ${active ? 'font-medium' : ''}`}>{label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default function WorkSimShowcaseSection() {
  const [activeTab, setActiveTab] = useState<TabId>('dashboard')

  return (
    <section className="relative bg-[#050505] py-10 sm:py-14 lg:py-20">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#080808] p-3.5 sm:rounded-[24px] sm:p-5 md:p-6 lg:p-8">
          <div className="flex flex-col gap-5 sm:gap-6 lg:grid lg:grid-cols-[minmax(0,340px)_minmax(0,220px)_minmax(0,1fr)] lg:items-stretch lg:gap-5 xl:gap-6">
            <div className="flex flex-col items-center text-center lg:items-start lg:justify-center lg:py-4 lg:pr-2 lg:text-left">
              <h2 className="max-w-[18ch] font-heading text-[1.65rem] font-bold uppercase leading-[1.05] tracking-tight text-white min-[420px]:text-[1.85rem] sm:text-[2.1rem] md:text-[2.35rem] lg:max-w-none lg:text-[2.5rem] xl:text-[2.65rem]">
                This isn&apos;t{' '}
                <span className="text-orange-500">theory.</span>
                <br />
                This is how you{' '} 
                <span className="text-orange-500">work.</span>
              </h2>
              <p className="mt-4 max-w-[340px] text-sm leading-relaxed text-zinc-400 sm:mt-5 sm:text-[15px] lg:max-w-[320px]">
                WorkSim drops you into real project environments used by top companies.
              </p>
            </div>

            <div className="flex min-w-0 flex-col gap-4 sm:gap-5 lg:contents">
              <SidebarNav activeTab={activeTab} onSelect={setActiveTab} />
              <div className="min-w-0 lg:min-h-0">
                <RightPanel activeTab={activeTab} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
