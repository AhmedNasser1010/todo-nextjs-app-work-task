import formatTimestamp from "@/util/formatTimestamp";

export default function TaskTimestamps({ createdAt, updatedAt }: { createdAt: number, updatedAt: number }) {
  const { sinceHours: createAtSinceHour, sinceMinutes: createAtSinceMinutes } = formatTimestamp(createdAt)
  const { sinceHours: updatedAtSinceHour, sinceMinutes: updatedAtSinceMinutes } = formatTimestamp(updatedAt)

  return (
    <span className="text-xs text-gray-700">
      {`${createAtSinceHour}h ${createAtSinceMinutes}m${updatedAt ? ` - ${updatedAtSinceHour}h, ${updatedAtSinceMinutes}m` : ''}`}
    </span>
  )
}