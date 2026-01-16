/**
 * Model for Raskovnik, by Ognjen Todorovic
 */
import Character from './Character.js';
export default class CharacterRaskovnik extends Character {
    /**
      * @prop {String} key Unique (in one instance of the app) id for the character. 7 Random letters/numbers.
      * @prop {String} charname Name.
      * @prop {String} birthmark Characters birthmark, usually used for social situations.
      * @prop {String} birthday String data in case someone wants to write the names of the months.
      * @prop {Number} level
      * @prop {Number} speed
      * @prop {Number} strenght
      * @prop {Number} agility
      * @prop {Number} presence
      * @prop {Number} charisma
      * @prop {Number} reflex
      * @prop {Number} magical_reflex
      * @prop {Number} armor
      * @prop {Number} magical_armor
      * @prop {Number} hp_cur
      * @prop {Number} hp_max
      * @prop {Number} stamina
      * @prop {Number} silver
      * @prop {Number} expirience
      * @prop {Number} notoriety
      * @prop {CharacterNote[]} notes_adv Adventure notes
      * @prop {CharacterNote[]} notes_cam Campaign notes
      * @prop {CharacterNote[]} npcs NPC notes
      * @prop {CharacterNote[]} factions NPC notes
      * @prop {CharacterNote[]} partymembers Other party members.
      * @prop {String} key_prev If character was imported into app with identical key. This is that key and the character is given a new one on import.
      */
    constructor ({
        key = '',
        charname = '',
        birthmark = '',
        birthday ='19.01.1997',
        level = 1,
        speed = 4,
        strenght = 0,
        agility = 0,
        presence = 0,
        charisma = 0,
        hp_cur = 0,
        hp_max = 0,
        armor = 0,
        magical_armor=0,
        reflex=10,
        magical_reflex = 10,
        stamina = 0,
        notoriety= 0,
        expirience = 0,
        appearance = '',
        personality = '',
        inventory = [],
        silver = 0,
        notes = '',
        notes_adv = [],
        notes_cam = [],
        npcs = [],
        factions = [],
        partymembers = [],
        updated = '',
        key_prev = '',
        version = ''
    }) {
        super({
            key,
            charname,
            updated,
            key_prev,
            version
        });
        this.key = key;
        this.charname = charname;
        this.birthmark = birthmark;
        this.birthday = birthmark;
        this.level = level;
        this.notes = notes;
        this.speed  = speed;
        this.strenght = strenght;
        this.agility = agility;
        this.presence = presence;
        this.charisma = charisma;
        this.reflex = reflex;
        this.magical_reflex = magical_reflex;
        this.magical_armor = magical_armor;
        this.hp_cur = hp_cur;
        this.hp_max = hp_max;
        this.stamina = stamina;
        this.silver = silver;
        this.expirience = expirience;
        this.notoriety = notoriety;
        this.notes_adv = this._convertNotes(notes_adv);
        this.notes_cam = this._convertNotes(notes_cam);
        this.npcs = this._convertNotes(npcs);
        this.factions = this._convertNotes(factions);
        this.partymembers = this._convertNotes(partymembers);

        this.emitter = null;
    }
    /**
     * Class name (for JSON (de)serialization). Override in children.
     */
    get className () {
        return 'CharacterRaskovnik';
    }
    /**
     * Ruleset name. Override in children.
     */
    get ruleset () {
        return 'Raskovnik';
    }
};
