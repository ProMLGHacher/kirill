import { Material } from "@/entities/materail";

export type MemorialItemId = Brand<string, 'PortfolioItemId'>

export type MemorialItem = {
    id: MemorialItemId;
    image: string;
    title: string;
    materials: Material[]
    description?: string
}

