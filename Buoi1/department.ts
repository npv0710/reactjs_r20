class Department {
    private id: number
    private name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    public getId(): number {
        return this.id
    }

    public getName(): string {
        return this.name
    }
}

var department1 = new Department(1, 'Dev')

function printDepartment(d: Department): void {
    console.log('Department id: ' + d.getId())
    console.log('Department name: ' + d.getName())
}

export {
    Department,
    department1,
    printDepartment
}