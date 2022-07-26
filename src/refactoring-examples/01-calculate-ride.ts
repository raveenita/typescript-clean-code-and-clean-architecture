export function calc(dist: any, d: any) {
    if (d.getHours() >= 22) {
        return dist * 3.90;
    } else {
        if (d.getDay() === 0) {
            return dist * 2.90;
        } else {
            return dist * 2.10;
        }
    }
}