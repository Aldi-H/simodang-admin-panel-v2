type IDeviceData = {
  deviceId: string;
  masterId: string | null;
  deviceName: string;
  autoWater: boolean;
  autoFeeder: boolean;
  isSaved: boolean;
};

const DevicesData: IDeviceData[] = [
  {
    deviceId: "ALDEVICE",
    masterId: "HEIZOU",
    deviceName: "Device Aldi Coba",
    autoWater: true,
    autoFeeder: false,
    isSaved: true,
  },
  {
    deviceId: "BANJAR",
    masterId: "HEIZOU",
    deviceName: "Banjarmasin Slowmo",
    autoWater: false,
    autoFeeder: false,
    isSaved: true,
  },
  {
    deviceId: "CAHYADEV",
    masterId: "MASCAHYA2",
    deviceName: "Cahya Device",
    autoWater: false,
    autoFeeder: false,
    isSaved: true,
  },
  {
    deviceId: "DEV-01",
    masterId: "MAS-01",
    deviceName: "DEV-01",
    autoWater: false,
    autoFeeder: false,
    isSaved: false,
  },
  {
    deviceId: "DEV-02",
    masterId: "MAS-01",
    deviceName: "DEV-02",
    autoWater: true,
    autoFeeder: true,
    isSaved: true,
  },
  {
    deviceId: "DEV-03",
    masterId: "MAS-01",
    deviceName: "DEV-03",
    autoWater: false,
    autoFeeder: false,
    isSaved: true,
  },
  {
    deviceId: "DEV-04",
    masterId: "MAS-01",
    deviceName: "DEV-04",
    autoWater: false,
    autoFeeder: false,
    isSaved: false,
  },
  {
    deviceId: "DEV-05",
    masterId: "GN0123100001",
    deviceName: "DEV-05",
    autoWater: false,
    autoFeeder: false,
    isSaved: false,
  },
  {
    deviceId: "DEV-06",
    masterId: "MAS-02",
    deviceName: "DEV-01",
    autoWater: false,
    autoFeeder: false,
    isSaved: false,
  },
  {
    deviceId: "DEV-07",
    masterId: "MAS-02",
    deviceName: "DEV-02",
    autoWater: false,
    autoFeeder: false,
    isSaved: false,
  },
  {
    deviceId: "DEV-191",
    masterId: "MAS-01",
    deviceName: "DEV-191",
    autoWater: false,
    autoFeeder: false,
    isSaved: false,
  },
  {
    deviceId: "DEV-199",
    masterId: "MAS-01",
    deviceName: "Alat Wira 1",
    autoWater: false,
    autoFeeder: false,
    isSaved: false,
  },
  {
    deviceId: "DEV-40",
    masterId: "MAS-05",
    deviceName: "Alat Wira",
    autoWater: false,
    autoFeeder: false,
    isSaved: false,
  },
  {
    deviceId: "DEV-777",
    masterId: "MAS-03",
    deviceName: "DEV-777",
    autoWater: false,
    autoFeeder: false,
    isSaved: false,
  },
  {
    deviceId: "DEV-888",
    masterId: "MAS-05",
    deviceName: "DEV-888",
    autoWater: false,
    autoFeeder: false,
    isSaved: false,
  },
  {
    deviceId: "MAS-788",
    masterId: null,
    deviceName: "MAS-788",
    autoWater: false,
    autoFeeder: false,
    isSaved: false,
  },
  {
    deviceId: "PASURU",
    masterId: "HEIZOU",
    deviceName: "Tahu Petis Pasuruan",
    autoWater: false,
    autoFeeder: false,
    isSaved: false,
  },
  {
    deviceId: "SN0123100001",
    masterId: "GN0123100001",
    deviceName: "Node v.1 Seq 1",
    autoWater: false,
    autoFeeder: false,
    isSaved: true,
  },
  {
    deviceId: "SN0123100002",
    masterId: "GN0123100001",
    deviceName: "Node v.1 Seq 2",
    autoWater: false,
    autoFeeder: true,
    isSaved: true,
  },
  {
    deviceId: "SN0123100003",
    masterId: "GN0123100001",
    deviceName: "Node v.1 Seq 3",
    autoWater: true,
    autoFeeder: false,
    isSaved: true,
  },
  {
    deviceId: "SN0123100004",
    masterId: "GN0123100001",
    deviceName: "Node v.1 Seq 4",
    autoWater: true,
    autoFeeder: true,
    isSaved: true,
  },
  {
    deviceId: "SN0123100005",
    masterId: "GN0123100001",
    deviceName: "Node v.1 Seq 5",
    autoWater: false,
    autoFeeder: false,
    isSaved: false,
  },
  {
    deviceId: "SN0123100006",
    masterId: "GN0123100001",
    deviceName: "Node v.1 Seq 6",
    autoWater: true,
    autoFeeder: true,
    isSaved: false,
  },
  {
    deviceId: "SN0123100007",
    masterId: "GN0123100003",
    deviceName: "Node v.1 Seq 7",
    autoWater: false,
    autoFeeder: false,
    isSaved: true,
  },
  {
    deviceId: "SN0123100008",
    masterId: "GN0123100003",
    deviceName: "Node v.1 Seq 8",
    autoWater: false,
    autoFeeder: true,
    isSaved: true,
  },
];
export default DevicesData;
