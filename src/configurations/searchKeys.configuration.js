/* cSpell:disable */
const { SearchKey } = require('../core/models/application');
const { SearchKeyType } = require('../core/enums');

const advanceSearchKeys = [
    // ===NEED=== //
    [new SearchKey({ keyType: SearchKeyType.NEED, maleKey: 'דרוש', femaleKey: 'דרושה', bothKey: 'דרוש/ה' })],
    // ===PERSON=== //
    [
        new SearchKey({ keyType: SearchKeyType.PERSON, isMultiFemaleKey: true, maleKey: 'מזכיר', femaleKey: 'מזכירה,מזכירת', bothKey: 'מזכיר/ה' }),
        new SearchKey({ keyType: SearchKeyType.PERSON, isMultiFemaleKey: true, maleKey: 'פקיד', femaleKey: 'פקידה,פקידת', bothKey: 'פקיד/ת' }),
        new SearchKey({ keyType: SearchKeyType.PERSON, maleKey: 'אחראי', femaleKey: 'אחראית', bothKey: 'אחראי/ת' }),
        new SearchKey({ keyType: SearchKeyType.PERSON, maleKey: 'איש', femaleKey: 'אשת', bothKey: 'אש/ת' }),
        new SearchKey({ keyType: SearchKeyType.PERSON, maleKey: 'מוקדן', femaleKey: 'מוקדנית', bothKey: 'מוקדנ/ית' }),
        new SearchKey({ keyType: SearchKeyType.PERSON, maleKey: 'מנהל', femaleKey: 'מנהלת', bothKey: 'מנהל/ת' }),
        new SearchKey({ keyType: SearchKeyType.PERSON, maleKey: 'מתאם', femaleKey: 'מתאמת', bothKey: 'מתאמ/ת' }),
        new SearchKey({ keyType: SearchKeyType.PERSON, maleKey: 'עובד', femaleKey: 'עובדת', bothKey: 'עובד/ת' }),
        new SearchKey({ keyType: SearchKeyType.PERSON, maleKey: 'רכז', femaleKey: 'רכזת', bothKey: 'רכז/ת' })
    ],
    // ===PROFESSION=== //
    [
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'אגף שיקומי' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'אחה"צ' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'אספקות' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'בוקר' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'גבייה' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'דוקומנטים' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'הדרכה' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'השתלמויות' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'חשבונות' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'יח"צ' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'ייבוא וייצוא' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'ייבוא' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'ייצוא' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'כספים' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'מוקד' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'מחלקת חשבונות' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'מחסן רכש' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'מחסן' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'מטה' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'מכירות' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'מנכ"ל' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'מרפאה' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'משלוחים' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'משרד' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'ניהול מלאי' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'סניף' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'עו"ד' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'עורך דין' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'עמדה' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'ערב' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'פגישות' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'פרוייקטים' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'צוות' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'רכש' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'שטח' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'שיווק' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'שירות' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, globalKey: 'תפעול' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, isMiddleReplace: true, globalKey: 'אחר צהריים' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, isMiddleReplace: true, globalKey: 'בק אופיס' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, isMiddleReplace: true, globalKey: 'יחסי ציבור' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, isMiddleReplace: true, globalKey: 'משאבי אנוש' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, maleKey: 'אדמיניסטרטיבי', femaleKey: 'אדמיניסטרטיבית', bothKey: 'אדמיניסטרטיבי/ת' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, maleKey: 'אישי', femaleKey: 'אישית', bothKey: 'אישי/ת' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, maleKey: 'זמני', femaleKey: 'זמנית', bothKey: 'זמני/ת' }),
        new SearchKey({ keyType: SearchKeyType.PROFESSION, maleKey: 'רפואי', femaleKey: 'רפואית', bothKey: 'רפואי/ת' })
    ],
    // ===RELATION=== //
    [new SearchKey({ keyType: SearchKeyType.RELATION, isNoSpaceAfter: true, globalKey: 'ב' })],
    // ===CITY=== //
    [
        new SearchKey({ keyType: SearchKeyType.CITY, globalKey: 'השרון' }),
        new SearchKey({ keyType: SearchKeyType.CITY, globalKey: 'הוד"ש' }),
        new SearchKey({ keyType: SearchKeyType.CITY, globalKey: 'כפ"ס' }),
        new SearchKey({ keyType: SearchKeyType.CITY, globalKey: 'צופית' }),
        new SearchKey({ keyType: SearchKeyType.CITY, globalKey: 'קדימה' }),
        new SearchKey({ keyType: SearchKeyType.CITY, globalKey: 'רמה"ש' }),
        new SearchKey({ keyType: SearchKeyType.CITY, globalKey: 'רעננה' }),
        new SearchKey({ keyType: SearchKeyType.CITY, globalKey: 'רשפון' }),
        new SearchKey({ keyType: SearchKeyType.CITY, isMiddleReplace: true, globalKey: 'אזור השרון' }),
        new SearchKey({ keyType: SearchKeyType.CITY, isMiddleReplace: true, globalKey: 'אבן יהודה' }),
        new SearchKey({ keyType: SearchKeyType.CITY, isMiddleReplace: true, globalKey: 'בני דרור' }),
        new SearchKey({ keyType: SearchKeyType.CITY, isMiddleReplace: true, globalKey: 'בני ציון' }),
        new SearchKey({ keyType: SearchKeyType.CITY, isMiddleReplace: true, globalKey: 'גבעת חן' }),
        new SearchKey({ keyType: SearchKeyType.CITY, isMiddleReplace: true, globalKey: 'הוד השרון' }),
        new SearchKey({ keyType: SearchKeyType.CITY, isMiddleReplace: true, globalKey: 'הרצליה פיתוח' }),
        new SearchKey({ keyType: SearchKeyType.CITY, isMiddleReplace: true, globalKey: 'כוכב יאיר' }),
        new SearchKey({ keyType: SearchKeyType.CITY, isMiddleReplace: true, globalKey: 'כפר סבא' }),
        new SearchKey({ keyType: SearchKeyType.CITY, isMiddleReplace: true, globalKey: 'ניר אליהו' }),
        new SearchKey({ keyType: SearchKeyType.CITY, isMiddleReplace: true, globalKey: 'רמות השבים' }),
        new SearchKey({ keyType: SearchKeyType.CITY, isMiddleReplace: true, globalKey: 'רמת השרון' }),
        new SearchKey({ keyType: SearchKeyType.CITY, isMiddleReplace: true, globalKey: 'שדה ורבורג' }),
        new SearchKey({ keyType: SearchKeyType.CITY, isMiddleReplace: true, globalKey: 'תל יצחק' }),
        new SearchKey({ keyType: SearchKeyType.CITY, isMiddleReplace: true, globalKey: 'תל מונד' })
    ],
    // ===EMAIL ADDRESS=== //
    [
        new SearchKey({ keyType: SearchKeyType.EMAIL_ADDRESS, globalKey: 'E-mail' }),
        new SearchKey({ keyType: SearchKeyType.EMAIL_ADDRESS, globalKey: 'e-mail' }),
        new SearchKey({ keyType: SearchKeyType.EMAIL_ADDRESS, globalKey: 'Email' }),
        new SearchKey({ keyType: SearchKeyType.EMAIL_ADDRESS, globalKey: 'email' }),
        new SearchKey({ keyType: SearchKeyType.EMAIL_ADDRESS, globalKey: 'אימייל' }),
        new SearchKey({ keyType: SearchKeyType.EMAIL_ADDRESS, globalKey: 'דוא"ל' }),
        new SearchKey({ keyType: SearchKeyType.EMAIL_ADDRESS, globalKey: 'דואל' }),
        new SearchKey({ keyType: SearchKeyType.EMAIL_ADDRESS, globalKey: 'מייל' }),
        new SearchKey({ keyType: SearchKeyType.EMAIL_ADDRESS, isMiddleReplace: true, globalKey: 'אי מייל' }),
        new SearchKey({ keyType: SearchKeyType.EMAIL_ADDRESS, isMiddleReplace: true, globalKey: 'דואר אלקטרוני' })
    ]
];

const basicSearchKeys = [
    [ // ===PROFESSION=== //
        'אדמיניסטרציה',
        'אחראית ייבוא',
        'אחראית ייצוא',
        'אחראית כספים',
        'אחראית משאבי אנוש',
        'אחראית משרד',
        'אחראית ניהול מלאי',
        'אחראית ניהול',
        'אחראית סניף',
        'אחראית רכש',
        'אחראית שיווק',
        'אחראית תפעול',
        'אשת יחסי ציבור',
        'ייבוא וייצוא',
        'כוח אדם',
        'מוקדנית',
        'מזכירה אישית',
        'מזכירה לאגף שיקומי',
        'מזכירה למרפאה',
        'מזכירה למשרד',
        'מזכירה רפואית',
        'מזכירה',
        'מזכירות',
        'מזכירת הנהלה',
        'מזכירת מטה',
        'מזכירת מנכ"ל',
        'מזכירת משנה למנכ"ל',
        'מזכירת סניף',
        'מזכירת עורך דין',
        'מזכירת ערב',
        'מזכירת שיווק',
        'מנהל/ת תפעול',
        'מנהלת אדמיניסטרטיבית',
        'מנהלת בק אופיס',
        'מנהלת הדרכה',
        'מנהלת השתלמויות',
        'מנהלת חשבונות',
        'מנהלת כספים',
        'מנהלת מוקד',
        'מנהלת משאבי אנוש',
        'מנהלת משרד',
        'מנהלת סניף',
        'מנהלת פרוייקטים',
        'מנהלת צוות',
        'מנהלת רכש',
        'מנהלת שיווק',
        'מנהלת תפעול',
        'מתאמת אספקות',
        'מתאמת מכירות',
        'מתאמת פגישות',
        'מתאמת',
        'ניהול משרד',
        'עובדת אדמיניסטרציה',
        'פקידה במחלקת חשבונות',
        'פקידה זמנית',
        'פקידה למזכירת מנכ"ל',
        'פקידת ביטוח',
        'פקידת גבייה',
        'פקידת דוקומנטים',
        'פקידת ייבוא',
        'פקידת ייצוא',
        'פקידת מוקד',
        'פקידת מחסן רכש',
        'פקידת מחסן',
        'פקידת משלוחים',
        'פקידת משרד',
        'פקידת עורך דין',
        'פקידת קבלה',
        'פקידת רכש',
        'פקידת שטח',
        'פקידת שיווק',
        'פקידת',
        'רכזת משאבי אנוש',
        'רכזת סניף',
        'רכזת עמדה',
        'רכזת פרוייקטים',
        'רפרנטית שירות'
    ],
    [ // ===CITY=== //
        'אבן יהודה',
        'אבן-יהודה',
        'אודים',
        'ארסוף',
        'בית ינאי',
        'בית-ינאי',
        'בני דרור',
        'בני ציון',
        'בני-דרור',
        'בני-ציון',
        'גבעת חן',
        'גבעת-חן',
        'הוד השרון',
        'הוד-השרון',
        'הרצליה פיתוח',
        'הרצליה',
        'הרצליה-פיתוח',
        'ינוב',
        'כוכב יאיר',
        'כוכב-יאיר',
        'כפ"ס',
        'כפר יונה',
        'כפר סבא',
        'כפר-יונה',
        'כפר-סבא',
        'ניר אליהו',
        'ניר-אליהו',
        'נירית',
        'נתניה',
        'עמק חפר',
        'עמק-חפר',
        'פ"ת',
        'פרדסיה',
        'פתח תקווה',
        'פתח-תקווה',
        'צופית',
        'צור יגאל',
        'צור-יגאל',
        'צורן',
        'קדימה צורן',
        'קדימה',
        'קדימה-צורן',
        'ראש העין',
        'ראש-העין',
        'רמות השבים',
        'רמות-השבים',
        'רמת השרון',
        'רמת-השרון',
        'רעננה',
        'רשפון',
        'שדה ורבורג',
        'שדה-ורבורג',
        'שפיים',
        'תל יצחק',
        'תל מונד',
        'תל-יצחק',
        'תל-מונד',
        'תנובות'
    ],
    [ // ===EMAIL ADDRESS=== //
        'E-mail',
        'e-mail',
        'Email',
        'email',
        'אי מייל',
        'אי-מייל',
        'אימייל',
        'דוא"ל',
        'דואל',
        'דואר אלקטרוני',
        'דואר-אלקטרוני',
        'מייל'
    ]
];

module.exports = { advanceSearchKeys, basicSearchKeys };