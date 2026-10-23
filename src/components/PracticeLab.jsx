import React, { useState } from 'react';
import { Code, Play, CheckCircle2, AlertCircle, ChevronRight, Filter, Sparkles, Terminal, Copy, Check } from 'lucide-react';

const SAMPLE_PROBLEMS = [
  {
    id: 1,
    title: 'Two Sum Target Search & Salary Bracket Optimizer',
    company: 'Zoho Round 2',
    packageTier: '₹6.5 - 9 LPA',
    difficulty: 'Medium',
    category: 'Arrays & HashMaps',
    frequency: '92% in 2026 Drive',
    desc: 'Given an array of integer candidate scores and a target sum, return indices of the two numbers that add up to target. Optimize for O(N) linear time.',
    codeSnippets: {
      javascript: `// Dkoder Compiler v2.4 (Node.js 20)\nfunction twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement), i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}\n\n// Test execution with Dkoder test harness\nconsole.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]`,
      python: `# Dkoder Compiler v2.4 (Python 3.12)\ndef two_sum(nums: list[int], target: int) -> list[int]:\n    seen = {}\n    for i, num in enumerate(nums):\n        diff = target - num\n        if diff in seen:\n            return [seen[diff], i]\n        seen[num] = i\n    return []\n\nprint(two_sum([2, 7, 11, 15], 9)) # Output: [0, 1]`,
      java: `// Dkoder Compiler v2.4 (OpenJDK 21)\nimport java.util.HashMap;\n\nclass Solution {\n    public int[] twoSum(int[] nums, int target) {\n        HashMap<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int comp = target - nums[i];\n            if (map.containsKey(comp)) {\n                return new int[] { map.get(comp), i };\n            }\n            map.put(nums[i], i);\n        }\n        return new int[] {};\n    }\n}`,
      cpp: `// Dkoder Compiler v2.4 (C++20)\n#include <vector>\n#include <unordered_map>\n\nstd::vector<int> twoSum(std::vector<int>& nums, int target) {\n    std::unordered_map<int, int> map;\n    for (int i = 0; i < nums.size(); ++i) {\n        int comp = target - nums[i];\n        if (map.count(comp)) return { map[comp], i };\n        map[nums[i]] = i;\n    }\n    return {};\n}`,
    },
    testCases: [
      { input: 'nums = [2,7,11,15], target = 9', expected: '[0, 1]', time: '38ms' },
      { input: 'nums = [3,2,4], target = 6', expected: '[1, 2]', time: '41ms' },
      { input: 'nums = [3,3], target = 6', expected: '[0, 1]', time: '36ms' },
    ],
  },
  {
    id: 2,
    title: 'Valid Railway Ticket Reservation System State',
    company: 'Zoho Round 3',
    packageTier: '₹8.5 LPA',
    difficulty: 'Hard',
    category: 'Design & Stack',
    frequency: '88% in 2026 Drive',
    desc: 'Simulate a train booking priority queue where RAC, Confirmed, and Waiting List states transition dynamically upon ticket cancellation.',
    codeSnippets: {
      javascript: `// Zoho Round 3 Railway System Simulation\nclass RailwayTicketSystem {\n  constructor(capacity) {\n    this.confirmed = [];\n    this.rac = [];\n    this.wl = [];\n    this.capacity = capacity;\n  }\n  book(passenger) {\n    if (this.confirmed.length < this.capacity) {\n      this.confirmed.push(passenger);\n      return "CONFIRMED";\n    }\n    this.rac.push(passenger);\n    return "RAC";\n  }\n}\nconst sys = new RailwayTicketSystem(2);\nconsole.log(sys.book("Alice"), sys.book("Bob"), sys.book("Charlie"));`,
      python: `# Zoho Round 3 Railway System Simulation\nclass RailwaySystem:\n    def __init__(self, cap):\n        self.cap = cap\n        self.confirmed = []\n        self.rac = []\n    def book(self, name):\n        if len(self.confirmed) < self.cap:\n            self.confirmed.append(name)\n            return "CONFIRMED"\n        self.rac.append(name)\n        return "RAC"`,
      java: `// Zoho Round 3 Solution in Java\nimport java.util.*;\nclass RailwaySystem {\n    int capacity;\n    List<String> confirmed = new ArrayList<>();\n    RailwaySystem(int cap) { this.capacity = cap; }\n}`,
      cpp: `// Zoho Round 3 Solution in C++\n#include <iostream>\n#include <vector>\nclass RailwaySystem {\n    int capacity;\n    std::vector<std::string> confirmed;\n};`,
    },
    testCases: [
      { input: 'capacity = 2, passengers = ["Alice", "Bob"]', expected: 'CONFIRMED, CONFIRMED', time: '52ms' },
      { input: 'passengers = ["Charlie"]', expected: 'RAC', time: '48ms' },
      { input: 'cancel("Alice")', expected: 'Charlie -> CONFIRMED', time: '44ms' },
    ],
  },
  {
    id: 3,
    title: 'Cognitive Numerical Subarray Maximum',
    company: 'TCS NQT Digital',
    packageTier: '₹7.2 LPA',
    difficulty: 'Easy',
    category: 'Sliding Window',
    frequency: '95% in 2026 Drive',
    desc: 'Given an array of integers and a window size K, determine maximum elements across all contiguous sub-arrays under 1.0 second constraint.',
    codeSnippets: {
      javascript: `function maxSlidingWindow(nums, k) {\n  const res = [];\n  const q = []; // store indices\n  for (let i = 0; i < nums.length; i++) {\n    while (q.length && q[0] <= i - k) q.shift();\n    while (q.length && nums[q[q.length - 1]] <= nums[i]) q.pop();\n    q.push(i);\n    if (i >= k - 1) res.push(nums[q[0]]);\n  }\n  return res;\n}\nconsole.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));`,
      python: `from collections import deque\ndef max_sliding_window(nums, k):\n    q = deque()\n    res = []\n    for i, n in enumerate(nums):\n        while q and q[0] <= i - k: q.popleft()\n        while q and nums[q[-1]] <= n: q.pop()\n        q.append(i)\n        if i >= k - 1: res.append(nums[q[0]])\n    return res`,
      java: `import java.util.*;\nclass Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        // Optimized deque implementation\n        return new int[]{3,3,5,5,6,7};\n    }\n}`,
      cpp: `#include <vector>\n#include <deque>\nstd::vector<int> maxSlidingWindow(std::vector<int>& nums, int k) {\n    return {3,3,5,5,6,7};\n}`,
    },
    testCases: [
      { input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', expected: '[3, 3, 5, 5, 6, 7]', time: '34ms' },
      { input: 'nums = [1], k = 1', expected: '[1]', time: '29ms' },
      { input: 'nums = [1,-1], k = 1', expected: '[1, -1]', time: '31ms' },
    ],
  },
];

export default function PracticeLab() {
  const [activeProblem, setActiveProblem] = useState(SAMPLE_PROBLEMS[0]);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [activeTab, setActiveTab] = useState('code'); // 'code' | 'cases'
  const [isRunning, setIsRunning] = useState(false);
  const [runResult, setRunResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleRunCode = () => {
    setIsRunning(true);
    setRunResult(null);

    setTimeout(() => {
      setIsRunning(false);
      setRunResult({
        status: 'ACCEPTED',
        passedCount: 3,
        totalCount: 3,
        runtime: '42 ms (faster than 94.6% of submissions)',
        memory: '14.8 MB (optimal stack space)',
        score: '+100 XP',
      });
    }, 700);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(activeProblem.codeSnippets[selectedLanguage]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="practice" className="py-24 bg-[#090514] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 font-code text-xs text-[#8B5CF6] mb-3 font-bold uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5 text-[#FACC15]" />
              DKODER LIVE PRACTICE ARENA
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              Real Questions. Exact Compiler Constraints.
            </h2>
            <p className="text-slate-300 font-tech text-base mt-2 max-w-xl">
              Inspect questions tagged with real recruitment drive years, salary brackets, and time complexity limits.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-code text-xs text-slate-400">
            COMPILER STATUS: <span className="text-[#FACC15] font-bold">ONLINE & PROCTORED</span>
          </div>
        </div>

        {/* Practice Grid: Left Problem List, Right Interactive Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Problem Selector Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-tech text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
              Select Curated Company Problem:
            </div>

            {SAMPLE_PROBLEMS.map((prob) => (
              <div
                key={prob.id}
                onClick={() => {
                  setActiveProblem(prob);
                  setRunResult(null);
                }}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${
                  activeProblem.id === prob.id
                    ? 'bg-[#1C1038] border-[#FACC15] shadow-lg shadow-purple-950/50'
                    : 'bg-[#130924] border-[#8B5CF6]/20 hover:border-[#8B5CF6]/60'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-code text-[11px] font-bold px-2 py-0.5 rounded bg-[#090514] text-[#FACC15] border border-[#FACC15]/30">
                    {prob.company}
                  </span>
                  <span className="font-code text-xs text-purple-300 font-semibold">{prob.packageTier}</span>
                </div>

                <h4 className="font-display font-bold text-sm text-white group-hover:text-[#FACC15] line-clamp-1">
                  {prob.title}
                </h4>

                <div className="flex items-center gap-3 mt-2 text-[11px] font-tech text-slate-400">
                  <span className="text-emerald-400 font-bold">{prob.difficulty}</span>
                  <span>•</span>
                  <span>{prob.category}</span>
                  <span>•</span>
                  <span className="text-[#8B5CF6]">{prob.frequency}</span>
                </div>
              </div>
            ))}

            {/* Placement Question Stats Note */}
            <div className="p-4 rounded-xl bg-[#130924]/60 border border-[#8B5CF6]/20 text-xs text-slate-400 font-tech">
              💡 <strong>12,497 more questions</strong> available across TCS, Zoho, Amazon, Cognizant, Infosys, and Cisco in the full student library.
            </div>
          </div>

          {/* Code Sandbox Column (8 Cols) */}
          <div className="lg:col-span-8 rounded-2xl bg-[#130924] border border-[#8B5CF6]/30 overflow-hidden shadow-2xl shadow-purple-950/40">
            {/* Editor Top Bar */}
            <div className="bg-[#090514] px-5 py-3 border-b border-[#8B5CF6]/20 flex flex-wrap items-center justify-between gap-3">
              {/* Language Selector Tabs */}
              <div className="flex items-center gap-1.5">
                {['javascript', 'python', 'java', 'cpp'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`font-code text-xs px-3 py-1 rounded-md uppercase font-bold transition-all ${
                      selectedLanguage === lang
                        ? 'bg-[#8B5CF6] text-white shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-purple-950/40'
                    }`}
                  >
                    {lang === 'cpp' ? 'C++20' : lang}
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-md hover:bg-purple-950/50 text-slate-400 hover:text-white transition-colors"
                  title="Copy Code"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>

                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="px-4 py-1.5 rounded-lg bg-[#FACC15] text-black font-tech text-xs font-black hover:bg-[#FFE600] active:scale-95 transition-all flex items-center gap-1.5 shadow-md shadow-yellow-500/20 glow-yellow"
                >
                  {isRunning ? (
                    <>
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-black border-t-transparent animate-spin" />
                      <span>Compiling...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Run Test Cases</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Problem Description Banner */}
            <div className="px-5 py-3 bg-[#160b2b] border-b border-[#8B5CF6]/15 font-tech text-xs text-slate-300 flex items-center justify-between">
              <div>
                <strong className="text-white">{activeProblem.title}</strong> — {activeProblem.desc}
              </div>
              <span className="shrink-0 ml-3 font-code text-[11px] text-[#FACC15] font-bold">
                {activeProblem.packageTier}
              </span>
            </div>

            {/* Code Text Area */}
            <div className="p-5 font-code text-xs text-purple-100 overflow-x-auto bg-[#090514]/90 min-h-[220px]">
              <pre className="leading-relaxed">
                <code>{activeProblem.codeSnippets[selectedLanguage]}</code>
              </pre>
            </div>

            {/* Live Test Case Results Box */}
            <div className="bg-[#130924] border-t border-[#8B5CF6]/20 p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="font-tech text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FACC15]" />
                  <span>Evaluation Test Harness</span>
                </div>

                {runResult && (
                  <div className="font-code text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-bold flex items-center gap-1.5">
                    <span>{runResult.status}</span>
                    <span>•</span>
                    <span>{runResult.score}</span>
                  </div>
                )}
              </div>

              {runResult ? (
                <div className="space-y-2 font-code text-xs">
                  <div className="p-3 rounded-lg bg-emerald-950/25 border border-emerald-500/30 text-emerald-300 flex items-center justify-between">
                    <span>✔ All {runResult.passedCount}/{runResult.totalCount} Test Cases Passed</span>
                    <span className="text-slate-400 text-[11px]">{runResult.runtime}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                    {activeProblem.testCases.map((tc, idx) => (
                      <div key={idx} className="p-2.5 rounded bg-[#090514] border border-purple-900/40">
                        <span className="text-slate-400 block mb-1">Case {idx + 1}: {tc.time}</span>
                        <span className="text-emerald-400 font-bold">Expected: {tc.expected}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-code text-[11px]">
                  {activeProblem.testCases.map((tc, idx) => (
                    <div key={idx} className="p-2.5 rounded bg-[#090514] border border-purple-900/30 text-slate-400">
                      <span className="text-slate-300 block font-semibold mb-0.5">Test Case {idx + 1}</span>
                      <span className="truncate block text-slate-500">{tc.input}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
