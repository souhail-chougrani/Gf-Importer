export const TEST = [
    {
        id: "first_row",
        label: "first",
        validationType: "string",
        validations: [
            {
                type: "required",
                params: ["this field is required"]
            },
            {
                type: "nullable",
                params: ["Nullable text"]
            }
        ]
    },
    {
        id: "second_row",
        label: "Second",
        validationType: "number",
        validations: [
            {
                type: "nullable",
                params: ["Nullable text"]
            }
        ]
    },
    {
        id: "third_row",
        label: "Third",
        validationType: "string",
        validations: [
            {
                type: "required",
                params: ["this field is required"]
            }
        ]
    }
];
