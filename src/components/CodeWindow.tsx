import React, { useState } from 'react';
import { Terminal, Copy, Check, Code2 } from 'lucide-react';

export const CodeWindow: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const javaCode = `package com.sahilpatil.core;

public class SahilPatil implements SoftwareDeveloper {
    private final String name = "Sahil Patil";
    private final String education = "B.Tech CSE (2023-2027)";
    private final double cgpa = 8.02;
    private final String[] coreStack = {
        "Java", "OOP", "DSA", "Spring Boot", "React.js", "MongoDB"
    };

    @Override
    public DeveloperProfile buildProfile() {
        return new DeveloperProfile.Builder()
            .codechefSolved(500)
            .leetcodeSolved(175)
            .activeBadge("LeetCode 100 Days")
            .openToWork(true)
            .status("Ready for Software Engineering Roles")
            .build();
    }
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(javaCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-navy-750 bg-white dark:bg-navy-900 shadow-2xl transition-all duration-300 hover:border-brand-500/30 text-left w-full font-mono text-xs">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-navy-950/90 border-b border-slate-200 dark:border-navy-750">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="ml-3 text-[11px] text-slate-600 dark:text-slate-400 font-mono font-medium flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-brand-500" />
            SahilPatil.java
          </span>
        </div>

        <button
          onClick={copyCode}
          className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white dark:bg-navy-900 hover:bg-slate-200 dark:hover:bg-navy-800 border border-slate-200 dark:border-navy-700 text-slate-600 dark:text-slate-300 text-[11px] transition-colors"
          title="Copy snippet"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-500" />
              <span className="text-emerald-500 font-sans">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 text-slate-400" />
              <span className="font-sans">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 overflow-x-auto bg-slate-50 dark:bg-navy-900/90 leading-relaxed text-slate-800 dark:text-slate-200">
        <div className="flex gap-4">
          {/* Line Numbers */}
          <div className="select-none text-slate-400 dark:text-slate-600 text-right pr-2 font-mono text-[11px] space-y-1">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Syntax Code */}
          <div className="space-y-1 text-[11.5px] font-mono whitespace-pre overflow-x-auto pb-1">
            <div><span className="text-purple-600 dark:text-purple-400 font-semibold">package</span> com.sahilpatil.core;</div>
            <div>&nbsp;</div>
            <div>
              <span className="text-purple-600 dark:text-purple-400 font-semibold">public class</span>{" "}
              <span className="text-sky-600 dark:text-sky-300 font-bold">SahilPatil</span>{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">implements</span>{" "}
              <span className="text-teal-600 dark:text-teal-300">SoftwareDeveloper</span> &#123;
            </div>
            <div>
              {"    "}<span className="text-purple-600 dark:text-purple-400 font-semibold">private final</span> String name = <span className="text-emerald-600 dark:text-emerald-300">"Sahil Patil"</span>;
            </div>
            <div>
              {"    "}<span className="text-purple-600 dark:text-purple-400 font-semibold">private final</span> String education = <span className="text-emerald-600 dark:text-emerald-300">"B.Tech CSE (2023-2027)"</span>;
            </div>
            <div>
              {"    "}<span className="text-purple-600 dark:text-purple-400 font-semibold">private final double</span> cgpa = <span className="text-amber-600 dark:text-amber-300 font-semibold">8.02</span>;
            </div>
            <div>
              {"    "}<span className="text-purple-600 dark:text-purple-400 font-semibold">private final</span> String[] coreStack = &#123;
            </div>
            <div>
              {"        "}<span className="text-emerald-600 dark:text-emerald-300">"Java"</span>, <span className="text-emerald-600 dark:text-emerald-300">"OOP"</span>, <span className="text-emerald-600 dark:text-emerald-300">"DSA"</span>, <span className="text-emerald-600 dark:text-emerald-300">"Spring Boot"</span>, <span className="text-emerald-600 dark:text-emerald-300">"React.js"</span>, <span className="text-emerald-600 dark:text-emerald-300">"MongoDB"</span>
            </div>
            <div>
              {"    "}&#125;;
            </div>
            <div>&nbsp;</div>
            <div>
              {"    "}<span className="text-amber-600 dark:text-amber-400">@Override</span>
            </div>
            <div>
              {"    "}<span className="text-purple-600 dark:text-purple-400 font-semibold">public</span> DeveloperProfile <span className="text-blue-600 dark:text-blue-300 font-semibold">buildProfile</span>() &#123;
            </div>
            <div>
              {"        "}<span className="text-purple-600 dark:text-purple-400 font-semibold">return new</span> DeveloperProfile.Builder()
            </div>
            <div>
              {"            "}.codechefSolved(<span className="text-amber-600 dark:text-amber-300">500</span>)
            </div>
            <div>
              {"            "}.leetcodeSolved(<span className="text-amber-600 dark:text-amber-300">175</span>)
            </div>
            <div>
              {"            "}.activeBadge(<span className="text-emerald-600 dark:text-emerald-300">"LeetCode 100 Days"</span>)
            </div>
            <div>
              {"            "}.openToWork(<span className="text-purple-600 dark:text-purple-400">true</span>)
            </div>
            <div>
              {"            "}.status(<span className="text-emerald-600 dark:text-emerald-300">"Ready for Software Engineering Roles"</span>)
            </div>
            <div>
              {"            "}.build();
            </div>
            <div>
              {"    "}&#125;
            </div>
            <div>&#125;</div>
          </div>
        </div>
      </div>

      {/* Terminal Status Bar */}
      <div className="px-4 py-2.5 bg-slate-100 dark:bg-navy-950/90 border-t border-slate-200 dark:border-navy-750 flex flex-wrap items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono gap-2">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-brand-500" />
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Online</span>
          </span>
          <span>• Java 21 LTS</span>
        </div>
        <span className="text-slate-500">Kolhapur, India (IST)</span>
      </div>
    </div>
  );
};
