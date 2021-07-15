import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'autocomplete-filter-example',
  templateUrl: 'autocomplete-filter-example.html',
  styleUrls: ['autocomplete-filter-example.css'],
})
export class AutocompleteFilterExample implements OnInit {
  listTimezone: any[] = [
    {
        code: 1,
        abbr: 'A',
        name: 'Alpha Time Zone',
        offset: 'UTC+1'
    },
    {
        code: 2,
        abbr: 'ACDT',
        name: 'Australian Central Daylight Time',
        offset: 'UTC+10:30'
    },
    {
        code: 3,
        abbr: 'ACST',
        name: 'Australian Central Standard Time',
        offset: 'UTC+9:30'
    },
    {
        code: 4,
        abbr: 'ACT',
        name: 'Acre Time',
        offset: 'UTC-5'
    },
    {
        code: 5,
        abbr: 'ACT',
        name: 'Australian Central Time',
        offset: 'UTC+9:30/+10:30'
    },
    {
        code: 6,
        abbr: 'ACWST',
        name: 'Australian Central Western Standard Time',
        offset: 'UTC+8:45'
    },
    {
        code: 7,
        abbr: 'ADT',
        name: 'Arabia Daylight Time',
        offset: 'UTC+4'
    },
    {
        code: 8,
        abbr: 'ADT',
        name: 'Atlantic Daylight Time',
        offset: 'UTC-3'
    },
    {
        code: 9,
        abbr: 'AEDT',
        name: 'Australian Eastern Daylight Time',
        offset: 'UTC+11'
    },
    {
        code: 10,
        abbr: 'AEST',
        name: 'Australian Eastern Standard Time',
        offset: 'UTC+10'
    },
    {
        code: 11,
        abbr: 'AET',
        name: 'Australian Eastern Time',
        offset: 'UTC+10:00/+11:00'
    },
    {
        code: 12,
        abbr: 'AFT',
        name: 'Afghanistan Time',
        offset: 'UTC+4:30'
    },
    {
        code: 13,
        abbr: 'AKDT',
        name: 'Alaska Daylight Time',
        offset: 'UTC-8'
    },
    {
        code: 14,
        abbr: 'AKST',
        name: 'Alaska Standard Time',
        offset: 'UTC-9'
    },
    {
        code: 15,
        abbr: 'ALMT',
        name: 'Alma-Ata Time',
        offset: 'UTC+6'
    },
    {
        code: 16,
        abbr: 'AMST',
        name: 'Amazon Summer Time',
        offset: 'UTC-3'
    },
    {
        code: 17,
        abbr: 'AMST',
        name: 'Armenia Summer Time',
        offset: 'UTC+5'
    },
    {
        code: 18,
        abbr: 'AMT',
        name: 'Amazon Time',
        offset: 'UTC-4'
    },
    {
        code: 19,
        abbr: 'AMT',
        name: 'Armenia Time',
        offset: 'UTC+4'
    },
    {
        code: 20,
        abbr: 'ANAST',
        name: 'Anadyr Summer Time',
        offset: 'UTC+12'
    },
    {
        code: 21,
        abbr: 'ANAT',
        name: 'Anadyr Time',
        offset: 'UTC+12'
    },
    {
        code: 22,
        abbr: 'AQTT',
        name: 'Aqtobe Time',
        offset: 'UTC+5'
    },
    {
        code: 23,
        abbr: 'ART',
        name: 'Argentina Time',
        offset: 'UTC-3'
    },
    {
        code: 24,
        abbr: 'AST',
        name: 'Arabia Standard Time',
        offset: 'UTC+3'
    },
    {
        code: 25,
        abbr: 'AST',
        name: 'Atlantic Standard Time',
        offset: 'UTC-4'
    },
    {
        code: 26,
        abbr: 'AT',
        name: 'Atlantic Time',
        offset: 'UTC-4:00/-3:00'
    },
    {
        code: 27,
        abbr: 'AWDT',
        name: 'Australian Western Daylight Time',
        offset: 'UTC+9'
    },
    {
        code: 28,
        abbr: 'AWST',
        name: 'Australian Western Standard Time',
        offset: 'UTC+8'
    },
    {
        code: 29,
        abbr: 'AZOST',
        name: 'Azores Summer Time',
        offset: 'UTC+0'
    },
    {
        code: 30,
        abbr: 'AZOT',
        name: 'Azores Time',
        offset: 'UTC-1'
    },
    {
        code: 31,
        abbr: 'AZST',
        name: 'Azerbaijan Summer Time',
        offset: 'UTC+5'
    },
    {
        code: 32,
        abbr: 'AZT',
        name: 'Azerbaijan Time',
        offset: 'UTC+4'
    },
    {
        code: 33,
        abbr: 'AoE',
        name: 'Anywhere on Earth',
        offset: 'UTC-12'
    },
    {
        code: 34,
        abbr: 'B',
        name: 'Bravo Time Zone',
        offset: 'UTC+2'
    },
    {
        code: 35,
        abbr: 'BNT',
        name: 'Brunei Darussalam Time',
        offset: 'UTC+8'
    },
    {
        code: 36,
        abbr: 'BOT',
        name: 'Bolivia Time',
        offset: 'UTC-4'
    },
    {
        code: 37,
        abbr: 'BRST',
        name: 'Brasília Summer Time',
        offset: 'UTC-2'
    },
    {
        code: 38,
        abbr: 'BRT',
        name: 'Brasília Time',
        offset: 'UTC-3'
    },
    {
        code: 39,
        abbr: 'BST',
        name: 'Bangladesh Standard Time',
        offset: 'UTC+6'
    },
    {
        code: 40,
        abbr: 'BST',
        name: 'Bougainville Standard Time',
        offset: 'UTC+11'
    },
    {
        code: 41,
        abbr: 'BST',
        name: 'British Summer Time',
        offset: 'UTC+1'
    },
    {
        code: 42,
        abbr: 'BTT',
        name: 'Bhutan Time',
        offset: 'UTC+6'
    },
    {
        code: 43,
        abbr: 'C',
        name: 'Charlie Time Zone',
        offset: 'UTC+3'
    },
    {
        code: 44,
        abbr: 'CAST',
        name: 'Casey Time',
        offset: 'UTC+8'
    },
    {
        code: 45,
        abbr: 'CAT',
        name: 'Central Africa Time',
        offset: 'UTC+2'
    },
    {
        code: 46,
        abbr: 'CCT',
        name: 'Cocos Islands Time',
        offset: 'UTC+6:30'
    },
    {
        code: 47,
        abbr: 'CDT',
        name: 'Central Daylight Time',
        offset: 'UTC-5'
    },
    {
        code: 48,
        abbr: 'CDT',
        name: 'Cuba Daylight Time',
        offset: 'UTC-4'
    },
    {
        code: 49,
        abbr: 'CEST',
        name: 'Central European Summer Time',
        offset: 'UTC+2'
    },
    {
        code: 50,
        abbr: 'CET',
        name: 'Central European Time',
        offset: 'UTC+1'
    },
    {
        code: 51,
        abbr: 'CHADT',
        name: 'Chatham Island Daylight Time',
        offset: 'UTC+13:45'
    },
    {
        code: 52,
        abbr: 'CHAST',
        name: 'Chatham Island Standard Time',
        offset: 'UTC+12:45'
    },
    {
        code: 53,
        abbr: 'CHOST',
        name: 'Choibalsan Summer Time',
        offset: 'UTC+9'
    },
    {
        code: 54,
        abbr: 'CHOT',
        name: 'Choibalsan Time',
        offset: 'UTC+8'
    },
    {
        code: 55,
        abbr: 'CHUT',
        name: 'Chuuk Time',
        offset: 'UTC+10'
    },
    {
        code: 56,
        abbr: 'CIDST',
        name: 'Cayman Islands Daylight Saving Time',
        offset: 'UTC-4'
    },
    {
        code: 57,
        abbr: 'CIST',
        name: 'Cayman Islands Standard Time',
        offset: 'UTC-5'
    },
    {
        code: 58,
        abbr: 'CKT',
        name: 'Cook Island Time',
        offset: 'UTC-10'
    },
    {
        code: 59,
        abbr: 'CLST',
        name: 'Chile Summer Time',
        offset: 'UTC-3'
    },
    {
        code: 60,
        abbr: 'CLT',
        name: 'Chile Standard Time',
        offset: 'UTC-4'
    },
    {
        code: 61,
        abbr: 'COT',
        name: 'Colombia Time',
        offset: 'UTC-5'
    },
    {
        code: 62,
        abbr: 'CST',
        name: 'Central Standard Time',
        offset: 'UTC-6'
    },
    {
        code: 63,
        abbr: 'CST',
        name: 'China Standard Time',
        offset: 'UTC+8'
    },
    {
        code: 64,
        abbr: 'CST',
        name: 'Cuba Standard Time',
        offset: 'UTC-5'
    },
    {
        code: 65,
        abbr: 'CT',
        name: 'Central Time',
        offset: 'UTC-6:00/-5:00'
    },
    {
        code: 66,
        abbr: 'CVT',
        name: 'Cape Verde Time',
        offset: 'UTC-1'
    },
    {
        code: 67,
        abbr: 'CXT',
        name: 'Christmas Island Time',
        offset: 'UTC+7'
    },
    {
        code: 68,
        abbr: 'ChST',
        name: 'Chamorro Standard Time',
        offset: 'UTC+10'
    },
    {
        code: 69,
        abbr: 'D',
        name: 'Delta Time Zone',
        offset: 'UTC+4'
    },
    {
        code: 70,
        abbr: 'DAVT',
        name: 'Davis Time',
        offset: 'UTC+7'
    },
    {
        code: 71,
        abbr: 'DDUT',
        name: `Dumont-d'Urville Time`,
        offset: 'UTC+10'
    },
    {
        code: 72,
        abbr: 'E',
        name: 'Echo Time Zone',
        offset: 'UTC+5'
    },
    {
        code: 73,
        abbr: 'EASST',
        name: 'Easter Island Summer Time',
        offset: 'UTC-5'
    },
    {
        code: 74,
        abbr: 'EAST',
        name: 'Easter Island Standard Time',
        offset: 'UTC-6'
    },
    {
        code: 75,
        abbr: 'EAT',
        name: 'Eastern Africa Time',
        offset: 'UTC+3'
    },
    {
        code: 76,
        abbr: 'ECT',
        name: 'Ecuador Time',
        offset: 'UTC-5'
    },
    {
        code: 77,
        abbr: 'EDT',
        name: 'Eastern Daylight Time',
        offset: 'UTC-4'
    },
    {
        code: 78,
        abbr: 'EEST',
        name: 'Eastern European Summer Time',
        offset: 'UTC+3'
    },
    {
        code: 79,
        abbr: 'EET',
        name: 'Eastern European Time',
        offset: 'UTC+2'
    },
    {
        code: 80,
        abbr: 'EGST',
        name: 'Eastern Greenland Summer Time',
        offset: 'UTC+0'
    },
    {
        code: 81,
        abbr: 'EGT',
        name: 'East Greenland Time',
        offset: 'UTC-1'
    },
    {
        code: 82,
        abbr: 'EST',
        name: 'Eastern Standard Time',
        offset: 'UTC-5'
    },
    {
        code: 83,
        abbr: 'ET',
        name: 'Eastern Time',
        offset: 'UTC-5:00/-4:00'
    },
    {
        code: 84,
        abbr: 'F',
        name: 'Foxtrot Time Zone',
        offset: 'UTC+6'
    },
    {
        code: 85,
        abbr: 'FET',
        name: 'Further-Eastern European Time',
        offset: 'UTC+3'
    },
    {
        code: 86,
        abbr: 'FJST',
        name: 'Fiji Summer Time',
        offset: 'UTC+13'
    },
    {
        code: 87,
        abbr: 'FJT',
        name: 'Fiji Time',
        offset: 'UTC+12'
    },
    {
        code: 88,
        abbr: 'FKST',
        name: 'Falkland Islands Summer Time',
        offset: 'UTC-3'
    },
    {
        code: 89,
        abbr: 'FKT',
        name: 'Falkland Island Time',
        offset: 'UTC-4'
    },
    {
        code: 90,
        abbr: 'FNT',
        name: 'Fernando de Noronha Time',
        offset: 'UTC-2'
    },
    {
        code: 91,
        abbr: 'G',
        name: 'Golf Time Zone',
        offset: 'UTC+7'
    },
    {
        code: 92,
        abbr: 'GALT',
        name: 'Galapagos Time',
        offset: 'UTC-6'
    },
    {
        code: 93,
        abbr: 'GAMT',
        name: 'Gambier Time',
        offset: 'UTC-9'
    },
    {
        code: 94,
        abbr: 'GET',
        name: 'Georgia Standard Time',
        offset: 'UTC+4'
    },
    {
        code: 95,
        abbr: 'GFT',
        name: 'French Guiana Time',
        offset: 'UTC-3'
    },
    {
        code: 96,
        abbr: 'GILT',
        name: 'Gilbert Island Time',
        offset: 'UTC+12'
    },
    {
        code: 97,
        abbr: 'GMT',
        name: 'Greenwich Mean Time',
        offset: 'UTC+0'
    },
    {
        code: 98,
        abbr: 'GST',
        name: 'Gulf Standard Time',
        offset: 'UTC+4'
    },
    {
        code: 99,
        abbr: 'GST',
        name: 'South Georgia Time',
        offset: 'UTC-2'
    },
    {
        code: 100,
        abbr: 'GYT',
        name: 'Guyana Time',
        offset: 'UTC-4'
    },
    {
        code: 101,
        abbr: 'H',
        name: 'Hotel Time Zone',
        offset: 'UTC+8'
    },
    {
        code: 102,
        abbr: 'HDT',
        name: 'Hawaii-Aleutian Daylight Time',
        offset: 'UTC-9'
    },
    {
        code: 103,
        abbr: 'HKT',
        name: 'Hong Kong Time',
        offset: 'UTC+8'
    },
    {
        code: 104,
        abbr: 'HOVST',
        name: 'Hovd Summer Time',
        offset: 'UTC+8'
    },
    {
        code: 105,
        abbr: 'HOVT',
        name: 'Hovd Time',
        offset: 'UTC+7'
    },
    {
        code: 106,
        abbr: 'HST',
        name: 'Hawaii Standard Time',
        offset: 'UTC-10'
    },
    {
        code: 107,
        abbr: 'I',
        name: 'India Time Zone',
        offset: 'UTC+9'
    },
    {
        code: 108,
        abbr: 'ICT',
        name: 'Indochina Time',
        offset: 'UTC+7'
    },
    {
        code: 109,
        abbr: 'IDT',
        name: 'Israel Daylight Time',
        offset: 'UTC+3'
    },
    {
        code: 110,
        abbr: 'IOT',
        name: 'Indian Chagos Time',
        offset: 'UTC+6'
    },
    {
        code: 111,
        abbr: 'IRDT',
        name: 'Iran Daylight Time',
        offset: 'UTC+4:30'
    },
    {
        code: 112,
        abbr: 'IRKST',
        name: 'Irkutsk Summer Time',
        offset: 'UTC+9'
    },
    {
        code: 113,
        abbr: 'IRKT',
        name: 'Irkutsk Time',
        offset: 'UTC+8'
    },
    {
        code: 114,
        abbr: 'IRST',
        name: 'Iran Standard Time',
        offset: 'UTC+3:30'
    },
    {
        code: 115,
        abbr: 'IST',
        name: 'India Standard Time',
        offset: 'UTC+5:30'
    },
    {
        code: 116,
        abbr: 'IST',
        name: 'Irish Standard Time',
        offset: 'UTC+1'
    },
    {
        code: 117,
        abbr: 'IST',
        name: 'Israel Standard Time',
        offset: 'UTC+2'
    },
    {
        code: 118,
        abbr: 'JST',
        name: 'Japan Standard Time',
        offset: 'UTC+9'
    },
    {
        code: 119,
        abbr: 'K',
        name: 'Kilo Time Zone',
        offset: 'UTC+10'
    },
    {
        code: 120,
        abbr: 'KGT',
        name: 'Kyrgyzstan Time',
        offset: 'UTC+6'
    },
    {
        code: 121,
        abbr: 'KOST',
        name: 'Kosrae Time',
        offset: 'UTC+11'
    },
    {
        code: 122,
        abbr: 'KRAST',
        name: 'Krasnoyarsk Summer Time',
        offset: 'UTC+8'
    },
    {
        code: 123,
        abbr: 'KRAT',
        name: 'Krasnoyarsk Time',
        offset: 'UTC+7'
    },
    {
        code: 124,
        abbr: 'KST',
        name: 'Korea Standard Time',
        offset: 'UTC+9'
    },
    {
        code: 125,
        abbr: 'KUYT',
        name: 'Kuybyshev Time',
        offset: 'UTC+4'
    },
    {
        code: 126,
        abbr: 'L',
        name: 'Lima Time Zone',
        offset: 'UTC+11'
    },
    {
        code: 127,
        abbr: 'LHDT',
        name: 'Lord Howe Daylight Time',
        offset: 'UTC+11'
    },
    {
        code: 128,
        abbr: 'LHST',
        name: 'Lord Howe Standard Time',
        offset: 'UTC+10:30'
    },
    {
        code: 129,
        abbr: 'LINT',
        name: 'Line Islands Time',
        offset: 'UTC+14'
    },
    {
        code: 130,
        abbr: 'M',
        name: 'Mike Time Zone',
        offset: 'UTC+12'
    },
    {
        code: 131,
        abbr: 'MAGST',
        name: 'Magadan Summer Time',
        offset: 'UTC+12'
    },
    {
        code: 132,
        abbr: 'MAGT',
        name: 'Magadan Time',
        offset: 'UTC+11'
    },
    {
        code: 133,
        abbr: 'MART',
        name: 'Marquesas Time',
        offset: 'UTC-9:30'
    },
    {
        code: 134,
        abbr: 'MAWT',
        name: 'Mawson Time',
        offset: 'UTC+5'
    },
    {
        code: 135,
        abbr: 'MDT',
        name: 'Mountain Daylight Time',
        offset: 'UTC-6'
    },
    {
        code: 136,
        abbr: 'MHT',
        name: 'Marshall Islands Time',
        offset: 'UTC+12'
    },
    {
        code: 137,
        abbr: 'MMT',
        name: 'Myanmar Time',
        offset: 'UTC+6:30'
    },
    {
        code: 138,
        abbr: 'MSD',
        name: 'Moscow Daylight Time',
        offset: 'UTC+4'
    },
    {
        code: 139,
        abbr: 'MSK',
        name: 'Moscow Standard Time',
        offset: 'UTC+3'
    },
    {
        code: 140,
        abbr: 'MST',
        name: 'Mountain Standard Time',
        offset: 'UTC-7'
    },
    {
        code: 141,
        abbr: 'MT',
        name: 'Mountain Time',
        offset: 'UTC-7:00/-6:00'
    },
    {
        code: 142,
        abbr: 'MUT',
        name: 'Mauritius Time',
        offset: 'UTC+4'
    },
    {
        code: 143,
        abbr: 'MVT',
        name: 'Maldives Time',
        offset: 'UTC+5'
    },
    {
        code: 144,
        abbr: 'MYT',
        name: 'Malaysia Time',
        offset: 'UTC+8'
    },
    {
        code: 145,
        abbr: 'N',
        name: 'November Time Zone',
        offset: 'UTC-1'
    },
    {
        code: 146,
        abbr: 'NCT',
        name: 'New Caledonia Time',
        offset: 'UTC+11'
    },
    {
        code: 147,
        abbr: 'NDT',
        name: 'Newfoundland Daylight Time',
        offset: 'UTC-2:30'
    },
    {
        code: 148,
        abbr: 'NFDT',
        name: 'Norfolk Daylight Time',
        offset: 'UTC+12'
    },
    {
        code: 149,
        abbr: 'NFT',
        name: 'Norfolk Time',
        offset: 'UTC+11'
    },
    {
        code: 150,
        abbr: 'NOVST',
        name: 'Novosibirsk Summer Time',
        offset: 'UTC+7'
    },
    {
        code: 151,
        abbr: 'NOVT',
        name: 'Novosibirsk Time',
        offset: 'UTC+7'
    },
    {
        code: 152,
        abbr: 'NPT',
        name: 'Nepal Time ',
        offset: 'UTC+5:45'
    },
    {
        code: 153,
        abbr: 'NRT',
        name: 'Nauru Time',
        offset: 'UTC+12'
    },
    {
        code: 154,
        abbr: 'NST',
        name: 'Newfoundland Standard Time',
        offset: 'UTC-3:30'
    },
    {
        code: 155,
        abbr: 'NUT',
        name: 'Niue Time',
        offset: 'UTC-11'
    },
    {
        code: 156,
        abbr: 'NZDT',
        name: 'New Zealand Daylight Time',
        offset: 'UTC+13'
    },
    {
        code: 157,
        abbr: 'NZST',
        name: 'New Zealand Standard Time',
        offset: 'UTC+12'
    },
    {
        code: 158,
        abbr: 'O',
        name: 'Oscar Time Zone',
        offset: 'UTC-2'
    },
    {
        code: 159,
        abbr: 'OMSST',
        name: 'Omsk Summer Time',
        offset: 'UTC+7'
    },
    {
        code: 160,
        abbr: 'OMST',
        name: 'Omsk Standard Time',
        offset: 'UTC+6'
    },
    {
        code: 161,
        abbr: 'ORAT',
        name: 'Oral Time',
        offset: 'UTC+5'
    },
    {
        code: 162,
        abbr: 'P',
        name: 'Papa Time Zone',
        offset: 'UTC-3'
    },
    {
        code: 163,
        abbr: 'PDT',
        name: 'Pacific Daylight Time',
        offset: 'UTC-7'
    },
    {
        code: 164,
        abbr: 'PET',
        name: 'Peru Time',
        offset: 'UTC-5'
    },
    {
        code: 165,
        abbr: 'PETST',
        name: 'Kamchatka Summer Time',
        offset: 'UTC+12'
    },
    {
        code: 166,
        abbr: 'PETT',
        name: 'Kamchatka Time',
        offset: 'UTC+12'
    },
    {
        code: 167,
        abbr: 'PGT',
        name: 'Papua New Guinea Time',
        offset: 'UTC+10'
    },
    {
        code: 168,
        abbr: 'PHOT',
        name: 'Phoenix Island Time',
        offset: 'UTC+13'
    },
    {
        code: 169,
        abbr: 'PHT',
        name: 'Philippine Time',
        offset: 'UTC+8'
    },
    {
        code: 170,
        abbr: 'PKT',
        name: 'Pakistan Standard Time',
        offset: 'UTC+5'
    },
    {
        code: 171,
        abbr: 'PMDT',
        name: 'Pierre & Miquelon Daylight Time',
        offset: 'UTC-2'
    },
    {
        code: 172,
        abbr: 'PMST',
        name: 'Pierre & Miquelon Standard Time',
        offset: 'UTC-3'
    },
    {
        code: 173,
        abbr: 'PONT',
        name: 'Pohnpei Standard Time',
        offset: 'UTC+11'
    },
    {
        code: 174,
        abbr: 'PST',
        name: 'Pacific Standard Time',
        offset: 'UTC-8'
    },
    {
        code: 175,
        abbr: 'PST',
        name: 'Pitcairn Standard Time',
        offset: 'UTC-8'
    },
    {
        code: 176,
        abbr: 'PT',
        name: 'Pacific Time',
        offset: 'UTC-8:00/-7:00'
    },
    {
        code: 177,
        abbr: 'PWT',
        name: 'Palau Time',
        offset: 'UTC+9'
    },
    {
        code: 178,
        abbr: 'PYST',
        name: 'Paraguay Summer Time',
        offset: 'UTC-3'
    },
    {
        code: 179,
        abbr: 'PYT',
        name: 'Paraguay Time',
        offset: 'UTC-4'
    },
    {
        code: 180,
        abbr: 'PYT',
        name: 'Pyongyang Time',
        offset: 'UTC+8:30'
    },
    {
        code: 181,
        abbr: 'Q',
        name: 'Quebec Time Zone',
        offset: 'UTC-4'
    },
    {
        code: 182,
        abbr: 'QYZT',
        name: 'Qyzylorda Time',
        offset: 'UTC+6'
    },
    {
        code: 183,
        abbr: 'R',
        name: 'Romeo Time Zone',
        offset: 'UTC-5'
    },
    {
        code: 184,
        abbr: 'RET',
        name: 'Reunion Time',
        offset: 'UTC+4'
    },
    {
        code: 185,
        abbr: 'ROTT',
        name: 'Rothera Time',
        offset: 'UTC-3'
    },
    {
        code: 186,
        abbr: 'S',
        name: 'Sierra Time Zone',
        offset: 'UTC-6'
    },
    {
        code: 187,
        abbr: 'SAKT',
        name: 'Sakhalin Time',
        offset: 'UTC+11'
    },
    {
        code: 188,
        abbr: 'SAMT',
        name: 'Samara Time',
        offset: 'UTC+4'
    },
    {
        code: 189,
        abbr: 'SAST',
        name: 'South Africa Standard Time',
        offset: 'UTC+2'
    },
    {
        code: 190,
        abbr: 'SBT',
        name: 'Solomon Islands Time',
        offset: 'UTC+11'
    },
    {
        code: 191,
        abbr: 'SCT',
        name: 'Seychelles Time',
        offset: 'UTC+4'
    },
    {
        code: 192,
        abbr: 'SGT',
        name: 'Singapore Time',
        offset: 'UTC+8'
    },
    {
        code: 193,
        abbr: 'SRET',
        name: 'Srednekolymsk Time',
        offset: 'UTC+11'
    },
    {
        code: 194,
        abbr: 'SRT',
        name: 'Suriname Time',
        offset: 'UTC-3'
    },
    {
        code: 195,
        abbr: 'SST',
        name: 'Samoa Standard Time',
        offset: 'UTC-11'
    },
    {
        code: 196,
        abbr: 'SYOT',
        name: 'Syowa Time',
        offset: 'UTC+3'
    },
    {
        code: 197,
        abbr: 'T',
        name: 'Tango Time Zone',
        offset: 'UTC-7'
    },
    {
        code: 198,
        abbr: 'TAHT',
        name: 'Tahiti Time',
        offset: 'UTC-10'
    },
    {
        code: 199,
        abbr: 'TFT',
        name: 'French Southern and Antarctic Time',
        offset: 'UTC+5'
    },
    {
        code: 200,
        abbr: 'TJT',
        name: 'Tajikistan Time',
        offset: 'UTC+5'
    },
    {
        code: 201,
        abbr: 'TKT',
        name: 'Tokelau Time',
        offset: 'UTC+13'
    },
    {
        code: 202,
        abbr: 'TLT',
        name: 'East Timor Time',
        offset: 'UTC+9'
    },
    {
        code: 203,
        abbr: 'TMT',
        name: 'Turkmenistan Time',
        offset: 'UTC+5'
    },
    {
        code: 204,
        abbr: 'TOST',
        name: 'Tonga Summer Time',
        offset: 'UTC+14'
    },
    {
        code: 205,
        abbr: 'TOT',
        name: 'Tonga Time',
        offset: 'UTC+13'
    },
    {
        code: 206,
        abbr: 'TRT',
        name: 'Turkey Time',
        offset: 'UTC+3'
    },
    {
        code: 207,
        abbr: 'TVT',
        name: 'Tuvalu Time',
        offset: 'UTC+12'
    },
    {
        code: 208,
        abbr: 'U',
        name: 'Uniform Time Zone',
        offset: 'UTC-8'
    },
    {
        code: 209,
        abbr: 'ULAST',
        name: 'Ulaanbaatar Summer Time',
        offset: 'UTC+9'
    },
    {
        code: 210,
        abbr: 'ULAT',
        name: 'Ulaanbaatar Time',
        offset: 'UTC+8'
    },
    {
        code: 211,
        abbr: 'UTC',
        name: 'Coordinated Universal Time',
        offset: 'UTC'
    },
    {
        code: 212,
        abbr: 'UYST',
        name: 'Uruguay Summer Time',
        offset: 'UTC-2'
    },
    {
        code: 213,
        abbr: 'UYT',
        name: 'Uruguay Time',
        offset: 'UTC-3'
    },
    {
        code: 214,
        abbr: 'UZT',
        name: 'Uzbekistan Time',
        offset: 'UTC+5'
    },
    {
        code: 215,
        abbr: 'V',
        name: 'Victor Time Zone',
        offset: 'UTC-9'
    },
    {
        code: 216,
        abbr: 'VET',
        name: 'Venezuelan Standard Time',
        offset: 'UTC-4'
    },
    {
        code: 217,
        abbr: 'VLAST',
        name: 'Vladivostok Summer Time',
        offset: 'UTC+11'
    },
    {
        code: 218,
        abbr: 'VLAT',
        name: 'Vladivostok Time',
        offset: 'UTC+10'
    },
    {
        code: 219,
        abbr: 'VOST',
        name: 'Vostok Time',
        offset: 'UTC+6'
    },
    {
        code: 220,
        abbr: 'VUT',
        name: 'Vanuatu Time',
        offset: 'UTC+11'
    },
    {
        code: 221,
        abbr: 'W',
        name: 'Whiskey Time Zone',
        offset: 'UTC-10'
    },
    {
        code: 222,
        abbr: 'WAKT',
        name: 'Wake Time',
        offset: 'UTC+12'
    },
    {
        code: 223,
        abbr: 'WARST',
        name: 'Western Argentine Summer Time',
        offset: 'UTC-3'
    },
    {
        code: 224,
        abbr: 'WAST',
        name: 'West Africa Summer Time',
        offset: 'UTC+2'
    },
    {
        code: 225,
        abbr: 'WAT',
        name: 'West Africa Time',
        offset: 'UTC+1'
    },
    {
        code: 226,
        abbr: 'WEST',
        name: 'Western European Summer Time',
        offset: 'UTC+1'
    },
    {
        code: 227,
        abbr: 'WET',
        name: 'Western European Time',
        offset: 'UTC+0'
    },
    {
        code: 228,
        abbr: 'WFT',
        name: 'Wallis and Futuna Time',
        offset: 'UTC+12'
    },
    {
        code: 229,
        abbr: 'WGST',
        name: 'Western Greenland Summer Time',
        offset: 'UTC-2'
    },
    {
        code: 230,
        abbr: 'WGT',
        name: 'West Greenland Time',
        offset: 'UTC-3'
    },
    {
        code: 231,
        abbr: 'WIB',
        name: 'Western Indonesian Time',
        offset: 'UTC+7'
    },
    {
        code: 232,
        abbr: 'WIT',
        name: 'Eastern Indonesian Time',
        offset: 'UTC+9'
    },
    {
        code: 233,
        abbr: 'WITA',
        name: 'Central Indonesian Time',
        offset: 'UTC+8'
    },
    {
        code: 234,
        abbr: 'WST',
        name: 'West Samoa Time',
        offset: 'UTC+13'
    },
    {
        code: 235,
        abbr: 'WST',
        name: 'Western Sahara Summer Time',
        offset: 'UTC+1'
    },
    {
        code: 236,
        abbr: 'WT',
        name: 'Western Sahara Standard Time',
        offset: 'UTC+0'
    },
    {
        code: 237,
        abbr: 'X',
        name: 'X-ray Time Zone',
        offset: 'UTC-11'
    },
    {
        code: 238,
        abbr: 'Y',
        name: 'Yankee Time Zone',
        offset: 'UTC-12'
    },
    {
        code: 239,
        abbr: 'YAKST',
        name: 'Yakutsk Summer Time',
        offset: 'UTC+10'
    },
    {
        code: 240,
        abbr: 'YAKT',
        name: 'Yakutsk Time',
        offset: 'UTC+9'
    },
    {
        code: 241,
        abbr: 'YAPT',
        name: 'Yap Time',
        offset: 'UTC+10'
    },
    {
        code: 242,
        abbr: 'YEKST',
        name: 'Yekaterinburg Summer Time',
        offset: 'UTC+6'
    },
    {
        code: 243,
        abbr: 'YEKT',
        name: 'Yekaterinburg Time',
        offset: 'UTC+5'
    },
    {
        code: 244,
        abbr: 'Z',
        name: 'Zulu Time Zone',
        offset: 'UTC+0'
    }
];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  abc: MatAutocomplete;

  ngOnInit() {
    this.listTimezone.forEach((value: any, i) => {
      // JST (UTC+9) Japan Standard Time
      this.listTimezone[i].display = `${value.abbr} (${value.offset}) ${value.name}`;
      this.listTimezone[i].displayMin = `${value.abbr} (${value.offset})`;
    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.display),
        map(display => display ? this._filter(display) : this.listTimezone.slice())
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.listTimezone.filter(option => option.display.toLowerCase().includes(filterValue));
  }

  displayTimezone(option: any): string {
    return option && option.displayMin ? option.displayMin : '';
  }
}
