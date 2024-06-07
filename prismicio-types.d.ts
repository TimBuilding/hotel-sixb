// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomePageDocumentDataSlicesSlice =
  | CallToActionSlice
  | AmenitiesSlice
  | HeroSlice
  | EventsAndFunctionSlice;

/**
 * Content for Home Page documents
 */
interface HomePageDocumentData {
  /**
   * Slice Zone field in *Home Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomePageDocumentDataSlicesSlice> /**
   * Meta Description field in *Home Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home Page document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomePageDocumentData>,
    "home_page",
    Lang
  >;

type NavigationDocumentDataSlicesSlice = NavigationItemSlice;

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Name field in *Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Logo field in *Navigation*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NavigationDocumentDataSlicesSlice>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type RoomDocumentDataSlicesSlice = PageTitleSlice | RoomsSectionSlice;

/**
 * Content for Room documents
 */
interface RoomDocumentData {
  /**
   * Slice Zone field in *Room*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: room.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<RoomDocumentDataSlicesSlice> /**
   * Meta Description field in *Room*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: room.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Room*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: room.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Room*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: room.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Room document from Prismic
 *
 * - **API ID**: `room`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type RoomDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<RoomDocumentData>, "room", Lang>;

type RoomsDocumentDataSlicesSlice = RoomSlice;

/**
 * Content for RoomsGrid documents
 */
interface RoomsDocumentData {
  /**
   * Slice Zone field in *RoomsGrid*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: rooms.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<RoomsDocumentDataSlicesSlice>;
}

/**
 * RoomsGrid document from Prismic
 *
 * - **API ID**: `rooms`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type RoomsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<RoomsDocumentData>, "rooms", Lang>;

export type AllDocumentTypes =
  | HomePageDocument
  | NavigationDocument
  | RoomDocument
  | RoomsDocument;

/**
 * Primary content in *Amenities → Primary*
 */
export interface AmenitiesSliceDefaultPrimary {
  /**
   * Title field in *Amenities → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: amenities.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Amenities → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: amenities.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Image1 field in *Amenities → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: amenities.primary.image1
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image1: prismic.ImageField<never>;

  /**
   * Image2 field in *Amenities → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: amenities.primary.image2
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image2: prismic.ImageField<never>;

  /**
   * Image3 field in *Amenities → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: amenities.primary.image3
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image3: prismic.ImageField<never>;

  /**
   * ButtonText field in *Amenities → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: amenities.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;

  /**
   * ButtonUrl field in *Amenities → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: amenities.primary.buttonurl
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonurl: prismic.LinkField;
}

/**
 * Default variation for Amenities Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AmenitiesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AmenitiesSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Amenities*
 */
type AmenitiesSliceVariation = AmenitiesSliceDefault;

/**
 * Amenities Shared Slice
 *
 * - **API ID**: `amenities`
 * - **Description**: Amenities
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AmenitiesSlice = prismic.SharedSlice<
  "amenities",
  AmenitiesSliceVariation
>;

/**
 * Primary content in *CallToAction → Primary*
 */
export interface CallToActionSliceDefaultPrimary {
  /**
   * Title field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Content field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * ButtonText field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;

  /**
   * ButtonUrl field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.buttonurl
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonurl: prismic.LinkField;

  /**
   * BackgroundImage field in *CallToAction → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.backgroundimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  backgroundimage: prismic.ImageField<never>;
}

/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CallToActionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation = CallToActionSliceDefault;

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<
  "call_to_action",
  CallToActionSliceVariation
>;

/**
 * Primary content in *EventsAndFunction → Primary*
 */
export interface EventsAndFunctionSliceDefaultPrimary {
  /**
   * Title field in *EventsAndFunction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: events_and_function.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *EventsAndFunction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: events_and_function.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * ButtonText field in *EventsAndFunction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: events_and_function.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;

  /**
   * ButtonUrl field in *EventsAndFunction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: events_and_function.primary.buttonurl
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonurl: prismic.LinkField;

  /**
   * Image1 field in *EventsAndFunction → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: events_and_function.primary.image1
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image1: prismic.ImageField<never>;

  /**
   * Image2 field in *EventsAndFunction → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: events_and_function.primary.image2
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image2: prismic.ImageField<never>;
}

/**
 * Default variation for EventsAndFunction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EventsAndFunctionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<EventsAndFunctionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *EventsAndFunction*
 */
type EventsAndFunctionSliceVariation = EventsAndFunctionSliceDefault;

/**
 * EventsAndFunction Shared Slice
 *
 * - **API ID**: `events_and_function`
 * - **Description**: EventsAndFunction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EventsAndFunctionSlice = prismic.SharedSlice<
  "events_and_function",
  EventsAndFunctionSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Hero field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.hero
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *NavigationItem → Primary*
 */
export interface NavigationItemSliceDefaultPrimary {
  /**
   * Name field in *NavigationItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.primary.name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Link field in *NavigationItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavigationItemSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NavigationItem*
 */
type NavigationItemSliceVariation = NavigationItemSliceDefault;

/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navigation_item`
 * - **Description**: NavigationItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationItemSlice = prismic.SharedSlice<
  "navigation_item",
  NavigationItemSliceVariation
>;

/**
 * Primary content in *PageTitle → Primary*
 */
export interface PageTitleSliceDefaultPrimary {
  /**
   * Title field in *PageTitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page_title.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *PageTitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page_title.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Default variation for PageTitle Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PageTitleSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PageTitleSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *PageTitle*
 */
type PageTitleSliceVariation = PageTitleSliceDefault;

/**
 * PageTitle Shared Slice
 *
 * - **API ID**: `page_title`
 * - **Description**: PageTitle
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PageTitleSlice = prismic.SharedSlice<
  "page_title",
  PageTitleSliceVariation
>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Primary content in *RoomCard → Primary*
 */
export interface RoomSliceDefaultPrimary {
  /**
   * Title field in *RoomCard → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: room.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Price field in *RoomCard → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: room.primary.price
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  price: prismic.KeyTextField;

  /**
   * RoomLink field in *RoomCard → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: room.primary.roomlink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  roomlink: prismic.LinkField;

  /**
   * Image field in *RoomCard → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: room.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * RoomSize field in *RoomCard → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: room.primary.roomsize
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  roomsize: prismic.KeyTextField;

  /**
   * Bed field in *RoomCard → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: room.primary.bed
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  bed: prismic.KeyTextField;

  /**
   * HeadCount field in *RoomCard → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: room.primary.headcount
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  headcount: prismic.KeyTextField;

  /**
   * KidsCount field in *RoomCard → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: room.primary.kidscount
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  kidscount: prismic.KeyTextField;

  /**
   * Breakfast field in *RoomCard → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: room.primary.breakfast
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  breakfast: prismic.BooleanField;

  /**
   * Veranda field in *RoomCard → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: room.primary.veranda
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  veranda: prismic.BooleanField;

  /**
   * Lakeview field in *RoomCard → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: room.primary.lakeview
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  lakeview: prismic.BooleanField;

  /**
   * Balcony field in *RoomCard → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: room.primary.balcony
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  balcony: prismic.BooleanField;
}

/**
 * Default variation for RoomCard Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RoomSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RoomSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RoomCard*
 */
type RoomSliceVariation = RoomSliceDefault;

/**
 * RoomCard Shared Slice
 *
 * - **API ID**: `room`
 * - **Description**: Room
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RoomSlice = prismic.SharedSlice<"room", RoomSliceVariation>;

/**
 * Primary content in *RoomsHomepage → Primary*
 */
export interface RoomsHomepageSliceDefaultPrimary {
  /**
   * Title field in *RoomsHomepage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rooms_homepage.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *RoomsHomepage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rooms_homepage.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * ButtonText field in *RoomsHomepage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rooms_homepage.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;

  /**
   * ButtonLink field in *RoomsHomepage → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: rooms_homepage.primary.buttonlink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonlink: prismic.LinkField;

  /**
   * RoomImage field in *RoomsHomepage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: rooms_homepage.primary.roomimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  roomimage: prismic.ImageField<never>;
}

/**
 * RoomsHomepage-Right variation for RoomsHomepage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RoomsHomepageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RoomsHomepageSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *RoomsHomepage → Primary*
 */
export interface RoomsHomepageSliceRoomsHomepageRightPrimary {
  /**
   * Title field in *RoomsHomepage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rooms_homepage.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *RoomsHomepage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rooms_homepage.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * ButtonLink field in *RoomsHomepage → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: rooms_homepage.primary.buttonlink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonlink: prismic.LinkField;

  /**
   * ButtonText field in *RoomsHomepage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rooms_homepage.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;

  /**
   * RoomImage field in *RoomsHomepage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: rooms_homepage.primary.roomimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  roomimage: prismic.ImageField<never>;
}

/**
 * RoomsHomepage-Left variation for RoomsHomepage Slice
 *
 * - **API ID**: `roomsHomepageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RoomsHomepageSliceRoomsHomepageRight = prismic.SharedSliceVariation<
  "roomsHomepageRight",
  Simplify<RoomsHomepageSliceRoomsHomepageRightPrimary>,
  never
>;

/**
 * Slice variation for *RoomsHomepage*
 */
type RoomsHomepageSliceVariation =
  | RoomsHomepageSliceDefault
  | RoomsHomepageSliceRoomsHomepageRight;

/**
 * RoomsHomepage Shared Slice
 *
 * - **API ID**: `rooms_homepage`
 * - **Description**: RoomsHomepage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RoomsHomepageSlice = prismic.SharedSlice<
  "rooms_homepage",
  RoomsHomepageSliceVariation
>;

/**
 * Default variation for RoomsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RoomsSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *RoomsSection*
 */
type RoomsSectionSliceVariation = RoomsSectionSliceDefault;

/**
 * RoomsSection Shared Slice
 *
 * - **API ID**: `rooms_section`
 * - **Description**: RoomsSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RoomsSectionSlice = prismic.SharedSlice<
  "rooms_section",
  RoomsSectionSliceVariation
>;

/**
 * Primary content in *Testimonials → Primary*
 */
export interface TestimonialsSliceDefaultPrimary {
  /**
   * Title field in *Testimonials → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * SubTitle  field in *Testimonials → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Testimony field in *Testimonials → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.primary.testimony
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  testimony: prismic.KeyTextField;

  /**
   * Witness field in *Testimonials → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.primary.witness
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  witness: prismic.KeyTextField;
}

/**
 * Default variation for Testimonials Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestimonialsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Testimonials*
 */
type TestimonialsSliceVariation = TestimonialsSliceDefault;

/**
 * Testimonials Shared Slice
 *
 * - **API ID**: `testimonials`
 * - **Description**: Testimonials
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSlice = prismic.SharedSlice<
  "testimonials",
  TestimonialsSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomePageDocument,
      HomePageDocumentData,
      HomePageDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataSlicesSlice,
      RoomDocument,
      RoomDocumentData,
      RoomDocumentDataSlicesSlice,
      RoomsDocument,
      RoomsDocumentData,
      RoomsDocumentDataSlicesSlice,
      AllDocumentTypes,
      AmenitiesSlice,
      AmenitiesSliceDefaultPrimary,
      AmenitiesSliceVariation,
      AmenitiesSliceDefault,
      CallToActionSlice,
      CallToActionSliceDefaultPrimary,
      CallToActionSliceVariation,
      CallToActionSliceDefault,
      EventsAndFunctionSlice,
      EventsAndFunctionSliceDefaultPrimary,
      EventsAndFunctionSliceVariation,
      EventsAndFunctionSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      NavigationItemSlice,
      NavigationItemSliceDefaultPrimary,
      NavigationItemSliceVariation,
      NavigationItemSliceDefault,
      PageTitleSlice,
      PageTitleSliceDefaultPrimary,
      PageTitleSliceVariation,
      PageTitleSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      RoomSlice,
      RoomSliceDefaultPrimary,
      RoomSliceVariation,
      RoomSliceDefault,
      RoomsHomepageSlice,
      RoomsHomepageSliceDefaultPrimary,
      RoomsHomepageSliceRoomsHomepageRightPrimary,
      RoomsHomepageSliceVariation,
      RoomsHomepageSliceDefault,
      RoomsHomepageSliceRoomsHomepageRight,
      RoomsSectionSlice,
      RoomsSectionSliceVariation,
      RoomsSectionSliceDefault,
      TestimonialsSlice,
      TestimonialsSliceDefaultPrimary,
      TestimonialsSliceVariation,
      TestimonialsSliceDefault,
    };
  }
}
