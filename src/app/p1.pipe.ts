import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
name: 'P1'
})
export class P1Pipe implements PipeTransform {
transform(data: any[], searchTerm: string): any {
if(!data||!searchTerm){
return data;
}
else
{
return data.filter(x=>x.name1.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
}
}
}