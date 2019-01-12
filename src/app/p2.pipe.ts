import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
name: 'P2'
})
export class P2Pipe implements PipeTransform {
transform(data: any[], searchTerm: string): any {
if(!data||!searchTerm){
return data;
}
else
{
return data.filter(x=>x.course.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
}
}
}
