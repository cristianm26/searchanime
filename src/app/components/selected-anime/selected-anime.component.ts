import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { MyAnime } from '../../interfaces/api-animes';

@Component({
  selector: 'app-selected-anime',
  templateUrl: './selected-anime.component.html',
  styleUrls: ['./selected-anime.component.css'],
})
export class SelectedAnimeComponent implements OnInit {
  animes_selected: MyAnime[] = [];
  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animes_selected =
      JSON.parse(localStorage.getItem('animes_selected') as '[]') || [];
    this.animeService.getAnimeSelected().subscribe((results) => {
      this.animes_selected.push(results);
      localStorage.setItem(
        'animes_selected',
        JSON.stringify(this.animes_selected)
      );
    });
  }

  incrementarEpisodio(anime: MyAnime) {
    anime.watched_episodes++;
    localStorage.setItem(
      'animes_selected',
      JSON.stringify(this.animes_selected)
    );
  }
  disminuirEpisodio(anime: MyAnime) {
    anime.watched_episodes--;
    localStorage.setItem(
      'animes_selected',
      JSON.stringify(this.animes_selected)
    );
  }
}
