import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.css'],
})
export class SearchAnimeComponent implements OnInit {
  searchTerm: string = '';
  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {}

  search() {
    this.animeService.getAnimes(this.searchTerm).subscribe((data) => {
      console.log(data);
      this.animeService.addResultAnime(data.data);
      this.searchTerm = '';
    });
  }
}
