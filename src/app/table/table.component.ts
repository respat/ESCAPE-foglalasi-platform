// table.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `
    <div class="w-full hidden justify-center md:flex">
      <table class="w-3/4 m-2 bg-white text-sm">
        <thead class="ltr:text-left rtl:text-right">
          <tr>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Dátum
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Név
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Fő
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Helyszín
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Irányítószám
            </th>
          </tr>
        </thead>

        <tbody class="p-4">
          <tr
            *ngFor="let foglalas of foglalasok"
            class="border rounded-lg h-16"
          >
            <td class="whitespace-nowrap px-4 py-2 text-center text-gray-700">
              {{ foglalas?.datum }}
            </td>
            <td
              class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900"
            >
              {{ foglalas?.nev }}
            </td>

            <td class="whitespace-nowrap px-4 py-2 text-center text-gray-700">
              {{ foglalas?.fo }}
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-center text-gray-700">
              {{ foglalas?.cim }}
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-center text-gray-700">
              {{ foglalas?.iranyitoszam }}
            </td>

            <td
              class="whitespace-nowrap flex flex-auto justify-center py-4 text-center text-gray-700"
            >
              <!-- Gombok vagy egyéb elemek ide -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class TableComponent {
  @Input() foglalasok: any[] = [];
}
