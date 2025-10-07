import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Caret from "./caret";
import Link from "next/link";

export default function Dropdown({
  label = "Select option",
  items = [],
  value: controlledValue,
  onChange,
  isLink,
  placeholder = "Select...",
  className = "w-64",
  triggerClassName,
}) {
  const isControlled =
    controlledValue !== undefined && onChange instanceof Function;
  const [open, setOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [uncontrolledValue, setUncontrolledValue] = useState(null);
  const value = isControlled ? controlledValue : uncontrolledValue;

  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const listRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    }
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  // Reset highlight when opening
  useEffect(() => {
    if (open) {
      const idx = items.findIndex((it) => it.value === value && !it.disabled);
      setHighlightIndex(idx >= 0 ? idx : items.findIndex((it) => !it.disabled));
    } else {
      setHighlightIndex(-1);
    }
  }, [open, items, value]);

  // Keyboard navigation
  function onKeyDown(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setHighlightIndex((prev) => nextEnabledIndex(items, prev, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
      setHighlightIndex((prev) => nextEnabledIndex(items, prev, -1));
    } else if (e.key === "Home") {
      e.preventDefault();
      setHighlightIndex(items.findIndex((it) => !it.disabled));
    } else if (e.key === "End") {
      e.preventDefault();
      setHighlightIndex(findLastEnabledIndex(items));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (open && highlightIndex >= 0) selectIndex(highlightIndex);
      else setOpen((s) => !s);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      buttonRef.current?.focus();
    }
  }

  function selectIndex(idx) {
    const item = items[idx];
    if (!item || item.disabled) return;
    onChange?.(item.value);
    setUncontrolledValue(item.value);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function handleItemMouseEnter(idx) {
    setHighlightIndex(idx);
  }

  function displayLabel() {
    const found = items.find((it) => it.value === value);
    return found ? found.label : placeholder;
  }

  return (
    <div className={`relative inline-block ${className}`} ref={rootRef}>
      <span id="dropdown-label" className="sr-only">
        {label}
      </span>

      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby="dropdown-label"
        onClick={() => setOpen((s) => !s)}
        onKeyDown={onKeyDown}
        className={cn(
          "w-full flex items-center justify-between gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none",
          triggerClassName
        )}
      >
        <span className={`truncate text-gray-700`}>{displayLabel()}</span>
        <Caret open={open} />
      </button>

      {open && (
        <ul
          ref={listRef}
          role="listbox"
          aria-labelledby="dropdown-label"
          tabIndex={-1}
          onKeyDown={onKeyDown}
          className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none"
        >
          {items.length === 0 && (
            <li className="px-3 py-2 text-sm text-gray-500">No options</li>
          )}

          {items.map((item, idx) => {
            const isSelected = item.value === value;
            const isHighlighted = idx === highlightIndex;
            return isLink ? (
              <Link
                href={item.value}
                key={String(item.value) + idx}
                className={`cursor-pointer select-none px-3 py-2 text-sm flex items-center gap-2 ${
                  item.disabled
                    ? "text-gray-300 cursor-not-allowed"
                    : isHighlighted
                    ? "bg-indigo-50 text-gray-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span
                  className={`flex-1 truncate ${
                    isSelected ? "font-medium" : ""
                  }`}
                >
                  {item.label}
                </span>
                {isSelected && (
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M5 10l3 3 7-7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
            ) : (
              <li
                key={String(item.value) + idx}
                role="option"
                aria-selected={isSelected}
                onClick={() => selectIndex(idx)}
                onMouseEnter={() => handleItemMouseEnter(idx)}
                className={`cursor-pointer select-none px-3 py-2 text-sm flex items-center gap-2 ${
                  item.disabled
                    ? "text-gray-300 cursor-not-allowed"
                    : isHighlighted
                    ? "bg-indigo-50 text-gray-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span
                  className={`flex-1 truncate ${
                    isSelected ? "font-medium" : ""
                  }`}
                >
                  {item.label}
                </span>
                {isSelected && (
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M5 10l3 3 7-7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
