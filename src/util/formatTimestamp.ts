interface returnProps {
  day: string;
  month: string;
  year: number;
  hours: number;
  minutes: string;
  amPm: string;
  sinceHours: number;
  sinceMinutes: number;
  diffInMinutes: number;
}

export default function formatTimestampWithSince(timestamp: number): returnProps {
  const date = new Date(timestamp);
  const now = new Date();

  const day: string = String(date.getDate()).padStart(2, '0');
  const month: string = String(date.getMonth() + 1).padStart(2, '0');
  const year: number = date.getFullYear();

  let hours: number = date.getHours();
  const minutes: string = String(date.getMinutes()).padStart(2, '0');
  const amPm: string = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;

  const diffInMs: number = now.getTime() - timestamp;
  const diffInMinutes: number = Math.floor(diffInMs / 1000 / 60);
  const sinceHours: number = Math.floor(diffInMinutes / 60);
  const sinceMinutes: number = diffInMinutes % 60;

  return {
    day,
    month,
    year,
    hours,
    minutes,
    amPm,
    sinceHours,
    sinceMinutes,
    diffInMinutes
  }
}