import { Material } from "@/entities/materail";

export type PortfolioItemId = Brand<string, 'PortfolioItemId'>

export type PortfolioItem = {
    id: PortfolioItemId;
    images: string[];
    title: string;
    place: string;
    materials: Material[]
}

