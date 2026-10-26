import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';
import { ServiceComics } from '../../services/service.comic';

@Component({
  selector: 'app-comic-component',
  standalone: false,
  styleUrl: './comic-component.css',
  templateUrl: './comic-component.html',
})
export class ComicComponent implements OnInit{
  public comics!: Array<Comic>;
  constructor(private _cdr: ChangeDetectorRef, private _service: ServiceComics){

  }
  async ngOnInit(): Promise<void> {
    this.comics = await this._service.getComicsAsync();
    this._cdr.detectChanges()
  }
}
