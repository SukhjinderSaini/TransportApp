type RunningDateType = string;

export interface BusRunningStatus {
  organisation: string;
  date: RunningDateType;
  busData: BusRunningInfo[];
}

export interface BusRunningInfo {
  busId: string;
  routeVariant: string;
  deviationFromTimetable: number;
}
