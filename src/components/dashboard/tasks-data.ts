interface Task {
    difficulty: 1 | 2 | 3 | 4
    title: string
    description: string
    taskID: number
    status: "done" | "doing" | "todo"
}

export const tasksData: {[key: string]: Array<Task>} = {
    all: [
        {
            taskID:23,
            difficulty: 3,
            title: "یک عدد تسک",
            status: "done",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
        {
            taskID:21,
            difficulty: 2,
            title: "یک عدد تسک",
            status: "doing",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
        {
            taskID:222,
            difficulty: 1,
            title: "یک عدد تسک",
            status: "todo",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
        {
            taskID:23363,
            difficulty: 2,
            title: "یک عدد تسک",
            status: "done",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
        {
            taskID:1,
            difficulty: 4,
            title: "یک عدد تسک",
            status: "todo",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
        {
            taskID:20,
            difficulty: 3,
            title: "یک عدد تسک",
            status: "doing",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
        {
            taskID:13,
            difficulty: 1,
            title: "یک عدد تسک",
            status: "done",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
        {
            taskID:12,
            difficulty: 4,
            title: "یک عدد تسک",
            status: "todo",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
        {
            taskID:12,
            difficulty: 4,
            title: "یک عدد تسک",
            status: "doing",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
        {
            taskID:12,
            difficulty: 4,
            title: "یک عدد تسک",
            status: "done",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
        {
            taskID:12,
            difficulty: 4,
            title: "یک عدد تسک",
            status: "todo",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
    ],
    todo: [
        {
            taskID:222,
            difficulty: 1,
            title: "یک عدد تسک",
            status: "todo",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
        {
            taskID:1,
            difficulty: 4,
            title: "یک عدد تسک",
            status: "todo",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
        {
            taskID:12,
            difficulty: 4,
            title: "یک عدد تسک",
            status: "todo",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
        {
            taskID:12,
            difficulty: 4,
            title: "یک عدد تسک",
            status: "todo",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
    ],
    doing: [
        {
            taskID:21,
            difficulty: 2,
            title: "یک عدد تسک",
            status: "doing",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
        {
            taskID:20,
            difficulty: 3,
            title: "یک عدد تسک",
            status: "doing",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
        {
            taskID:12,
            difficulty: 4,
            title: "یک عدد تسک",
            status: "doing",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
    ],
    done: [
        {
            taskID:23,
            difficulty: 3,
            title: "یک عدد تسک",
            status: "done",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
        {
            taskID:23363,
            difficulty: 2,
            title: "یک عدد تسک",
            status: "done",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
        {
            taskID:13,
            difficulty: 1,
            title: "یک عدد تسک",
            status: "done",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
        {
            taskID:12,
            difficulty: 4,
            title: "یک عدد تسک",
            status: "done",
            description: "این یک تسک است. بدانید و آگاه باشید"
        },
    ]
}