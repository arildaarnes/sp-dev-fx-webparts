declare interface ISearchWebPartStrings {
  SearchQuerySettingsGroupName: string;
  SearchSettingsGroupName: string;
  SearchQueryKeywordsFieldLabel: string;
  SearchQueryKeywordsFieldDescription: string;
  QueryTemplateFieldLabel: string;
  SelectedPropertiesFieldLabel: string;
  SelectedPropertiesFieldDescription: string;
  LoadingMessage: string;
  MaxResultsCount: string;
  NoResultMessage: string;
  RefinersFieldLabel: string;
  RefinersFieldDescription: string;
  FilterPanelTitle: string;
  FilterResultsButtonLabel: string;
  SelectedFiltersLabel: string;
  ApplyAllFiltersLabel: string;
  RemoveAllFiltersLabel: string;
  ShowPagingLabel: string;
  ShowResultsCountLabel: string;
  ShowBlankLabel: string;
  ShowBlankEditInfoMessage: string;
  NoFilterConfiguredLabel: string;
  SearchQueryPlaceHolderText: string;
  EmptyFieldErrorMessage: string;
  PlaceHolderEditLabel: string;
  PlaceHolderConfigureBtnLabel: string;
  PlaceHolderIconText: string;
  PlaceHolderDescription: string;
  ResultSourceIdLabel: string;
  InvalidResultSourceIdMessage: string;
  UseSearchBoxQueryLabel: string;
  EnableQueryRulesLabel: string;
  StylingSettingsGroupName: string;
  CountMessageShort: string;
  CountMessageLong: string;
  CancelButtonText: string;
  DialogButtonLabel: string;
  DialogButtonText: string;
  DialogTitle: string;
  SaveButtonText: string;
  ListLayoutOption: string;
  TilesLayoutOption: string;
  CustomLayoutOption: string;
  TemplateUrlFieldLabel: string;
  TemplateUrlPlaceholder: string;
  ErrorTemplateExtension: string;
  ErrorTemplateResolve: string;
}

declare module 'SearchWebPartStrings' {
  const strings: ISearchWebPartStrings;
  export = strings;
}
