import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryToIcon'
})
export class CategoryToIconPipe implements PipeTransform {
  private readonly categoryToIconMap = new Map<string, string>([
    ['Food & Drink', 'fastfood'],
    ['Auto', 'directions_car'],
    ['Entertainment', 'movie'],
    ['Health', 'local_hospital'],
    ['Groceries', 'shopping_cart'],
    ['Other', 'more_horiz'],
    ['Income', 'attach_money'],
    ['Transfer', 'swap_horiz'],
    ['Shopping', 'shopping_basket'],
    ['Housing', 'home'],
  ]);

  transform(value: string): string {
    return this.categoryToIconMap.get(value) ?? 'more_horiz';
  }

}
