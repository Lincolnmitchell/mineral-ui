export interface ComponentPropertyDefinition {
  name:string;
  isRequired:boolean;
  defaultValue?:PropertyDefaultValue;
  description:string;
  type:PropertyType;
}

export interface PropertyDefaultValue {
  value:any;
}

export interface PropertyType<T extends keyof PropertyTypeStructureMap = keyof PropertyTypeStructureMap> {
  name:T;
  structure:PropertyTypeStructureMap[T];
}

export type PropertyTypeName = keyof PropertyTypeStructureMap;

export interface PropertyTypeStructureMap {
  any:{};
  array:{};
  boolean:{};
  custom:{};
  element:{};
  func:{};
  literal:{ value:string };
  node:{};
  number:{};
  object:{};
  shape:{ [propName:string]:PropertyType };
  string:{};
  symbol:{};
  typedArray:{ memberType:PropertyType };
  dictionary:{ valueType:PropertyType };
  union:{ elements:PropertyType[] };
}
