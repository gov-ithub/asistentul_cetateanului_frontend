type NotificationSource = {
  id: number,
  name: string
}

type NotificationSeverity =
| "success"
| "warning"
| "danger";

export type notification = {
  title: string,
  timestamp: number,
  description: string,
  source: NotificationSource,
  severity: NotificationSeverity
};