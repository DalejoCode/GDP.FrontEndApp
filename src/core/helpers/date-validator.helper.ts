export class DateValidatorHelper{

    public static compareTwoDates(currentDate1: Date, currentDate2: Date): CompareResultEnum {
        if (!currentDate1 || !currentDate2) { return CompareResultEnum.ERROR; }
        const date1 = new Date(currentDate1);
        const date2 = new Date(currentDate2);
        if (date1.getFullYear() < date2.getFullYear()) {
            return CompareResultEnum.SMALLER;
        } else if (date1.getFullYear() > date2.getFullYear()) {
            return CompareResultEnum.GREATER;
        } else {
            if (date1.getMonth() < date2.getMonth()) {
                return CompareResultEnum.SMALLER;
            } else if (date1.getMonth() > date2.getMonth()) {
                return CompareResultEnum.GREATER;
            } else {
                if (date1.getDate() < date2.getDate()) {
                    return CompareResultEnum.SMALLER;
                } else if (date1.getDate() > date2.getDate()) {
                    return CompareResultEnum.GREATER;
                } else {
                    return CompareResultEnum.EQUAL;
                }
            }
        }
    }
}

export enum CompareResultEnum {
    SMALLER, GREATER, EQUAL,  ERROR
}