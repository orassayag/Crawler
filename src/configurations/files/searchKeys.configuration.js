/* cSpell:disable */
const { SearchKeyModel } = require('../../core/models/application');
const { SearchKeyTypeEnum } = require('../../core/enums');

const advanceSearchKeys = [
    // ===NEED=== //
    [new SearchKeyModel({ keyType: SearchKeyTypeEnum.NEED, maleKey: 'דרוש', femaleKey: 'דרושה', bothKey: 'דרוש/ה' })],
    // ===PERSON=== //
    [
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PERSON, isMultiFemaleKey: true, maleKey: 'מזכיר', femaleKey: 'מזכירה,מזכירת', bothKey: 'מזכיר/ה' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PERSON, isMultiFemaleKey: true, maleKey: 'פקיד', femaleKey: 'פקידה,פקידת', bothKey: 'פקיד/ת' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PERSON, maleKey: 'אחראי', femaleKey: 'אחראית', bothKey: 'אחראי/ת' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PERSON, maleKey: 'איש', femaleKey: 'אשת', bothKey: 'אש/ת' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PERSON, maleKey: 'מוקדן', femaleKey: 'מוקדנית', bothKey: 'מוקדנ/ית' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PERSON, maleKey: 'מנהל', femaleKey: 'מנהלת', bothKey: 'מנהל/ת' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PERSON, maleKey: 'מתאם', femaleKey: 'מתאמת', bothKey: 'מתאמ/ת' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PERSON, maleKey: 'עובד', femaleKey: 'עובדת', bothKey: 'עובד/ת' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PERSON, maleKey: 'רכז', femaleKey: 'רכזת', bothKey: 'רכז/ת' })
    ],
    // ===PROFESSION=== //
    [
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'אגף שיקומי' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'אחה"צ' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'אספקות' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'בוקר' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'גבייה' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'דוקומנטים' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'הדרכה' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'השתלמויות' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'חשבונות' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'יח"צ' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'ייבוא וייצוא' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'ייבוא' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'ייצוא' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'כספים' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'מוקד' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'מחלקת חשבונות' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'מחסן רכש' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'מחסן' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'מטה' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'מכירות' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'מנכ"ל' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'מרפאה' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'משלוחים' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'משרד' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'ניהול מלאי' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'סניף' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'עו"ד' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'עורך דין' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'עמדה' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'ערב' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'פגישות' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'פרוייקטים' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'צוות' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'רכש' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'שטח' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'שיווק' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'שירות' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, globalKey: 'תפעול' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, isMiddleReplace: true, globalKey: 'אחר צהריים' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, isMiddleReplace: true, globalKey: 'בק אופיס' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, isMiddleReplace: true, globalKey: 'יחסי ציבור' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, isMiddleReplace: true, globalKey: 'משאבי אנוש' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, maleKey: 'אדמיניסטרטיבי', femaleKey: 'אדמיניסטרטיבית', bothKey: 'אדמיניסטרטיבי/ת' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, maleKey: 'אישי', femaleKey: 'אישית', bothKey: 'אישי/ת' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, maleKey: 'זמני', femaleKey: 'זמנית', bothKey: 'זמני/ת' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.PROFESSION, maleKey: 'רפואי', femaleKey: 'רפואית', bothKey: 'רפואי/ת' })
    ],
    // ===RELATION=== //
    [new SearchKeyModel({ keyType: SearchKeyTypeEnum.RELATION, isNoSpaceAfter: true, globalKey: 'ב' })],
    // ===CITY=== //
    [
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, globalKey: 'השרון' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, globalKey: 'הוד"ש' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, globalKey: 'כפ"ס' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, globalKey: 'צופית' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, globalKey: 'קדימה' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, globalKey: 'רמה"ש' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, globalKey: 'רעננה' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, globalKey: 'רשפון' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, isMiddleReplace: true, globalKey: 'אזור השרון' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, isMiddleReplace: true, globalKey: 'אבן יהודה' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, isMiddleReplace: true, globalKey: 'בני דרור' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, isMiddleReplace: true, globalKey: 'בני ציון' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, isMiddleReplace: true, globalKey: 'גבעת חן' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, isMiddleReplace: true, globalKey: 'הוד השרון' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, isMiddleReplace: true, globalKey: 'הרצליה פיתוח' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, isMiddleReplace: true, globalKey: 'כוכב יאיר' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, isMiddleReplace: true, globalKey: 'כפר סבא' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, isMiddleReplace: true, globalKey: 'ניר אליהו' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, isMiddleReplace: true, globalKey: 'רמות השבים' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, isMiddleReplace: true, globalKey: 'רמת השרון' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, isMiddleReplace: true, globalKey: 'שדה ורבורג' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, isMiddleReplace: true, globalKey: 'תל יצחק' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.CITY, isMiddleReplace: true, globalKey: 'תל מונד' })
    ],
    // ===EMAIL ADDRESS=== //
    [
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.EMAIL_ADDRESS, globalKey: 'E-mail' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.EMAIL_ADDRESS, globalKey: 'e-mail' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.EMAIL_ADDRESS, globalKey: 'Email' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.EMAIL_ADDRESS, globalKey: 'email' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.EMAIL_ADDRESS, globalKey: 'אימייל' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.EMAIL_ADDRESS, globalKey: 'דוא"ל' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.EMAIL_ADDRESS, globalKey: 'דואל' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.EMAIL_ADDRESS, globalKey: 'מייל' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.EMAIL_ADDRESS, isMiddleReplace: true, globalKey: 'אי מייל' }),
        new SearchKeyModel({ keyType: SearchKeyTypeEnum.EMAIL_ADDRESS, isMiddleReplace: true, globalKey: 'דואר אלקטרוני' })
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