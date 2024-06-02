type Mods = Record<string, boolean | string | undefined>;

export function classNames(cls: string, modsOrAdditional?: Mods | (string | undefined)[], additionalOrMods?: (string | undefined)[] | Mods): string {
  let mods: Mods | undefined;
  let additional: (string | undefined)[] | undefined;

  if (Array.isArray(modsOrAdditional)) {
    additional = modsOrAdditional;
    mods = additionalOrMods as Mods;
  } else {
    mods = modsOrAdditional;
    additional = additionalOrMods as (string | undefined)[];
  }

  return [
    cls,
    ...(additional?.filter(Boolean) || []),
    ...(mods ? Object.entries(mods).filter(([_, value]) => Boolean(value)).map(([key]) => key) : [])
  ].join(' ');
}