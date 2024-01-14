import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="w-screen flex justify-center mt-4 md:hidden">
      <div
        class="w-3/4 relative bg-indigo-600 px-4 py-3 rounded-lg overflow-hidden shadow-md shadow-indigo-200"
      >
        <div class="flex items-center justify-between">
          <h1 class="font-semibold text-white">{{ foglalas?.nev }}</h1>
          <img src="assets/menu-dots-vertical.svg" class="h-4" alt="" />
        </div>

        <p class="text-sm opacity-60 text-white">
          {{ foglalas?.iranyitoszam }}
        </p>
        <div class="flex mt-3">
          <div
            class="flex items-center border-indigo-600 bg-indigo-800 px-2 py-1 rounded-md mr-2"
          >
            <img src="assets/calendar.svg" class="h-4 mr-2" alt="" />
            <p class="text-white text-sm">{{ foglalas?.datum }}</p>
          </div>
          <div
            class="flex items-center border-indigo-600 bg-indigo-800 px-2 py-1 rounded-md"
          >
            <img src="assets/user.svg" class="h-4 mr-1" alt="" />
            <p class="text-white text-sm">{{ foglalas?.fo }}</p>
          </div>
        </div>
        <div class="flex items-center mt-4">
          <img src="assets/marker.svg" class="h-4 mr-1" alt="" />
          <p class="text-sm text-white">{{ foglalas?.cim }}</p>
        </div>
        <img
          class="absolute opacity-5 w-40 right-0 top-0"
          src="assets/puzzle.png"
          alt=""
        />
      </div>
    </div>
  `,
})
export class CardComponent {
  @Input() foglalas: any;
}
