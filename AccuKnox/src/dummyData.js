const breadcrumb_stack = ["Home", "Dashboard V2"];
const username = "kumarutsav";
const widgetData1 = [
    { name: 'Connected', value: 2 },
    { name: 'Not Connected', value: 2 },
];
const widgetData1COLORS = ['#0088FE', '#00C49F'];

// JSON structure
/*
{
    categories: [
        category: "String, category name",
        widgets: [
            widgetName: "String, widget name",
            isGraph: "boolean, to decide if graph is needed to build",
            widgetText: "JSON if graph, String if not"
        ]
    ]
}

*/

const data = {
    categories: [
        {
            category: "CSPM Executive Dashboard",
            widgets: [
                {
                    widgetName: "Cloud Accounts",
                    isGraph: true,
                    widgetText: {
                        "Connected": 2,
                        "Not Connected": 2
                    }
                },
                {
                    widgetName: "Cloud Account Risk Assessment",
                    isGraph: true,
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
                    widgetText: "Hi, myself Kumar Utsav, final year Computer Science student."
                },
                {
                    widgetName: "Workload Alerts",
                    isGraph: false,
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
                    widgetText: "Hehe"
                },
                {
                    widgetName: "Image Security Issues",
                    isGraph: false,
                    widgetText: "not hehe"
                },
            ]
        }
    ]
}

export { breadcrumb_stack, username, widgetData1, widgetData1COLORS, data }