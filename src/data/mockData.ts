export const mockAlertAreas = [
  { id: 1, state: "Assam", district: "Kamrup", alertLevel: "High", rainfall: "180mm", status: "Active" },
  { id: 2, state: "Kerala", district: "Wayanad", alertLevel: "Critical", rainfall: "250mm", status: "Active" },
  { id: 3, state: "Maharashtra", district: "Kolhapur", alertLevel: "Moderate", rainfall: "120mm", status: "Monitoring" },
  { id: 4, state: "Bihar", district: "Patna", alertLevel: "High", rainfall: "200mm", status: "Active" },
  { id: 5, state: "West Bengal", district: "Howrah", alertLevel: "Low", rainfall: "60mm", status: "Resolved" },
  { id: 6, state: "Uttarakhand", district: "Chamoli", alertLevel: "Critical", rainfall: "300mm", status: "Active" },
];

export const mockWeatherData = [
  { city: "Mumbai", temp: 32, humidity: 78, rainfall: "45mm", wind: "14 km/h", condition: "Heavy Rain" },
  { city: "Delhi", temp: 38, humidity: 55, rainfall: "5mm", wind: "8 km/h", condition: "Partly Cloudy" },
  { city: "Chennai", temp: 34, humidity: 82, rainfall: "30mm", wind: "12 km/h", condition: "Thunderstorm" },
  { city: "Kolkata", temp: 33, humidity: 85, rainfall: "60mm", wind: "18 km/h", condition: "Heavy Rain" },
  { city: "Guwahati", temp: 28, humidity: 90, rainfall: "120mm", wind: "22 km/h", condition: "Flood Warning" },
  { city: "Kochi", temp: 29, humidity: 88, rainfall: "80mm", wind: "16 km/h", condition: "Continuous Rain" },
];

export const mockReliefCamps = [
  { id: 1, name: "Assam Relief Camp A", location: "Kamrup, Assam", capacity: "500/800", contact: "+91 98765 43210", address: "Near Guwahati Railway Station, Kamrup", details: "Food, water, medical aid available" },
  { id: 2, name: "Kerala Flood Shelter", location: "Wayanad, Kerala", capacity: "300/400", contact: "+91 94567 12345", address: "Govt School Building, Wayanad", details: "Temporary shelter with medical facilities" },
  { id: 3, name: "Bihar Emergency Camp", location: "Patna, Bihar", capacity: "700/1000", contact: "+91 91234 56789", address: "Community Hall, Patna City", details: "Large capacity shelter with food distribution" },
  { id: 4, name: "Maharashtra Relief Center", location: "Kolhapur, Maharashtra", capacity: "200/350", contact: "+91 87654 32109", address: "Town Hall, Kolhapur", details: "Medical support and temporary housing" },
];

export const mockHospitals = [
  { id: 1, name: "AIIMS New Delhi", distance: "2.5 km", contact: "+91 11 2658 8500", beds: "45 Available", address: "Ansari Nagar, New Delhi", speciality: "Trauma & Emergency" },
  { id: 2, name: "Safdarjung Hospital", distance: "4.1 km", contact: "+91 11 2616 5060", beds: "32 Available", address: "Ring Road, New Delhi", speciality: "General Emergency" },
  { id: 3, name: "Apollo Hospital", distance: "6.3 km", contact: "+91 11 2692 5858", beds: "28 Available", address: "Sarita Vihar, New Delhi", speciality: "Multi-specialty" },
  { id: 4, name: "Max Hospital", distance: "8.0 km", contact: "+91 11 2651 5050", beds: "15 Available", address: "Saket, New Delhi", speciality: "Emergency Care" },
];

export const mockHashtags = [
  { tag: "#AssamFloods2024", platform: "Twitter", posts: "12.5K" },
  { tag: "#KeralaRains", platform: "Instagram", posts: "8.2K" },
  { tag: "#FloodRelief", platform: "Twitter", posts: "25.1K" },
  { tag: "#BiharFloodAlert", platform: "Facebook", posts: "6.7K" },
  { tag: "#RescueOperations", platform: "Twitter", posts: "15.3K" },
];

export const mockSocialPost = {
  username: "DisasterWatch_IN",
  avatar: "DW",
  caption: "🚨 URGENT: Water levels in Brahmaputra river rising rapidly. Authorities have issued evacuation orders for low-lying areas in Kamrup district. Stay safe! #AssamFloods2024",
  timestamp: "15 minutes ago",
  likes: 2340,
  shares: 1205,
};

export const mockHighAlerts = [
  { location: "Kamrup, Assam", level: "Critical", time: "5 min ago" },
  { location: "Wayanad, Kerala", level: "High", time: "12 min ago" },
  { location: "Patna, Bihar", level: "High", time: "28 min ago" },
];

export const mockResources = [
  { name: "District Hospital", type: "Hospital", distance: "1.2 km" },
  { name: "Central Relief Shelter", type: "Shelter", distance: "0.8 km" },
  { name: "Food Distribution Point", type: "Food Center", distance: "1.5 km" },
  { name: "Emergency Water Supply", type: "Water", distance: "0.5 km" },
];
