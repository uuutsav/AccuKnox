import { atom } from "recoil"

export const permanentData = atom({
    key: 'permanentData',
    default: {
        categories: [
            {
                category: "CSPM Executive Dashboard",
                widgets: [
                    {
                        widgetName: "Cloud Accounts",
                        isGraph: true,
                        isChecked: true,
                        widgetText: {
                            "Connected": 2,
                            "Not Connected": 2
                        }
                    },
                    {
                        widgetName: "Cloud Account Risk Assessment",
                        isGraph: true,
                        isChecked: true,
                        widgetText: {
                            "Failed": 1689,
                            "Warning": 681,
                            "Not available": 36,
                            "Passed": 7253
                        }
                    }
                ]
            },
            {
                category: "CWPP Dashboard",
                widgets: [
                    {
                        widgetName: "Top 5 Namespace Specific Alerts",
                        isGraph: false,
                        isChecked: true,
                        widgetText: "Hi, myself Kumar Utsav, final year Computer Science student."
                    },
                    {
                        widgetName: "Workload Alerts",
                        isGraph: false,
                        isChecked: true,
                        widgetText: "I'm very much interested in web development, and technology in general."
                    }
                ]
            },
            {
                category: "Registry Scan",
                widgets: [
                    {
                        widgetName: "Image Risk Assessment",
                        isGraph: true,
                        isChecked: true,
                        widgetText: {
                            "Critical": 9,
                            "High": 150,
                            "Moderate": 92,
                            "Low": 3
                        }
                    },
                    {
                        widgetName: "Image Security Issues",
                        isGraph: true,
                        isChecked: true,
                        widgetText: {
                            "Critical": 2,
                            "High": 2,
                            "Moderate": 2,
                            "Low": 1,
                            "nil": 1
                        }
                    },
                ]
            },
            {
                category: "Ticket",
                widgets: [
                    {
                        widgetName: "Image Risk Assessment",
                        isGraph: false,
                        isChecked: true,
                        widgetText: "Hehe"
                    },
                    {
                        widgetName: "Image Security Issues",
                        isGraph: false,
                        isChecked: true,
                        widgetText: "not hehe"
                    },
                ]
            }
        ]
    }
})
