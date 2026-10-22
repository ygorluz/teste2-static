import{c as t}from"./createLucideIcon.D0fz0vB9.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=t("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);function n(r){return String(r||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,"")}function o(r){return Array.isArray(r)?r.map(e=>e&&typeof e=="object"&&e.name?{name:String(e.name),slug:String(e.slug||n(e.name)),description:e.description?String(e.description):void 0}:typeof e=="string"&&e.trim()?{name:e.trim(),slug:n(e)}:null).filter(Boolean):[]}export{a as P,o as n};
