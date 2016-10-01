import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})

export class SummaryPipe implements PipeTransform {
    transform(value: any, args: any[]) {

        /*  not working */
   //     let limit = (args && args[0]) ? parseInt(args[0]) : 100;

        let limit = (args) ? parseInt(args || args[0]) : 100;

        if(value)
            return value.substring(0, limit) + "...";
    }
}