export const adminFloodAlerts = [
  { id: 1, state: "Assam", district: "Kamrup", alertLevel: "Extreme", rainfall: "300mm", riverLevel: "Danger", status: "Active" },
  { id: 2, state: "Kerala", district: "Wayanad", alertLevel: "High", rainfall: "250mm", riverLevel: "Warning", status: "Active" },
  { id: 3, state: "Maharashtra", district: "Kolhapur", alertLevel: "Moderate", rainfall: "120mm", riverLevel: "Normal", status: "Monitoring" },
  { id: 4, state: "Bihar", district: "Patna", alertLevel: "High", rainfall: "200mm", riverLevel: "Warning", status: "Active" },
  { id: 5, state: "Uttarakhand", district: "Chamoli", alertLevel: "Extreme", rainfall: "320mm", riverLevel: "Danger", status: "Active" },
  { id: 6, state: "West Bengal", district: "Howrah", alertLevel: "Low", rainfall: "60mm", riverLevel: "Normal", status: "Resolved" },
  { id: 7, state: "Rajasthan", district: "Jalore", alertLevel: "Moderate", rainfall: "110mm", riverLevel: "Rising", status: "Monitoring" },
];

export const adminMapRegions = [
  { id: 1, state: "Assam", district: "Kamrup", riskLevel: "Critical" },
  { id: 2, state: "Assam", district: "Dibrugarh", riskLevel: "High" },
  { id: 3, state: "Kerala", district: "Wayanad", riskLevel: "Critical" },
  { id: 4, state: "Kerala", district: "Ernakulam", riskLevel: "Moderate" },
  { id: 5, state: "Maharashtra", district: "Kolhapur", riskLevel: "Moderate" },
  { id: 6, state: "Bihar", district: "Patna", riskLevel: "High" },
  { id: 7, state: "Bihar", district: "Muzaffarpur", riskLevel: "Moderate" },
  { id: 8, state: "Uttarakhand", district: "Chamoli", riskLevel: "Critical" },
  { id: 9, state: "West Bengal", district: "Howrah", riskLevel: "Low" },
  { id: 10, state: "Rajasthan", district: "Jalore", riskLevel: "Moderate" },
];

export const adminSocialMedia = [
  { id: 1, hashtag: "#AssamFloods2024", platform: "Twitter", postCount: "12.5K", authenticity: "Verified" },
  { id: 2, hashtag: "#KeralaRains", platform: "Instagram", postCount: "8.2K", authenticity: "Verified" },
  { id: 3, hashtag: "#FloodRelief", platform: "Twitter", postCount: "25.1K", authenticity: "Verified" },
  { id: 4, hashtag: "#BiharFloodFake", platform: "Facebook", postCount: "2.1K", authenticity: "Fake" },
  { id: 5, hashtag: "#RescueOperations", platform: "Twitter", postCount: "15.3K", authenticity: "Needs Verification" },
  { id: 6, hashtag: "#FloodScam", platform: "Instagram", postCount: "900", authenticity: "Fake" },
  { id: 7, hashtag: "#UttarakhandDisaster", platform: "Twitter", postCount: "6.7K", authenticity: "Needs Verification" },
];

export const adminReliefCamps = [
  { id: 1, name: "Assam Relief Camp A", location: "Kamrup, Assam", capacity: 800, availableBeds: 300, contact: "+91 98765 43210", status: "Available" },
  { id: 2, name: "Kerala Flood Shelter", location: "Wayanad, Kerala", capacity: 400, availableBeds: 100, contact: "+91 94567 12345", status: "Available" },
  { id: 3, name: "Bihar Emergency Camp", location: "Patna, Bihar", capacity: 1000, availableBeds: 300, contact: "+91 91234 56789", status: "Available" },
  { id: 4, name: "Maharashtra Relief Center", location: "Kolhapur, Maharashtra", capacity: 350, availableBeds: 150, contact: "+91 87654 32109", status: "Available" },
  { id: 5, name: "Uttarakhand Base Camp", location: "Chamoli, Uttarakhand", capacity: 500, availableBeds: 0, contact: "+91 76543 21098", status: "Full" },
];

export const adminMedicalResources = [
  { id: 1, name: "AIIMS New Delhi", location: "Ansari Nagar, Delhi", distance: "2.5 km", contact: "+91 11 2658 8500", beds: 45, speciality: "Trauma & Emergency" },
  { id: 2, name: "Safdarjung Hospital", location: "Ring Road, Delhi", distance: "4.1 km", contact: "+91 11 2616 5060", beds: 32, speciality: "General Emergency" },
  { id: 3, name: "Apollo Hospital", location: "Sarita Vihar, Delhi", distance: "6.3 km", contact: "+91 11 2692 5858", beds: 28, speciality: "Multi-specialty" },
  { id: 4, name: "Max Hospital", location: "Saket, Delhi", distance: "8.0 km", contact: "+91 11 2651 5050", beds: 15, speciality: "Emergency Care" },
  { id: 5, name: "Guwahati Medical College", location: "Bhangagarh, Guwahati", distance: "1.2 km", contact: "+91 361 2529 457", beds: 60, speciality: "Flood Trauma" },
];

export const adminUserReports = [
  { id: "RPT-001", location: "Kamrup, Assam", description: "Road completely flooded near NH-37", time: "10 min ago", status: "Pending", type: "Flooded Road" },
  { id: "RPT-002", location: "Wayanad, Kerala", description: "Bridge collapsed on Wayanad-Kozhikode road", time: "25 min ago", status: "Verified", type: "Collapsed Bridge" },
  { id: "RPT-003", location: "Patna, Bihar", description: "Family of 5 stranded on rooftop", time: "35 min ago", status: "Rescue Assigned", type: "Stranded People" },
  { id: "RPT-004", location: "Chamoli, Uttarakhand", description: "Missing person near Joshimath area", time: "1 hr ago", status: "Pending", type: "Missing Person" },
  { id: "RPT-005", location: "Kolhapur, Maharashtra", description: "Water entered residential colony", time: "2 hr ago", status: "Resolved", type: "Flooded Road" },
  { id: "RPT-006", location: "Howrah, West Bengal", description: "Electricity poles submerged, risk of electrocution", time: "45 min ago", status: "Verified", type: "Infrastructure" },
];

export const adminVolunteers = [
  { id: 1, name: "Rajesh Kumar", skills: "First Aid, Swimming", location: "Guwahati, Assam", status: "Available", assignedTask: "—" },
  { id: 2, name: "Priya Menon", skills: "Medical, Counseling", location: "Kochi, Kerala", status: "On Mission", assignedTask: "Wayanad Rescue Op" },
  { id: 3, name: "Amit Singh", skills: "Boat Operation, Navigation", location: "Patna, Bihar", status: "Available", assignedTask: "—" },
  { id: 4, name: "Sunita Devi", skills: "Food Prep, Logistics", location: "Kolhapur, Maharashtra", status: "Available", assignedTask: "—" },
  { id: 5, name: "Vikram Joshi", skills: "Search & Rescue, Climbing", location: "Dehradun, Uttarakhand", status: "On Mission", assignedTask: "Chamoli Rescue Op" },
  { id: 6, name: "Fatima Begum", skills: "Nursing, Child Care", location: "Kolkata, West Bengal", status: "Available", assignedTask: "—" },
];

export const adminNotifications = [
  { id: 1, title: "Evacuation Notice — Kamrup", message: "Immediate evacuation ordered for low-lying areas in Kamrup district.", type: "Evacuation", time: "5 min ago", sent: true },
  { id: 2, title: "Weather Warning — Kerala", message: "IMD issues red alert for extremely heavy rainfall in Wayanad.", type: "Weather", time: "20 min ago", sent: true },
  { id: 3, title: "Road Closure — NH-37", message: "National Highway 37 closed due to waterlogging near Guwahati.", type: "Road Closure", time: "1 hr ago", sent: true },
  { id: 4, title: "Relief Camp Update", message: "Uttarakhand Base Camp has reached full capacity.", type: "Update", time: "2 hr ago", sent: false },
];

export const adminUsers = [
  { id: 1, name: "Rahul Sharma", email: "rahul@example.com", role: "User", status: "Active", joined: "2024-01-15" },
  { id: 2, name: "Anita Desai", email: "anita@example.com", role: "User", status: "Active", joined: "2024-02-20" },
  { id: 3, name: "NDRF Unit 5", email: "ndrf5@gov.in", role: "Organization", status: "Verified", joined: "2023-11-01" },
  { id: 4, name: "Suspicious User", email: "spam@test.com", role: "User", status: "Blocked", joined: "2024-06-01" },
  { id: 5, name: "Kerala Flood Board", email: "kfb@gov.in", role: "Organization", status: "Pending Verification", joined: "2024-03-10" },
  { id: 6, name: "Meena Kumari", email: "meena@example.com", role: "User", status: "Active", joined: "2024-04-22" },
];

export const adminAnalyticsData = {
  alertsByRegion: [
    { region: "Assam", alerts: 45 },
    { region: "Kerala", alerts: 38 },
    { region: "Bihar", alerts: 32 },
    { region: "Maharashtra", alerts: 20 },
    { region: "Uttarakhand", alerts: 28 },
    { region: "West Bengal", alerts: 15 },
    { region: "Rajasthan", alerts: 10 },
  ],
  rescueOps: [
    { month: "Jan", completed: 12, ongoing: 3 },
    { month: "Feb", completed: 8, ongoing: 5 },
    { month: "Mar", completed: 15, ongoing: 7 },
    { month: "Apr", completed: 20, ongoing: 4 },
    { month: "May", completed: 25, ongoing: 8 },
    { month: "Jun", completed: 35, ongoing: 12 },
  ],
  mostAffectedStates: [
    { state: "Assam", population: 125000 },
    { state: "Kerala", population: 89000 },
    { state: "Bihar", population: 95000 },
    { state: "Uttarakhand", population: 45000 },
    { state: "Maharashtra", population: 60000 },
  ],
};

export const adminRecentActivity = [
  { id: 1, action: "Flood alert issued for Kamrup, Assam", time: "5 min ago", type: "alert" },
  { id: 2, action: "User report received — stranded family in Patna", time: "12 min ago", type: "report" },
  { id: 3, action: "Rescue team dispatched to Wayanad", time: "18 min ago", type: "rescue" },
  { id: 4, action: "Relief camp capacity updated — Bihar Emergency Camp", time: "30 min ago", type: "camp" },
  { id: 5, action: "Social media post flagged as fake", time: "45 min ago", type: "social" },
  { id: 6, action: "New volunteer registered — Fatima Begum", time: "1 hr ago", type: "volunteer" },
  { id: 7, action: "Weather warning issued for Kerala", time: "1.5 hr ago", type: "alert" },
  { id: 8, action: "Medical resource updated — AIIMS bed availability", time: "2 hr ago", type: "medical" },
];
