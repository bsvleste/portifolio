// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type MeusprojetosDocumentDataSlicesSlice = TodosOsMeusProjetosSlice;

/**
 * Content for MeusProjetos documents
 */
interface MeusprojetosDocumentData {
  /**
   * Heading field in *MeusProjetos*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: meusprojetos.heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Slice Zone field in *MeusProjetos*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: meusprojetos.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<MeusprojetosDocumentDataSlicesSlice>;
}

/**
 * MeusProjetos document from Prismic
 *
 * - **API ID**: `meusprojetos`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MeusprojetosDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<MeusprojetosDocumentData>,
    "meusprojetos",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | ContatosSlice
  | MeusProjetosSlice
  | AboutSlice
  | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type PaginaprojetosDocumentDataSlicesSlice = MeusProjetosSlice;

/**
 * Content for PaginaProjetos documents
 */
interface PaginaprojetosDocumentData {
  /**
   * Heading field in *PaginaProjetos*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: paginaprojetos.heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Slice Zone field in *PaginaProjetos*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: paginaprojetos.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PaginaprojetosDocumentDataSlicesSlice> /**
   * Meta Title field in *PaginaProjetos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: paginaprojetos.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *PaginaProjetos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: paginaprojetos.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *PaginaProjetos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: paginaprojetos.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * PaginaProjetos document from Prismic
 *
 * - **API ID**: `paginaprojetos`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PaginaprojetosDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<PaginaprojetosDocumentData>,
    "paginaprojetos",
    Lang
  >;

type ProjetosDocumentDataSlicesSlice = ProjetosSlice | MeusProjetosSlice;

/**
 * Content for Projetos documents
 */
interface ProjetosDocumentData {
  /**
   * Title field in *Projetos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projetos.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Heading field in *Projetos*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: projetos.heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Slice Zone field in *Projetos*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: projetos.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjetosDocumentDataSlicesSlice> /**
   * Meta Title field in *Projetos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: projetos.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Projetos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: projetos.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Projetos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projetos.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Projetos document from Prismic
 *
 * - **API ID**: `projetos`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjetosDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjetosDocumentData>,
    "projetos",
    Lang
  >;

export type AllDocumentTypes =
  | MeusprojetosDocument
  | PageDocument
  | PaginaprojetosDocument
  | ProjetosDocument;

/**
 * Item in *About → Default → Primary → Icons*
 */
export interface AboutSliceDefaultPrimaryIconsItem {
  /**
   * icon field in *About → Default → Primary → Icons*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.icons[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<
    "GITHUB" | "HTML" | "CSS" | "JAVASCRIPT" | "REACT" | "ANGULAR" | "NODE"
  >;
}

/**
 * Primary content in *About → Default → Primary*
 */
export interface AboutSliceDefaultPrimary {
  /**
   * Background field in *About → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.background
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background: prismic.ImageField<never>;

  /**
   * Body field in *About → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Description field in *About → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Icons field in *About → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.icons[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  icons: prismic.GroupField<Simplify<AboutSliceDefaultPrimaryIconsItem>>;
}

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault;

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<"about", AboutSliceVariation>;

/**
 * Item in *Contatos → Default → Primary → links*
 */
export interface ContatosSliceDefaultPrimaryLinksItem {
  /**
   * Link field in *Contatos → Default → Primary → links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: contatos.default.primary.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * LinkLabel field in *Contatos → Default → Primary → links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contatos.default.primary.links[].linklabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linklabel: prismic.KeyTextField;

  /**
   * icones field in *Contatos → Default → Primary → links*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: contatos.default.primary.links[].icones
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icones: prismic.SelectField<"LINKEDIN" | "GITHUB" | "INSTAGRAM" | "E-MAIL">;
}

/**
 * Primary content in *Contatos → Default → Primary*
 */
export interface ContatosSliceDefaultPrimary {
  /**
   * Body field in *Contatos → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contatos.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * links field in *Contatos → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: contatos.default.primary.links[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<ContatosSliceDefaultPrimaryLinksItem>>;
}

/**
 * Default variation for Contatos Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContatosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContatosSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Contatos*
 */
type ContatosSliceVariation = ContatosSliceDefault;

/**
 * Contatos Shared Slice
 *
 * - **API ID**: `contatos`
 * - **Description**: Contatos
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContatosSlice = prismic.SharedSlice<
  "contatos",
  ContatosSliceVariation
>;

/**
 * Item in *Hero → Default → Primary → Heros*
 */
export interface HeroSliceDefaultPrimaryHerosItem {
  /**
   * Description field in *Hero → Default → Primary → Heros*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heros[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * imagem field in *Hero → Default → Primary → Heros*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heros[].imagem
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem: prismic.ImageField<never>;

  /**
   * link field in *Hero → Default → Primary → Heros*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heros[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.ContentRelationshipField;
}

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heros field in *Hero → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heros[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  heros: prismic.GroupField<Simplify<HeroSliceDefaultPrimaryHerosItem>>;
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
 * Primary content in *Hero → Image Right → Primary*
 */
export interface HeroSliceImageRightPrimary {
  /**
   * eyebrowHeadline field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero.imageRight.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Image Right variation for Hero Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceImageRight = prismic.SharedSliceVariation<
  "imageRight",
  Simplify<HeroSliceImageRightPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceImageRight;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *Destaques → TodosProjetos → Primary → RepeatProjetos*
 */
export interface MeusProjetosSliceTodosProjetosPrimaryRepeatprojetosItem {
  /**
   * Imagem field in *Destaques → TodosProjetos → Primary → RepeatProjetos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: meus_projetos.todosProjetos.primary.repeatprojetos[].imagem
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem: prismic.ImageField<never>;

  /**
   * Description field in *Destaques → TodosProjetos → Primary → RepeatProjetos*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: meus_projetos.todosProjetos.primary.repeatprojetos[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Link field in *Destaques → TodosProjetos → Primary → RepeatProjetos*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: meus_projetos.todosProjetos.primary.repeatprojetos[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Name field in *Destaques → TodosProjetos → Primary → RepeatProjetos*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: meus_projetos.todosProjetos.primary.repeatprojetos[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * DescriptionLink field in *Destaques → TodosProjetos → Primary → RepeatProjetos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: meus_projetos.todosProjetos.primary.repeatprojetos[].descriptionlink
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descriptionlink: prismic.KeyTextField;
}

/**
 * Primary content in *Destaques → TodosProjetos → Primary*
 */
export interface MeusProjetosSliceTodosProjetosPrimary {
  /**
   * Title field in *Destaques → TodosProjetos → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: meus_projetos.todosProjetos.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * LabelGotoMeusProjetos field in *Destaques → TodosProjetos → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: meus_projetos.todosProjetos.primary.labelgotomeusprojetos
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  labelgotomeusprojetos: prismic.KeyTextField;

  /**
   * GotoProjetos field in *Destaques → TodosProjetos → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: meus_projetos.todosProjetos.primary.gotoprojetos
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  gotoprojetos: prismic.LinkField;

  /**
   * RepeatProjetos field in *Destaques → TodosProjetos → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: meus_projetos.todosProjetos.primary.repeatprojetos[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  repeatprojetos: prismic.GroupField<
    Simplify<MeusProjetosSliceTodosProjetosPrimaryRepeatprojetosItem>
  >;
}

/**
 * TodosProjetos variation for Destaques Slice
 *
 * - **API ID**: `todosProjetos`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MeusProjetosSliceTodosProjetos = prismic.SharedSliceVariation<
  "todosProjetos",
  Simplify<MeusProjetosSliceTodosProjetosPrimary>,
  never
>;

/**
 * Slice variation for *Destaques*
 */
type MeusProjetosSliceVariation = MeusProjetosSliceTodosProjetos;

/**
 * Destaques Shared Slice
 *
 * - **API ID**: `meus_projetos`
 * - **Description**: MeusProjetos
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MeusProjetosSlice = prismic.SharedSlice<
  "meus_projetos",
  MeusProjetosSliceVariation
>;

/**
 * Primary content in *Projetos → Default → Primary*
 */
export interface ProjetosSliceDefaultPrimary {
  /**
   * Imagem field in *Projetos → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projetos.default.primary.imagem
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem: prismic.ImageField<never>;

  /**
   * Body field in *Projetos → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projetos.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Heading field in *Projetos → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projetos.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;
}

/**
 * Default variation for Projetos Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjetosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjetosSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Projetos*
 */
type ProjetosSliceVariation = ProjetosSliceDefault;

/**
 * Projetos Shared Slice
 *
 * - **API ID**: `projetos`
 * - **Description**: Projetos
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjetosSlice = prismic.SharedSlice<
  "projetos",
  ProjetosSliceVariation
>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
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
 * Item in *TodosOsMeusProjetos → Default → Primary → Projetos*
 */
export interface TodosOsMeusProjetosSliceDefaultPrimaryProjetosItem {
  /**
   * imagem field in *TodosOsMeusProjetos → Default → Primary → Projetos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: todos_os_meus_projetos.default.primary.projetos[].imagem
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem: prismic.ImageField<never>;

  /**
   * Description field in *TodosOsMeusProjetos → Default → Primary → Projetos*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: todos_os_meus_projetos.default.primary.projetos[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * link field in *TodosOsMeusProjetos → Default → Primary → Projetos*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: todos_os_meus_projetos.default.primary.projetos[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.ContentRelationshipField;
}

/**
 * Primary content in *TodosOsMeusProjetos → Default → Primary*
 */
export interface TodosOsMeusProjetosSliceDefaultPrimary {
  /**
   * Projetos field in *TodosOsMeusProjetos → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: todos_os_meus_projetos.default.primary.projetos[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  projetos: prismic.GroupField<
    Simplify<TodosOsMeusProjetosSliceDefaultPrimaryProjetosItem>
  >;
}

/**
 * Default variation for TodosOsMeusProjetos Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TodosOsMeusProjetosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TodosOsMeusProjetosSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TodosOsMeusProjetos*
 */
type TodosOsMeusProjetosSliceVariation = TodosOsMeusProjetosSliceDefault;

/**
 * TodosOsMeusProjetos Shared Slice
 *
 * - **API ID**: `todos_os_meus_projetos`
 * - **Description**: TodosOsMeusProjetos
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TodosOsMeusProjetosSlice = prismic.SharedSlice<
  "todos_os_meus_projetos",
  TodosOsMeusProjetosSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      MeusprojetosDocument,
      MeusprojetosDocumentData,
      MeusprojetosDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PaginaprojetosDocument,
      PaginaprojetosDocumentData,
      PaginaprojetosDocumentDataSlicesSlice,
      ProjetosDocument,
      ProjetosDocumentData,
      ProjetosDocumentDataSlicesSlice,
      AllDocumentTypes,
      AboutSlice,
      AboutSliceDefaultPrimaryIconsItem,
      AboutSliceDefaultPrimary,
      AboutSliceVariation,
      AboutSliceDefault,
      ContatosSlice,
      ContatosSliceDefaultPrimaryLinksItem,
      ContatosSliceDefaultPrimary,
      ContatosSliceVariation,
      ContatosSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimaryHerosItem,
      HeroSliceDefaultPrimary,
      HeroSliceImageRightPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceImageRight,
      MeusProjetosSlice,
      MeusProjetosSliceTodosProjetosPrimaryRepeatprojetosItem,
      MeusProjetosSliceTodosProjetosPrimary,
      MeusProjetosSliceVariation,
      MeusProjetosSliceTodosProjetos,
      ProjetosSlice,
      ProjetosSliceDefaultPrimary,
      ProjetosSliceVariation,
      ProjetosSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      TodosOsMeusProjetosSlice,
      TodosOsMeusProjetosSliceDefaultPrimaryProjetosItem,
      TodosOsMeusProjetosSliceDefaultPrimary,
      TodosOsMeusProjetosSliceVariation,
      TodosOsMeusProjetosSliceDefault,
    };
  }
}
