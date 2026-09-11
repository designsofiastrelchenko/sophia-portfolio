type Option = { value: string; label: string }

export function SegmentedControl({
  label,
  value,
  options,
  controls,
  onChange,
}: {
  label: string
  value: string
  options: Option[]
  controls: string
  onChange: (value: string) => void
}) {
  return (
    <div
      className="segmented-group version-switch"
      role="group"
      aria-label={label}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={value === option.value}
          aria-controls={controls}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
