var mongoose = require('mongoose'),
    crypto = require('crypto');

module.exports = function(config){
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.once('open',function(err){
        if (err){
            console.log('Database cannot be opened: ' + err);
            return;
        }
        console.log('Database up and running ...');
    });
    db.on('error',function(err){
        console.log('Database error: ' + err);
    });

    var userSchema = mongoose.Schema ({
        username: String,
        firstName: String,
        lastName: String,
        salt: String,
        hashPass: String,
        roles: [String]
    });

    userSchema.method ({
        authenticate: function(password){
            if (generateHashedPassword(this.salt, password) === this.hashPass) {
                return (true);
            }
            else {
                return (false);
            }
        }
    });

    var user = mongoose.model('User',userSchema);
    user.find({}).exec(function(err, collection) {
       if (err) {
           console.log('Cannot find users: ' + err);
           return;
       }

        // if you want to clear the DB and push same data to it just remove the "//", each
     //user.remove(function(){

          if (collection.length === 0) {
              var salt;
              var hashedPwd;
              salt = generateSalt();
              hashedPwd = generateHashedPassword(salt, 'zlatozar');
              user.create({username: 'zorowatt', firstName: 'Zlatozar', lastName: 'Dichev', salt: salt, hashPass: hashedPwd, roles: ['admin']});
              salt = generateSalt();
              hashedPwd = generateHashedPassword(salt, 'eva');
              user.create({username: 'evichka', firstName: 'Eva', lastName: 'Dobreva', salt: salt, hashPass: hashedPwd, roles: ['user']});
              salt = generateSalt();
              hashedPwd = generateHashedPassword(salt, 'petia');
              user.create({username: 'maika', firstName: 'Patia', lastName: 'Petkova', salt: salt, hashPass: hashedPwd});
              console.log('New users added to DB ... ');
          }
     // })
    });

    var teacherSchema = mongoose.Schema ({
        id: Number,
        name: String,
        picture: String,
        concourse: [String],
        rang: String,
        teachingCourses: [String],
        additionalInfo: String
    });
    var teacher = mongoose.model('Teacher',teacherSchema);
    teacher.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find users: ' + err);
            return;
        }

        // if you want to clear the DB and push same data to it just remove the "//", each
        //user.remove(function(){

        if (collection.length === 0) {
            teacher.create({
                id: 2,
                name: 'Росен Михайлов',
                picture: 'Roco.jpg',
                concourse: [
                    '1999 Конкурс за барманско изкуство „Варна 99” – III място редовен клас',
                    '1999 Johny Walker College – сертификат' ,
                    '1999 Конкурс барманско изкуство „Златен шейкър” – III място',
                    '2000 Квалификации национален конкурс “Beefeater” Гранд Хотел Варна – V място',
                    '2000 Финали национален конкурс „Beefeater” дискотека “Escape” София – I място стил бързо смесване',
                    '2002 Академия “Beefeater”',
                    '2005 Академия „Marrie Brizard”- семинар',
                    '2006 Академия „Maker’s Mark Distillery “ - семинар',
                    '2007 Official certificate „Famous Grouse ” – семинар',
                    '2009 Сертификат “MONIN” Световни тендеции в коктейлите',
                    '2010 Жури конкурс за бармани БАБ',
                    '2010 Семинар “JIM BEAM” Фред Ноа',
                    '2011 Семинар „MONIN” Александър Лапиер - директор иновации Централна Европа',
                    '2011 Жури конкурс за бармани БАБ',
                    '2012 Жури конкурс за бармани БАБ',
                    '2013 Жури конкурс за бармани БАБ'
                ],
                rang:'.',
                teachingCourses:['Преподавател курс - бармани',''],
                additionalInfo:'Към момента е член на Контролния съвет в Българска Асоциация на Барманите, управител на "Playground" THE MALL SOFIA и бранд амбасадор на "МОНИН".'
            });
            teacher.create({
                id: 1,
                name: 'Лозан Лозев',
                picture: 'Lozan.jpg',
                concourse: [
                    '1993 "Астория" "Най-млад барман в България"',
                    '1994 "Астория" "Най-млад барман в България"',
                    '1995 "Астория" "Най-млад барман в България"',
                    '1996 Изложение "Хорека" - "Най-млад барман в България" - 3 място',
                    '1998 "Най-млад барман в България" категория "Флеър", конкурс на Johnie Walker',
                    '2001 Конкурс на "БАБ" Варна - 3 място',
                    '2002 - 2003 шеф-барман Казино "Черно море" Варна',
                    '2003 - 2009 управител бар-ресторант Казино "Черно море" Варна',
                    '2009 Национален конкурс за бармани БАБ - Варна - жури и организатор',
                    '2010 Национален конкурс за бармани БАБ - Варна - жури и организатор',
                    '2011 Национален конкурс за бармани БАБ - Варна - жури и организатор',
                    '2011 Семинар „MONIN” Александър Лапиер - директор иновации Централна Европа',
                    '2012 Академия "MONIN" Франция 2012 Национален конкурс за бармани БАБ - Варна - жури и организатор',
                    '2012 Национален конкурс за бармани БАБ - Варна - жури и организатор',
                    '2013 Национален конкурс за бармани БАБ - Варна - жури и организатор'
                ],
                rang:'.',
                teachingCourses:['Преподавател курс - бармани',''],
                additionalInfo:'Към момента е член на Управителния съвет в Българска Асоциация на Барманите, мениджър на "Министерство на коктейлите" КК Златни пясъци и бранд амбасадор на "МОНИН".'
            });
            teacher.create({
                id: 0,
                name: 'Ивайло Рангелов',
                picture: 'Ivailo.jpg',
                concourse: [
                    '1994 Национален конкурс за бармани БАБ -  Шумен -  "Най- атрактивен барман" (флеър)  - 1 място',
                    '1995 Национален конкурс за бармани БАБ - Русе -  "Най-атрактивен барман"  (флеър) - 1 място',
                    '1996 Национален конкурс за бармани БАБ - Слънчев бряг  -  1 място',
                    '1996 Конкурс "Златен шейкър"   Албена  "Награда на публиката"  -  1 място',
                    '1997 Конкурс за млади бармани - Любимец  - 2 място',
                    '1997 Конкурс за барманско изкуство на "Johnie Walker"  Варна  "Майсторски клас" -  1 място',
                    '1997 Коктейлно шоу, изложение "Хорека" Варна  - 1 място',
                    '1997 Национално състезание за бармани "Ballantines"  София  -  2 място',
                    '1998 Национално състезание за бармани "Beefeater"  Варна -  2 място',
                    '1999 Национално състезание за бармани "Beefeater"  София - 3  място',
                    '1999 Академия Мари Бризар',
                    '1999 Национален конкурс за барманско изкуство на  "Johnie Walker"  София -  "Награда на пубиката" -  1 място',
                    '1999 Национално състезание по барманство на "Beefeater"  София  -  "Флеър" - 1 място',
                    '1999 Конкурс за барманско изкуство на "Johnie Walker"  Варна "Майсторски клас" - 1 място',
                    '2000 Регионален конкурс за барманско изкуство на "Johnie Walker"  Варна "Майсторски клас" -  2 място',
                    '2000 Делегат по приемане на БАБ в IBA',
                    '2000 Национален конкурс за барманско изкуство на "Johnie Walker"  Варна -  "Майсторски клас" - 1 място',
                    '2001 Световен конкурс за бармани ÏBA  Рио Де Жанейро, Бразилия - 13 място от 50 държави',
                    '2002 Диплом на "Beefeater"  -  "Най-добър учител" -  Варна',
                    '2002 Академия "Absolut"  - Варна',
                    '2002 Национален коктейл конкурс - Габрово - жури',
                    '2003 Finlandia Vodka Cup - Албена - жури',
                    '2003 Национален конкурс за бармани БАБ - Трявна  - жури и организатор',
                    '2004 Национален конкурс за бармани  БАБ - Габрово   - жури',
                    '2006 Национален конкурс за бармани  БАБ - Бургас  - жури',
                    '2007 Академия "Mackers Mark"',
                    '2007 Национален конкурс за бармани БАБ - Варна  - жури и организатор',
                    '2008 Национален конкурс за бармани БАБ - Варна  - жури и организатор',
                    '2008 Finlandia Vodka Cup - София - жури',
                    '2009 Национален конкурс за бармани БАБ - София  - жури и организатор',
                    '2009 Сертификат “MONIN” Световни тендеции в коктейлите',
                    '2010 Национален конкурс за бармани БАБ - Варна - жури и организатор',
                    '2010 Академия "BOLS" Амстердам, Холандия',
                    '2011 Семинар „MONIN” Александър Лапиер - директор иновации Централна Европа',
                    '2011 Национален конкурс за бармани БАБ - Варна - жури и организатор',
                    '2011 Национален бариста конкурс "Ла Ваца" Варна - жури',
                    '2011 Семинар „MONIN” Александър Лапиер - директор иновации Централна Европа',
                    '2012 Академия "MONIN" Франция',
                    '2012 Национален конкурс за бармани БАБ - Варна - жури и организатор',
                    '2013 Национален конкурс за бармани БАБ - Варна - жури и организатор'],
                rang: 'Основател на школите',
                teachingCourses: ['Преподавател курс - бармани и майсторски клас',''],
                additionalInfo: 'Към момента е член на Контролния съвет в Българска Асоциация на Барманите и собственик на коктейл-барове "The Garden Bar" гр.Варна, "Тики Бар" гр.София.'
            });


            console.log('New users added to DB ... ');
        }
        // })
    });






};

function generateSalt(){
    return crypto.randomBytes(128).toString('base64');
}

function generateHashedPassword(salt, pwd){
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
}